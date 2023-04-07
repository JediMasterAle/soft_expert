<?php

use PHPUnit\Framework\TestCase;

$base_url = "http://localhost:8000/sale_product/";

test('Test page sale_product/store', function () use ($base_url) {
    $url = $base_url . 'store.php';

    $data = array(
        'products_id' => 1,
        'qty' => 2,
        'sales_id' => 1
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

test('Test page sale_product', function () use ($base_url) {
    $url = $base_url . 'read.php?id=6';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

test('Test page sale_product/update', function () use ($base_url) {
    $url = $base_url . 'update.php';

    $data = array(
        'products_id' => 1,
        'qty' => 2,
        'sales_id' => 1,
        'id' => 1,
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});
