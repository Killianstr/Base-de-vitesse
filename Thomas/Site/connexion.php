<?php
require_once("login_bdd.php");
if(isset($_POST['password']))
{	
	
	// Hachage du mot de passe
	$pass_hash = $_POST['password'];
	$login = $_POST['login'];
	// Vérification des identifiants
	$query="SELECT id FROM utilisateurs WHERE mail = '$login' AND password = '$pass_hash'";
	$result = $con->query($query) or die($con->error);
	$rows = mysqli_num_rows($result);
    if($rows==0)
    {
	    header('Location: connexion.php');
  		exit();
    }
	
	else
	{
    	session_start();
    	$_SESSION['login'] = $login;
    	header('Location: index.php');
  		exit();
	}
}

require_once("./header.php")
?>

<link href='./css/signin.css' rel='stylesheet'>
<body background = "http://www.oceanopolis.com/var/storage/images/media/images/le-bsff-2018/74989-2-fre-FR/Le-BSFF-2018.png">
	<main role="main" class="container">
      <form class="form-signin" action="" method="post">
	  	<center>
        <h2 style = "color:white;">BASE DE VITESSE</h2>
        <h1 style = "color:white;" class="h3 mb-3 font-weight-normal">Please sign in</h1>
		</center>
        <label for="login" class="sr-only">login</label>
        <input name="login" id="inputLogin" class="form-control" placeholder="Mail" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input name="password" id="inputPassword" class="form-control" placeholder="Password" required="" type="password">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		<center>
		<div><a style = "color:white;" href="inscription.php"> First visit ? Sign up here ! </a></div>
		</center>
      </form>
    </main>
</body>
</html>