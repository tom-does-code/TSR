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
file_put_contents('debug.txt', $raw);
header('Content-Type: application/json');

$data = json_decode($raw, true);
$email = $data['email'];
$password = $data['password'];

$validate = pg_query_params($conn, 'SELECT email FROM logins WHERE email =$1', [$email]);
$doesExist = (bool) pg_fetch_assoc($validate);

if (!$doesExist) {
    if (is_string($email) && is_string($password)) {
    pg_query_params($conn, 'INSERT INTO "logins" (email, password) VALUES ($1, $2)', [$email, $password]);
    echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["exists" => true, "success" => false]);
}