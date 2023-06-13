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

// Verificar si se envió el formulario de inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $nombre = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Verificar si el usuario y la contraseña son correctos
    $queryVerificarUsuario = "SELECT id FROM usuarios WHERE nombre = '$nombre' AND contrasena = '$contrasena'";
    $resultadoVerificarUsuario = mysqli_query($conexion, $queryVerificarUsuario);

    if ($resultadoVerificarUsuario && mysqli_num_rows($resultadoVerificarUsuario) > 0) {
        // El usuario y la contraseña son correctos, iniciar sesión
        $_SESSION['usuario'] = $nombre;

        // Obtener el ID del usuario actual
        $queryObtenerUsuarioId = "SELECT id FROM usuarios WHERE nombre = '$nombre'";
        $resultadoObtenerUsuarioId = mysqli_query($conexion, $queryObtenerUsuarioId);

        if ($resultadoObtenerUsuarioId && mysqli_num_rows($resultadoObtenerUsuarioId) > 0) {
            $fila = mysqli_fetch_assoc($resultadoObtenerUsuarioId);
            $_SESSION['usuario_id'] = $fila['id'];
        }

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
    <link rel="stylesheet" type="text/css" href="../ProyectoSEW/estilo/estilo.css" />
    <link rel="stylesheet" type="text/css" href="../ProyectoSEW/estilo/layout.css" />
</head>

<body>
    <header>
        <h1>Iniciar Sesión</h1>
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
        <?php if (isset($_GET['registro']) && $_GET['registro'] === 'success'): ?>
            <p>Registro exitoso. Inicia sesión con tus credenciales.</p>
        <?php endif; ?>

        <?php if (isset($error)): ?>
            <p>
                <?php echo $error; ?>
            </p>
        <?php endif; ?>

        <form action="login.php" method="POST">
            <label for="usuario">Usuario:</label>
            <input type="text" name="usuario" required><br>

            <label for="contrasena">Contraseña:</label>
            <input type="password" name="contrasena" required><br>

            <input type="submit" name="login" value="Iniciar Sesión">
        </form>
    </main>
    <footer>
        <p>No tienes una cuenta? <a href="registro.php">Regístrate aquí</a></p>
    </footer>
</body>

</html>