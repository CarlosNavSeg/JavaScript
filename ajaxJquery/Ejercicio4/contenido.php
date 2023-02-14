<?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    echo('El usuario de nombre:'. $nombre . ' email: ' . $email . 
    ' contraseña: ' .  $password . 'se ha registrado correctamente');
?>