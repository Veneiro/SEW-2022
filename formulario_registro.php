<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Morcín | Registro</title>
</head>

<body>
    <h1>Registro</h1>

    <?php if (isset($_GET['registro']) && $_GET['registro'] === 'success'): ?>
        <p>Registro exitoso. Inicia sesión con tus credenciales.</p>
    <?php endif; ?>

    <?php if (isset($error)): ?>
        <p><?php echo $error; ?></p>
    <?php endif; ?>

    <form action="registro.php" method="POST">
        <label for="nombre">Nombre de usuario:</label>
        <input type="text" name="nombre" required><br>

        <label for="email">Correo electrónico:</label>
        <input type="email" name="email" required><br>

        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" required><br>

        <input type="submit" name="registro" value="Registrarse">
    </form>

    <p>¿Ya tienes una cuenta? <a href="formulario_login.php">Inicia sesión</a></p>
</body>

</html>
