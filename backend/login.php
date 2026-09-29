<?php
require("db.php");

session_start();

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $email = trim($data['email'] ?? '');
    $password = trim($data['password'] ?? '');


    if (empty($email) || empty($password)) {
        echo json_encode([
            "status" => "error",
            "message" => "No data received!"
        ]);
        exit;
    }


    $stmt =$conn->prepare("SELECT email, password FROM auth WHERE email = ?");
    $stmt->bind_param("s", $email);$stmt->execute();
    $result =$stmt->get_result();

    if ($result->num_rows === 1) {
        $user =$result->fetch_assoc();
       

        if (password_verify($password,$user['password'])) {
           

             $_SESSION['user_email'] =$user['email'];

            echo json_encode([
                "status" => "success",
                "message" => "Successfully Logged In!",
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Incorrect Password!"
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Email Not Found!"
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