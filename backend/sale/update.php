<?php

use Classes\Models\Sale;

require './../vendor/autoload.php';

$data = sanitizeArray($_POST);

if (empty($data['date']) || !validateDate($data['date'])) {
    return_error('O campo data ser preenchido com uma data válida.');
    die();
}

if (empty($data['id']) || !validateNumber($data['id'])) {
    return_error('O id deve ser um número.');
    die();
}

try {
    $store = new Sale();
    $store->update($data['id'], [
        'date' => $data['date']
    ]);
    return_success('Item modificado com sucesso.');
} catch (\Throwable $th) {
    return_error('Falha ao modificar.');
    die();
}
