<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");


session_start();

if (isset($_SESSION['user_email'])) {
    echo json_encode([
        "status" => "success",
    ]);
} else {
    echo json_encode([
        "status" => "error",
        
    ]);
}
?>
