<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$raw = file_get_contents('php://input');
header('Content-Type: application/json');

$data = json_decode($raw, true);
$email = $data['email'];
$password = $data['password'];

$conn = pg_connect("host=localhost dbname=postgres user=postgres password=1234");

$result = pg_query_params($conn, 'SELECT password FROM logins WHERE email = $1', [$email]);
$user = pg_fetch_assoc($result);

if ($user && $user['password'] === $password) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid email or password"]);
}