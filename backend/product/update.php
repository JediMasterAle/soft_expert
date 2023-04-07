<?php

use Classes\Models\Product;

require './../vendor/autoload.php';

$data = sanitizeArray($_POST);

if (empty($data['name']) || !validateString($data['name'])) {
    return_error('O campo nome ser preenchido e ter no máximo 255 caracteres.');
    die();
}

if (empty($data['code']) || !validateString($data['code'])) {
    return_error('O campo código ser preenchido e ter no máximo 255 caracteres.');
    die();
}

if (empty($data['value']) || !validateNumber($data['value'])) {
    return_error('O campo valor deve ser preenchido e ser um número.');
    die();
}

if (empty($data['id']) || !validateNumber($data['id'])) {
    return_error('O id deve ser um número.');
    die();
}

if (empty($data['types_id']) || !validateNumber($data['types_id'])) {
    return_error('O campo tipo de produto deve ser um valor válido.');
    die();
}

try {
    $store = new Product();
    $store->update($data['id'], [
        'name' => $data['name'],
        'code' => $data['code'],
        'value' => $data['value'],
        'types_id' => $data['types_id']
    ]);
    return_success('Item modificado com sucesso.');
} catch (\Throwable $th) {
    return_error('Falha ao modificar.');
    die();
}
