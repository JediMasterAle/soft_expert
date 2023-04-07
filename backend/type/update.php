<?php

use Classes\Models\Type;

require './../vendor/autoload.php';

$data = sanitizeArray($_POST);

if (empty($data['name']) || !validateString($data['name'])) {
    return_error('O campo nome ser preenchido e ter no máximo 255 caracteres.');
    die();
}

if (empty($data['tax']) || !validateNumber($data['tax'])) {
    return_error('O campo imposto deve ser preenchido e ser um número.');
    die();
}

if (empty($data['id']) || !validateNumber($data['id'])) {
    return_error('O id deve ser um número.');
    die();
}

try {
    $store = new Type();
    $store->update($data['id'], [
        'name' => $data['name'],
        'tax' => $data['tax']
    ]);
    return_success('Item modificado com sucesso.');
} catch (\Throwable $th) {
    return_error('Falha ao modificar.');
    die();
}
