<?php
session_start();
if(!isset($_SESSION['login']))
{
	//echo "session not open";
	header('Location: connexion.php');
  	exit();
}
?>