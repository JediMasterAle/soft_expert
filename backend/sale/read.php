<?php

use Classes\Models\Sale;

require './../vendor/autoload.php';

try {
    $query = "SELECT 
    sales.id as id, sales.date,
    SUM(products_has_sales.qty*products_has_sales.unit_value) as total, SUM(products_has_sales.qty*products_has_sales.unit_value-products_has_sales.qty*products_has_sales.unit_value_without_tax) as total_tax,
    SUM(products_has_sales.qty) as total_itens
    FROM sales
    
    LEFT JOIN products_has_sales
    ON sales.id = products_has_sales.sales_id
    
    GROUP BY sales.id;";

    $read = new Sale();
    return_success(json_encode($read->raw($query)));
} catch (\Throwable $th) {
    print_r($th);
    return_error('Falha ao buscar dados.');
    die();
}
