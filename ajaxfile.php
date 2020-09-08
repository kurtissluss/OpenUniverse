<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;

// Add record
if($request == 1){
  $firstName = $data->firstName;
  $lastName = $data->lastName;
  $email = $data->email;

  $userData = mysqli_query($con,"SELECT * FROM users WHERE username='".$email."'");
  if(mysqli_num_rows($userData) == 0){
    mysqli_query($con,"INSERT INTO users(firstName,lastName,contactEmail) VALUES('".$firstName."','".$lastName."','".$email."')");
    echo "Added";
  }else{
    echo "Already on the email list.";
  }

  exit;
}
?>