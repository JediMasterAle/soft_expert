<?php

function validateString(null|string $value, $maxLength = 255): bool
{
    if (empty($value)) {
        return false;
    }
    if (!is_string($value)) {
        return false;
    }

    $length = strlen($value);
    if ($length > $maxLength) {
        return false;
    }

    return true;
}

function validateNumber(null|float|string $value): bool
{
    if (empty($value)) {
        return false;
    }
    if (!is_numeric($value)) {
        return false;
    }

    return true;
}

function validateInteger(null|int $value): bool
{
    if (empty($value)) {
        return false;
    }
    if (!is_int($value)) {
        return false;
    }

    return true;
}

function validateDate(string $value, string $format = 'Y-m-d'): bool
{
    if (empty($value)) {
        return false;
    }
    $date = DateTime::createFromFormat($format, $value);
    return $date && $date->format($format) === $value;
}

function sanitizeInput(string $value): string
{
    return filter_var($value, FILTER_SANITIZE_FULL_SPECIAL_CHARS, FILTER_FLAG_NO_ENCODE_QUOTES);
}

function sanitizeArray(array $array): array
{
    // foreach ($array as $key => $value) {
    //     $array[$key] = sanitizeInput($value);
    // }
    return $array;
}


function return_success(string $message, $data = null)
{
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode(['success' => $message, $data]);
    return;
}

function return_error(string $message)
{
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        http_response_code(200);
        exit();
    }


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['errors' => [$message]]);

    return;
}
