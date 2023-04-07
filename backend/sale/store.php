<?php

use Classes\Models\Sale;

require './../vendor/autoload.php';

$data = sanitizeArray($_POST);

if (empty($data['date']) || !validateDate($data['date'])) {
    return_error('O campo data ser preenchido com uma data válida.');
    die();
}

try {
    $store = new Sale();
    $store->create([
        'date' => $data['date']
    ]);
    return_success('Item salvo com sucesso.');
} catch (\Throwable $th) {
    return_error('Falha ao salvar.');
    die();
}
