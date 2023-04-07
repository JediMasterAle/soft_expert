<?php

use PHPUnit\Framework\TestCase;

$base_url = "http://localhost:8000/sale/";

test('Test page sale/store', function () use ($base_url) {
    $url = $base_url . 'store.php';

    $data = array(
        'date' => '2023-06-07'
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

test('Test page sale', function () use ($base_url) {
    $url = $base_url . 'read.php';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

test('Test page sale/update', function () use ($base_url) {
    $url = $base_url . 'update.php';

    $data = array(
        'date' => '2023-06-07',
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
