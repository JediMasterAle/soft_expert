<?php

use Classes\Models\SaleProduct;

require './../vendor/autoload.php';

$data = sanitizeArray($_POST);

if (empty($data['id']) || !validateInteger($data['id'])) {
    return_error('Produto de venda não encontrado.');
    die();
}

if (empty($data['qty']) || !validateInteger($data['qty'])) {
    return_error('Indique a quantidade desejada.');
    die();
}

try {
    $store = new SaleProduct();
    $store->update($data['id'], [
        'qty' => $data['qty']
    ]);
    return_success('Item modificado com sucesso.');
} catch (\Throwable $th) {
    return_error('Falha ao modificar.');
    die();
}
