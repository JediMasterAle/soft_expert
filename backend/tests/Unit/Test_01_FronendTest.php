<?php

use PHPUnit\Framework\TestCase;

fwrite(STDOUT, "WARNING: All data in the database will be erased. Do you want to continue? (yes/no)\n");
$confirmation = trim(fgets(STDIN));
if ($confirmation != "yes") {
    echo "Testes cancelados pelo usuário.\n";
    exit();
}

$base_url = "http://localhost:8080/";


test('Test page type', function () use ($base_url) {
    $url = $base_url . 'tipo';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

test('Test page product', function () use ($base_url) {
    $url = $base_url . 'produto';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});

test('Test page sale', function () use ($base_url) {
    $url = $base_url . 'venda';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    expect(intval($status))->toBe(200);
});
