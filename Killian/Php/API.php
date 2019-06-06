<Html>
<body>
<?php
	$valeur = $_GET['data'];
	echo $valeur;
	$fp =fopen('log.txt','w');
	fwrite($fp,$_GET['data']);
	fclose($fp);
?>
</body>
</Html>