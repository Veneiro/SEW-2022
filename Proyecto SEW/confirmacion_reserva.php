<?php
// Establecer los datos de conexión a la base de datos
$host = 'localhost'; // Cambia esto si tu host es diferente
$usuario = 'root'; // Cambia esto por tu nombre de usuario de MySQL
$password = ''; // Cambia esto por tu contraseña de MySQL
$base_de_datos = 'central_reservas'; // Cambia esto si el nombre de tu base de datos es diferente

// Crear la conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $password, $base_de_datos);

// Verificar si se estableció la conexión correctamente
if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}
// Función para calcular el precio total de una reserva
function calcularPrecioTotal($reservas)
{
    $total = 0;
    foreach ($reservas as $reserva) {
        $total += $reserva['precio'];
    }
    return $total;
}

// Verificar si el usuario ha iniciado sesión
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header('Location: formulario_login.php');
    exit;
}

// Obtener la última reserva realizada por el usuario desde la base de datos
$usuarioId = $_SESSION['usuario_id'];
$queryReserva = "SELECT reservas.*, recursos.nombre AS nombre_recurso, recursos.precio 
                FROM reservas 
                INNER JOIN recursos ON reservas.recurso_id = recursos.id 
                WHERE usuario_id = '$usuarioId' 
                ORDER BY id DESC 
                LIMIT 1";
$resultadoReserva = mysqli_query($conexion, $queryReserva);

// Verificar si se obtuvo un resultado
if ($resultadoReserva && mysqli_num_rows($resultadoReserva) > 0) {
    $reserva = mysqli_fetch_assoc($resultadoReserva);
} else {
    $reserva = null; // Si no se encontró la reserva, asignar null
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Morcín | Reserva Confirmada</title>
    <link rel="stylesheet" type="text/css" href="../Proyecto SEW/estilo/estilo.css" />
</head>

<body>
    <header>
        <t1>Bienvenido,
            <?php echo $_SESSION['usuario']; ?>
        </t1>
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
        <h2>Reserva Confirmada</h2>

        <?php if ($reserva): ?>
            <ul>
                <li>
                    <strong>
                        <?php echo $reserva['nombre_recurso']; ?>
                    </strong><br>
                    Fecha:
                    <?php echo $reserva['fecha']; ?><br>
                    Hora:
                    <?php echo $reserva['hora']; ?>
                </li>
            </ul>
            <p>Precio Total:
                <?php echo $reserva['precio']; ?>
            </p>
        <?php else: ?>
            <p>No has realizado ninguna reserva.</p>
        <?php endif; ?>

        <a href="index.php">Volver a realizar reservas</a>
        <br>
        <a href="cerrar_sesion.php">Cerrar Sesión</a>
    </main>
</body>

</html>