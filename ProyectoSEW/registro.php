<?php
// Datos de conexión a la base de datos
$host = 'localhost'; // Cambia esto si tu host es diferente
$usuario = 'root'; // Cambia esto por tu nombre de usuario de MySQL
$password = ''; // Cambia esto por tu contraseña de MySQL
$baseDatos = 'central_reservas'; // Cambia esto si el nombre de tu base de datos es diferente

// Establecer la conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $password, $baseDatos);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die("Error al conectar con la base de datos: " . mysqli_connect_error());
}

session_start();

// Verificar si el usuario ha iniciado sesión
if (isset($_SESSION['usuario'])) {
    header('Location: index.php');
    exit;
}

// Verificar si se envió el formulario de registro
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['registro'])) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];

    // Verificar si el nombre de usuario ya existe en la base de datos
    $queryVerificarUsuario = "SELECT id FROM usuarios WHERE nombre = '$nombre'";
    $resultadoVerificarUsuario = mysqli_query($conexion, $queryVerificarUsuario);

    if ($resultadoVerificarUsuario && mysqli_num_rows($resultadoVerificarUsuario) > 0) {
        $error = 'El nombre de usuario ya está registrado.';
    } else {
        // Insertar el nuevo usuario en la base de datos
        $queryInsertarUsuario = "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('$nombre', '$email', '$contrasena')";
        $resultadoInsertarUsuario = mysqli_query($conexion, $queryInsertarUsuario);

        if ($resultadoInsertarUsuario) {
            // Registro exitoso, redirigir al formulario de inicio de sesión
            header('Location: login.php?registro=success');
            exit;
        } else {
            $error = 'Error al registrar el usuario.';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Morcín | Registro</title>
    <link rel="stylesheet" type="text/css" href="../ProyectoSEW/estilo/estilo.css" />
    <link rel="stylesheet" type="text/css" href="../ProyectoSEW/estilo/layout.css" />
</head>

<body>
    <header>
        <h1>Registro</h1>
        <nav>
            <a href="./index.html">Página Principal</a>
            <a href="./gastronomía.html">Gastronomía</a>
            <a href="./rutas.html">Rutas</a>
            <a href="./meteo.html">Meteorología</a>
            <a href="./juego.html">Juego</a>
            <a href="./index.php">Reservas</a>
        </nav>
    </header>
    <main>
        <?php if (isset($error)): ?>
            <p>
                <?php echo $error; ?>
            </p>
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
    </main>
    <footer>
        <p>¿Ya tienes una cuenta? <a href="login.php">Inicia sesión aquí</a></p>
    </footer>
</body>

</html>