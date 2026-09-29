<?php
session_start();

require("../db.php");

if (!isset($_SESSION['user_email'])) { 
    echo json_encode(["status" => "error", "message" => "Unauthorized! Please login first."]);
    exit();
}
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        $id = $data['id'] ?? '';
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $phone = $data['phone'] ?? '';
        $industry = $data['industry'] ?? '';

        if (empty($id) || empty($name) || empty($email) || empty($phone) || empty($industry)) {
        echo json_encode([
            "status" => "error",
            "message" => "No data received!"
        ]);
        exit;
    }

        $stmt = $conn->prepare("UPDATE employees SET name = ?, email = ?, phone = ?, industry = ? WHERE id =?");

        $stmt->bind_param("ssssi", $name, $email, $phone, $industry, $id);

        if ($stmt->execute()) {
        echo json_encode([
            "status" => "success",
            "message" => "Data Update Successfully!"
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