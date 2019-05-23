<?php
$hn="127.0.0.1";
$db="base_de_vitesse";
$un="administrateur";
$pw="password";

$con=new mysqli($hn,$un,$pw,$db);
$con->set_charset("utf8");
if ($con->connect_error) die($con->connect_error);
?>

