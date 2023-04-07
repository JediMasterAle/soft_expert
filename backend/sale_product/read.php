<?php

use Classes\Models\SaleProduct;

require './../vendor/autoload.php';

$data = sanitizeArray($_GET);

if (empty($data['id']) || !validateInteger($data['id'])) {
    return_error('Venda não encontrada.');
    die();
}

try {
    $sale_products = new SaleProduct();
    $sale_product = $sale_products->getById($data['id'], 'sales_id');

    if (empty($sale_product[0]['sales_id']) || !validateInteger($sale_product[0]['sales_id'])) {
        return_success(json_encode([]));
        die();
    }
    $sale_product = $sale_product[0];

    $read = new SaleProduct();
    $query = "SELECT
    products_has_sales.id AS id, ROUND(products_has_sales.qty,0) as qty, ROUND(products_has_sales.unit_value,2) as unit_value, ROUND(products_has_sales.unit_value-products_has_sales.unit_value_without_tax,2) as unit_value_tax,
    ROUND((products_has_sales.qty*products_has_sales.unit_value),2) as total,

    products.name AS name, products.code AS code

    FROM products_has_sales 
    
    INNER JOIN products 
    ON products.id = products_has_sales.products_id
    
    WHERE products_has_sales.sales_id='{$sale_product['sales_id']}';";

    $data = $read->raw($query);
    $total = 0;
    $total_tax = 0;

    foreach ($data as $key => $value) {
        $total = $value['total'] + $total;
        $total_tax = $value['unit_value_tax'] * $value['qty'] + $total_tax;
    }
    $totals = [round($total, 2), round($total_tax, 2)];
    return_success(json_encode($data), json_encode($totals));
} catch (\Throwable $th) {
    return_error('Falha ao buscar dados.');
    die();
}
