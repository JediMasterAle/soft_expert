<?php

use PHPUnit\Framework\TestCase;
use Dotenv\Dotenv;
use PDO;

clearTables();

$base_url = "http://localhost:8000/type/";

test('Test page type/store', function () use ($base_url) {
    $url = $base_url . 'store.php';

    $data = array(
        'name' => 'Test Type',
        'tax' => 12.34,
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

test('Test page type', function () use ($base_url) {
    $url = $base_url . 'read.php';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

test('Test page type/update', function () use ($base_url) {
    $url = $base_url . 'update.php';

    $data = array(
        'name' => 'Test Type Update',
        'tax' => 12.34,
        'id' => 1,
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

function clearTables()
{
    $dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
    $dotenv->load();

    $db_host = $_ENV['DB_HOST'];
    $db_port = $_ENV['DB_PORT'];
    $db_name = $_ENV['DB_NAME'];
    $db_user = $_ENV['DB_USER'];
    $db_pass = $_ENV['DB_PASS'];

    $db = new PDO("pgsql:host=$db_host;port=$db_port;dbname=$db_name", $db_user, $db_pass);
    $db->exec('TRUNCATE 
    products_has_sales,
    sales,
    products,
    types;
    ');
    $db->exec('ALTER SEQUENCE products_id_seq RESTART WITH 1;');
    $db->exec('ALTER SEQUENCE sales_id_seq RESTART WITH 1;');
    $db->exec('ALTER SEQUENCE products_has_sales_id_seq RESTART WITH 1;');
    $db->exec('ALTER SEQUENCE types_id_seq RESTART WITH 1;');
}
