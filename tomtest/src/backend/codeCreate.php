<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = pg_connect("host=localhost dbname=postgres user=postgres password=1234");

$raw = file_get_contents('php://input');
header('Content-Type: application/json');

$data = json_encode($raw, true);
$email = $data['email'];
$code = $data['verification_code'];

$validate = pg_query_params($conn, 'SELECT * FROM logins WHERE email =$1', [$email]);
$doesExist = (bool) pg_fetch_assoc($validate);

if (!$doesExist) {
    echo json_encode(["success" => false]);
}

$random_code = random_int(100000, 999999);

$insertCode = pg_query_params($conn, 'UPDATE logins SET verification_code =$1 WHERE email =$2', [$random_code, $email]);
