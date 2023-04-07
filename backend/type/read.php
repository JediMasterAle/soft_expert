<?php

use Classes\Models\Type;

require './../vendor/autoload.php';

try {
    $read = new Type();
    return_success(json_encode($read->read()));
} catch (\Throwable $th) {
    return_error('Falha ao buscar dados.');
    die();
}
