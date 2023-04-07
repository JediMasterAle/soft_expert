<?php

use Classes\Models\Product;

require './../vendor/autoload.php';

try {
    $read = new Product();
    $query = "SELECT 
    products.id AS id, products.name AS name, products.code AS code, ROUND(products.value,2) AS value, ROUND((products.value*(1-types.tax/100)),2) AS value_withou_tax, products.types_id as types_id,
    types.name AS types_name, types.tax AS types_tax
    FROM products 
    
    INNER JOIN types 
    ON types.id = products.types_id;";
    return_success(json_encode($read->raw($query)));
} catch (\Throwable $th) {
    return_error('Falha ao buscar dados.');
    die();
}
