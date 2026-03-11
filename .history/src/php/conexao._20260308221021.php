<?php

$host = "sql107.infinityfree.com";
$user = "SEU_USUARIO";
$password = "SUA_SENHA";
$database = "if0_41286448_saborize";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Erro na conexão com o banco de dados"
    ]));
}

$conn->set_charset("utf8mb4");