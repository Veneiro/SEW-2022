<?php

session_start();

// Verificar las credenciales y establecer la sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Aquí debes realizar la verificación de las credenciales
    // Si las credenciales son válidas, establece la sesión
    // de lo contrario, muestra un mensaje de error y redirige al formulario de inicio de sesión

    // Ejemplo de verificación básica (reemplaza con tu propia lógica de verificación):
    if ($usuario === 'admin' && $contrasena === 'password') {
        $_SESSION['usuario'] = $usuario;
        header('Location: index.php');
        exit;
    } else {
        $error = 'Usuario o contraseña incorrectos.';
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Morcín | Inicio de Sesión</title>
</head>
<body>
    <h1>Iniciar Sesión</h1>

    <?php if (isset($error)) : ?>
        <p><?php echo $error; ?></p>
    <?php endif; ?>

    <form action="login.php" method="POST">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" required><br>

        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" required><br>

        <input type="submit" value="Iniciar Sesión">
    </form>
</body>
</html>
