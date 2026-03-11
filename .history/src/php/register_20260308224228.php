<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");


require "conexao.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"] ?? "";
$username = $data["username"] ?? "";
$password = $data["password"] ?? "";
$day = $data["day"] ?? "";
$month = $data["month"] ?? "";
$year = $data["year"] ?? "";

/* validação */

if (!$email || !$username || !$password || !$day || !$month || !$year) {
    echo json_encode([
        "status" => "error",
        "message" => "Preencha todos os campos"
    ]);
    exit;
}

/* montar data */

$birth_date = "$year-$month-$day";

/* verificar email existente */

$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {

    echo json_encode([
        "status" => "error",
        "message" => "Email já cadastrado"
    ]);
    exit;
}

/* verificar username existente */

$stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {

    echo json_encode([
        "status" => "error",
        "message" => "Nome de usuário já existe"
    ]);
    exit;
}

/* hash da senha */

$hash = password_hash($password, PASSWORD_DEFAULT);

/* inserir usuário */

$stmt = $conn->prepare(
    "INSERT INTO users (username, email, password, birth_date)
     VALUES (?, ?, ?, ?)"
);

$stmt->bind_param("ssss", $username, $email, $hash, $birth_date);

if ($stmt->execute()) {

    echo json_encode([
        "status" => "success",
        "message" => "Usuário criado com sucesso",
        "user_id" => $stmt->insert_id
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => "Erro ao criar usuário"
    ]);
}