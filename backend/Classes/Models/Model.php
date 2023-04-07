<?php

namespace Classes\Models;

use Dotenv\Dotenv;
use PDO;

abstract class Model
{

    protected $fillable = [];
    protected $table = '';
    protected $connection;

    public function __construct()
    {
        $dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
        $dotenv->load();

        $db_host = $_ENV['DB_HOST'];
        $db_port = $_ENV['DB_PORT'];
        $db_name = $_ENV['DB_NAME'];
        $db_user = $_ENV['DB_USER'];
        $db_pass = $_ENV['DB_PASS'];

        $this->connection = new PDO("pgsql:host=$db_host;port=$db_port;dbname=$db_name", $db_user, $db_pass);
    }

    public function raw(string $query): ?array
    {
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function read(): ?array
    {
        $stmt = $this->connection->prepare("SELECT * FROM {$this->table}");
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById(int $id, string $column = null): ?array
    {
        $query = "SELECT * FROM {$this->table} WHERE id = :id";

        if (!is_null($column) && $column !== 'id') {
            $query = "SELECT * FROM {$this->table} WHERE {$column} = :id";
        }

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id", $id);
        $stmt->execute();

        if ($column === 'id') {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }


    public function create(array $data): int
    {
        $query = "INSERT INTO {$this->table} ";
        $query .= "(" . implode(", ", $this->fillable) . ") ";
        $query .= "VALUES ";
        $query .= "(" . $this->preparePlaceholders($data) . ")";

        $stmt = $this->connection->prepare($query);

        foreach ($data as $key => $value) {
            if (in_array($key, $this->fillable)) {
                $stmt->bindValue(":{$key}", $value);
            }
        }

        $stmt->execute();
        return (int) $this->connection->lastInsertId();
    }

    public function update(int $id, array $data): int
    {
        $query = "UPDATE {$this->table} SET ";
        $setClauses = [];

        foreach ($data as $key => $value) {
            if (in_array($key, $this->fillable)) {
                $setClauses[] = "{$key} = :{$key}";
            }
        }

        $query .= implode(", ", $setClauses) . " WHERE id = :id";

        $stmt = $this->connection->prepare($query);

        foreach ($data as $key => $value) {
            if (in_array($key, $this->fillable)) {
                $stmt->bindValue(":{$key}", $value);
            }
        }

        $stmt->bindValue(":id", $id);

        $stmt->execute();
        return (int) $stmt->rowCount();
    }

    public function delete(int $id): int
    {
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        return (int) $stmt->rowCount();
    }

    public function store(array $data): int
    {
        if (isset($data['id'])) {
            return $this->update($data['id'], $data);
        } else {
            return $this->create($data);
        }
    }

    protected function preparePlaceholders(array $data): string
    {
        $placeholders = [];

        foreach ($data as $key => $value) {
            if (in_array($key, $this->fillable)) {
                $placeholders[] = ":{$key}";
            }
        }

        return implode(", ", $placeholders);
    }
}
