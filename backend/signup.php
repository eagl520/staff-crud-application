<?php
require("db.php");


$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $password = trim($data['password'] ?? '');


    if (empty($name) || empty($email) || empty($password)) {
        echo json_encode([
            "status" => "error",
            "message" => "No data received!"
        ]);
        exit;
    }


    $stmt = $conn->prepare("SELECT id FROM auth WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode([
            "status" => "error",
            "message" => "This email is already Registered!"
        ]);
        $stmt->close();
        $conn->close();
        exit;
    }
    $stmt->close();


    $hashed_password = password_hash($password, PASSWORD_DEFAULT);


    $insert_stmt = $conn->prepare("INSERT INTO auth (name, email, password) VALUES (?, ?, ?)");
    $insert_stmt->bind_param("sss", $name, $email, $hashed_password);

    if ($insert_stmt->execute()) {
        echo json_encode([
            "status" => "success",
            "message" => "Registered Successfully!"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Database error: " . $insert_stmt->error
        ]);
    }

    $insert_stmt->close();
    $conn->close();
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid data format!"
    ]);
}
?>