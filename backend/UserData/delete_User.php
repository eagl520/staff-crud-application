<?php
session_start();

require("../db.php");

if(!isset($_SESSION['user_email'])){
	echo json_encode(["status" => "error", "message" => "Unauthorized access!"]);
    exit();
}

	$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
        $id = $data['id'] ?? '';

        if(empty($id)){
        	echo json_encode([
            "status" => "error",
            "message" => "No id received!"
        ]);
        }

        $stmt = $conn->prepare("DELETE FROM employees WHERE id=?");

        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
        echo json_encode([
            "status" => "success",
            "message" => "User Delete Successfully!"
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