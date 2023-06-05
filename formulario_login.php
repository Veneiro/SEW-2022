<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Morcín | Inicio de Sesión</title>
</head>

<body>
    <h1>Iniciar Sesión</h1>

    <?php if (isset($error)): ?>
        <p><?php echo $error; ?></p>
    <?php endif; ?>

    <form action="login.php" method="POST">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" required><br>

        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" required><br>

        <input type="submit" value="Iniciar Sesión">
    </form>

    <p>¿No tienes una cuenta? <a href="formulario_registro.php">Regístrate</a></p>
</body>

</html>
