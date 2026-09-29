<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = "sql112.infinityfree.com"; 
$user = "if0_43025242";            
$password = "123456"; 
$database = "if0_43025242_XXX"; 

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    echo die(json_decode(['Erroe' => 'connection failed']));
}

?>