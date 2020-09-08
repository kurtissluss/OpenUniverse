<?php
$host = "172.26.5.241"; /* Host name */
$user = "root"; /* User */
$password = "IvQ1Ud2jGZ5K"; /* Password */
$dbname = "OU_email"; /* Database name */

$con = mysqli_connect($host,$user,$password,$dbname);
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
?>