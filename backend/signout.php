<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");

session_start();

$_SESSION = array();

session_destroy();
echo json_encode([
        "status" => "success",
    ]);
?>