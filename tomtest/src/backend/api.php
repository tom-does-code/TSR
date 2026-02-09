<?php
$conn = pg_connect("host=localhost dbname=postgres user=postgres password=1234");

$email = "test@example.com";
$hashedPassword = password_hash("mypassword", PASSWORD_DEFAULT);

pg_query_params($conn, 'INSERT INTO "users" (email, password) VALUES ($1, $2)', [$email, $hashedPassword]);

echo json_encode(["message" => "User created"]);