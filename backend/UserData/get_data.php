<?php
session_start();

require("../db.php");

if(!isset($_SESSION['user_email'])){
	echo json_encode(["status" => "error", "message" => "Unauthorized access!"]);
    exit();
}

$result = $conn->query("SELECT * FROM employees ORDER BY ID DESC");
$data = [];

while($row = $result->fetch_assoc()){
	$data[] = $row;
}

	echo json_encode($data);
?>