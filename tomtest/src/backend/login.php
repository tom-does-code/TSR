<?php

$raw = file_get_contents('php://input');
file_put_contents('debug.txt', $raw);
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

$conn = pg_connect("host=localhost dbname=postgres user=postgres password=1234");

$result = pg_query_params($conn, 'SELECT password FROM users WHERE email = $1', [$email]);
$user = pg_fetch_assoc($result);

if ($user && password_verify($password, $user['password'])) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid email or password"]);
}