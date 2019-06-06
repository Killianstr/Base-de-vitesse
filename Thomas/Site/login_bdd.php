<?php
$hn="mysql-base-de-vitesse.alwaysdata.net";
$db="base-de-vitesse_bdd";
$un="184427";
$pw="q2ymcrai";

$con=new mysqli($hn,$un,$pw,$db);
$con->set_charset("utf8");
if ($con->connect_error) die($con->connect_error);
?>

