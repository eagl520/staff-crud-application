<?php
session_start();

require("../db.php");

if (!isset($_SESSION['user_email'])) { 
    echo json_encode(["status" => "error", "message" => "Unauthorized! Please login first."]);
    exit();
}
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $phone = $data['phone'] ?? '';
        $industry = $data['industry'] ?? '';

        if (empty($name) || empty($email) || empty($phone) || empty($industry)) {
        echo json_encode([
            "status" => "error",
            "message" => "No data received!"
        ]);
        exit;
    }

        $stmt = $conn->prepare("INSERT INTO employees (name, email, phone, industry) VALUES (?, ?, ?, ?)");

        $stmt->bind_param("ssss", $name, $email, $phone, $industry);

        if ($stmt->execute()) {
        echo json_encode([
            "status" => "success",
            "message" => "Data Save Successfully!"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Database error: " . $stmt->error
        ]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid data format!"
    ]);
}
?>