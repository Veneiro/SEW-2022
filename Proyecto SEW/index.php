<?php
// Verificar si el usuario ha iniciado sesión
session_start();

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

// Función para verificar la disponibilidad de un recurso turístico en una fecha y hora específicas
function verificarDisponibilidad($recurso, $fecha, $hora)
{
    // Aquí puedes agregar la lógica para verificar la disponibilidad del recurso en la fecha y hora especificadas
    // Retorna true si está disponible, false si no lo está
    // Puedes implementar tu propia lógica de verificación de disponibilidad
    return true;
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

// Obtener recursos desde la base de datos
$queryRecursos = "SELECT id, nombre, precio FROM recursos";
$resultadoRecursos = mysqli_query($conexion, $queryRecursos);

// Verificar si se obtuvieron resultados
if ($resultadoRecursos && mysqli_num_rows($resultadoRecursos) > 0) {
    $recursos = mysqli_fetch_all($resultadoRecursos, MYSQLI_ASSOC);
} else {
    $recursos = []; // Si no se encontraron resultados, asignar un array vacío
}

// Obtener las reservas del usuario desde la base de datos
$usuarioId = $_SESSION['usuario_id'];
$queryReservas = "SELECT reservas.*, recursos.precio FROM reservas INNER JOIN recursos ON reservas.recurso_id = recursos.id WHERE usuario_id = '$usuarioId'";
$resultadoReservas = mysqli_query($conexion, $queryReservas);

// Verificar si se obtuvieron resultados
if ($resultadoReservas && mysqli_num_rows($resultadoReservas) > 0) {
    $reservas = mysqli_fetch_all($resultadoReservas, MYSQLI_ASSOC);
} else {
    $reservas = []; // Si no se encontraron resultados, asignar un array vacío
}

// Si no hay una sesión de usuario, redirigir al formulario de inicio de sesión
if (!isset($_SESSION['usuario'])) {
    header('Location: login.php');
    exit;
}

// Procesar formulario de reserva
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $recursoId = isset($_POST['recurso']) ? $_POST['recurso'] : null;

    // Verificar la disponibilidad del recurso en la fecha y hora seleccionadas
    $recurso = null;
    foreach ($recursos as $r) {
        if ($r['id'] == $recursoId) {
            $recurso = $r;
            break;
        }
    }

    if ($recurso !== null) {
        // El recurso fue encontrado, se puede proceder con la reserva

        $disponible = verificarDisponibilidad($recurso, $fecha, $hora);

        if ($disponible) {
            // Obtener el ID del usuario actual
            $usuarioId = $_SESSION['usuario_id'];

            // Insertar la reserva en la base de datos
            $queryInsertarReserva = "INSERT INTO reservas (usuario_id, recurso_id, fecha, hora)
                            VALUES ('$usuarioId', '$recursoId', '$fecha', '$hora')";
            $resultadoInsertarReserva = mysqli_query($conexion, $queryInsertarReserva);

            if (!$resultadoInsertarReserva) {
                die("Error al guardar la reserva: " . mysqli_error($conexion));
            }

            // Redirigir a la página de confirmación de reserva
            header('Location: confirmacion_reserva.php');
            exit;
        } else {
            // Recurso no disponible en la fecha y hora seleccionadas
            $error = 'El recurso seleccionado no está disponible en la fecha y hora especificadas.';
        }
    } else {
        // No se encontró el recurso seleccionado
        $error = 'El recurso seleccionado no es válido.';
    }
}

// Procesar solicitud de eliminación de reserva
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['eliminar_reserva'])) {
        $reservaId = $_POST['eliminar_reserva'];

        // Realizar la consulta de eliminación de la reserva
        $queryEliminarReserva = "DELETE FROM reservas WHERE id = '$reservaId'";
        $resultadoEliminarReserva = mysqli_query($conexion, $queryEliminarReserva);

        if (!$resultadoEliminarReserva) {
            die("Error al eliminar la reserva: " . mysqli_error($conexion));
        }

        // Redirigir a la página actual para evitar envío duplicado del formulario
        header('Location: ' . $_SERVER['PHP_SELF']);
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Morcín | Central de Reservas</title>
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
        <t2>Realizar Reserva</t2>

        <?php if (isset($error)): ?>
            <p>
                <?php echo $error; ?>
            </p>
        <?php endif; ?>

        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            <label for="fecha">Fecha:</label>
            <input type="date" name="fecha" required><br>

            <label for="hora">Hora:</label>
            <input type="time" name="hora" required><br>

            <label for="recurso">Recurso Turístico:</label>
            <select name="recurso" required>
                <?php foreach ($recursos as $recurso): ?>
                    <option value="<?php echo $recurso['id']; ?>"><?php echo $recurso['nombre']; ?></option>
                <?php endforeach; ?>
            </select><br>

            <input type="submit" value="Reservar">
        </form>

        <t2>Reservas Realizadas</t2>

        <?php if (!empty($reservas)): ?>
            <ul>
                <?php foreach ($reservas as $reserva): ?>
                    <li>
                        <strong>
                            <?php echo $recursos[array_search($reserva['recurso_id'], array_column($recursos, 'id'))]['nombre']; ?>
                        </strong><br>
                        Fecha:
                        <?php echo $reserva['fecha']; ?><br>
                        Hora:
                        <?php echo $reserva['hora']; ?><br>
                        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                            <input type="hidden" name="eliminar_reserva" value="<?php echo $reserva['id']; ?>">
                            <button type="submit">Eliminar reserva</button>
                        </form>
                    </li>
                <?php endforeach; ?>
            </ul>
            <p>Precio Total:
                <?php echo calcularPrecioTotal($reservas); ?>
            </p>
        <?php else: ?>
            <p>No has realizado ninguna reserva.</p>
        <?php endif; ?>
    </main>
    <footer>
        <a href="cerrar_sesion.php">Cerrar Sesión</a>
    </footer>
</body>

</html>