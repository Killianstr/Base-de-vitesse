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
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>BASE DE VITESSE</title>

        <!-- CSS -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/form-elements.css">
        <link rel="stylesheet" href="assets/css/style.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

        <!-- Favicon and touch icons -->
        <link rel="shortcut icon" href="assets/ico/favicon.png">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">

    </head>
  <!-- Latest compiled and minified CSS -->
	<body>

        <!-- Top content -->
        <div class="top-content">
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 text">
                            <h1><strong>BASE DE VITESSE</strong></h1>
                            <div class="description">
                            	<p>
	                            	Bienvenue sur le site de la rade de Brest du projet Base de vitesse !
                            	</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 form-box">
                        	<div class="form-top">
                        		<div class="form-top-left">
                        			<h3>Connectez-vous sur notre site !</h3>
                            		<p>Entrez votre adresse mail et votre mot de passe pour vous connecter</p>
                        		</div>
                        		<div class="form-top-right">
                        			<i class="fa fa-lock"></i>
                        		</div>
                            </div>
                            <div class="form-bottom">
			                    <form role="form" action="" method="post" class="login-form">
			                    	<div class="form-group">
			                    		<label class="sr-only" for="inputLogin">Mail</label>
			                        	<input type="text" name="login" placeholder="Adresse Mail..." class="form-username form-control" id="inputLogin">
			                        </div>
			                        <div class="form-group">
			                        	<label class="sr-only" for="inputPassword">Password</label>
			                        	<input type="password" name="password" placeholder="Mot de passe..." class="form-password form-control" id="inputPassword">
			                        </div>
			                        <button type="submit" class="btn">Connexion !</button>
                                </form>
							</div>
							<div><a style = "color:white;" href="inscription.php"> Première visite ? Inscrivez-vous ici ! </a></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


<!-- Javascript -->
<script src="assets/js/jquery-1.11.1.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/jquery.backstretch.min.js"></script>
<script src="assets/js/scripts.js"></script>

<!--[if lt IE 10]>
	<script src="assets/js/placeholder.js"></script>
<![endif]-->

</body>
</html>