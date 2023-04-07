<?php

use Classes\Models\Product;
use Classes\Models\SaleProduct;
use Classes\Models\Type;

require './../vendor/autoload.php';

$data = sanitizeArray($_POST);

if (empty($data['sales_id']) || !validateInteger($data['sales_id'])) {
    return_error('Número de venda inválida.');
    die();
}
if (empty($data['products_id']) || !validateInteger($data['products_id'])) {
    return_error('Selecione o produto.');
    die();
}

if (empty($data['qty']) || !validateInteger($data['qty'])) {
    return_error('Indique a quantidade desejada.');
    die();
}

$products = new Product();
$product = $products->getById($data['products_id'])[0];

$types = new Type();
$type = $types->getById($product['types_id'])[0];

if (empty($type) || empty($product)) {
    return_error('Produto e/ou tipo não encontrado.');
    die();
}

try {
    $store = new SaleProduct();
    $store->create([
        'products_id' => $data['products_id'],
        'sales_id' => $data['sales_id'],
        'qty' => $data['qty'],
        'unit_value' => $product['value'],
        'unit_value_without_tax' => ($product['value'] * (1 - $type['tax'] / 100)),

    ]);
    return_success('Item salvo com sucesso.');
} catch (\Throwable $th) {
    return_error('Falha ao salvar.');
    die();
}
