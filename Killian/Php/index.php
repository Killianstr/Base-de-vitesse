<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>alwaysdata</title>
            <link rel="icon" type="image/png" href="https://static.alwaysdata.com/aldjango/img/favicon.png" />
            <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://static.alwaysdata.com/css/administration.css" type="text/css" media="all" />
            <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <p style="color: red">
       <?php
            $fp =fopen('log.txt','r');
            echo fread($fp,filesize('log.txt'));
            fclose($fp);
       ?>
   </p>
    </body>

</html>

