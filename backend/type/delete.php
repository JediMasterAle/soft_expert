<?php

use Classes\Models\Type;

require './../vendor/autoload.php';

$data = sanitizeArray($_GET);

if (!validateNumber($data['id'])) {
    return_error('O id deve ser um número.');
    die();
}

try {
    $store = new Type();
    $store->delete($data['id']);
    return_success('Item apagado com sucesso.');
} catch (\Throwable $th) {
    return_error('Falha ao modificar.');
    die();
}
