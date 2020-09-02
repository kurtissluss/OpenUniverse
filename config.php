<?php
$host = "rds-mysql-openuniverse-email-list.comgl138wteq.us-east-2.rds.amazonaws.com"; /* Host name */
$user = "admin"; /* User */
$password = "tAzrut-4qirhy-fuzrax"; /* Password */
$dbname = "rds-mysql-openuniverse-email-list"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}