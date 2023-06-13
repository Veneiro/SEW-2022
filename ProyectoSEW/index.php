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
function verificarDisponibilidad($recurso, $fechaEntrada, $horaEntrada, $fechaSalida, $horaSalida)
{
    global $conexion;

    $recursoId = $recurso['id'];

    // Verificar la disponibilidad del recurso
    $queryVerificarDisponibilidad = "SELECT SUM(ocupacion_actual) AS ocupacion_actual, ocupacion_maxima FROM reservas INNER JOIN recursos ON reservas.recurso_id = recursos.id WHERE recursos.id = '$recursoId' AND (fecha_entrada BETWEEN '$fechaEntrada' AND '$fechaSalida' OR fecha_salida BETWEEN '$fechaEntrada' AND '$fechaSalida')";
    $resultadoVerificarDisponibilidad = mysqli_query($conexion, $queryVerificarDisponibilidad);

    if ($resultadoVerificarDisponibilidad) {
        $filaVerificarDisponibilidad = mysqli_fetch_assoc($resultadoVerificarDisponibilidad);
        $ocupacionActual = $filaVerificarDisponibilidad['ocupacion_actual'];
        $ocupacionMaxima = $filaVerificarDisponibilidad['ocupacion_maxima'];

        // Verificar si se alcanzó la ocupación máxima del recurso
        if ($ocupacionActual >= $ocupacionMaxima) {
            // No hay disponibilidad, retorna falso
            return false;
        } else {
            // Verificar si la hora de entrada es anterior a la hora de salida
            $fechaHoraEntrada = strtotime($fechaEntrada . ' ' . $horaEntrada);
            $fechaHoraSalida = strtotime($fechaSalida . ' ' . $horaSalida);

            if ($fechaHoraEntrada >= $fechaHoraSalida) {
                // La hora de entrada es posterior o igual a la hora de salida, no hay disponibilidad
                return false;
            }

            // Hay disponibilidad, retorna verdadero
            return true;
        }
    } else {
        // Error al verificar la disponibilidad en la base de datos
        return false;
    }
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
$queryRecursos = "SELECT id, nombre, precio, ocupacion_maxima FROM recursos";
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
    $fechaEntrada = $_POST['fecha_entrada'];
    $horaEntrada = $_POST['hora_entrada'];
    $fechaSalida = $_POST['fecha_salida'];
    $horaSalida = $_POST['hora_salida'];
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

        // Verificar si la hora de entrada es posterior o igual a la hora de salida
        $fechaHoraEntrada = strtotime($fechaEntrada . ' ' . $horaEntrada);
        $fechaHoraSalida = strtotime($fechaSalida . ' ' . $horaSalida);

        $error = '';

        if ($fechaHoraEntrada >= $fechaHoraSalida) {
            // La hora de entrada es posterior o igual a la hora de salida, asignar mensaje de error correspondiente
            $error = 'Las horas de entrada y salida seleccionadas son incorrectas.';
        } else {
            // Verificar la disponibilidad del recurso en las fechas y horas seleccionadas
            $disponible = verificarDisponibilidad($recurso, $fechaEntrada, $horaEntrada, $fechaSalida, $horaSalida);

            if (!$disponible) {
                // Recurso no disponible en las fechas y horas seleccionadas
                $error = 'La ocupación para ese recurso ha llegado a su límite.';
            }
        }

        // Insertar la reserva en la base de datos solo si no hay error
        if (empty($error)) {
            // Obtener el ID del usuario actual
            $usuarioId = $_SESSION['usuario_id'];

            $queryInsertarReserva = "INSERT INTO reservas (usuario_id, recurso_id, fecha_entrada, hora_entrada, fecha_salida, hora_salida)
                        VALUES ('$usuarioId', '$recursoId', '$fechaEntrada', '$horaEntrada', '$fechaSalida', '$horaSalida')";
            $recursoId = $recurso['id'];
            $queryActualizarOcupacion = "UPDATE recursos SET ocupacion_actual = ocupacion_actual + 1 WHERE id = '$recursoId'";
            mysqli_query($conexion, $queryActualizarOcupacion);
            $resultadoInsertarReserva = mysqli_query($conexion, $queryInsertarReserva);

            if (!$resultadoInsertarReserva) {
                die("Error al guardar la reserva: " . mysqli_error($conexion));
            }

            // Redirigir a la página de confirmación de reserva
            header('Location: confirmacion_reserva.php');
            exit;
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

        // Obtener los detalles de la reserva antes de eliminarla
        $queryObtenerReserva = "SELECT recurso_id FROM reservas WHERE id = '$reservaId'";
        $resultadoObtenerReserva = mysqli_query($conexion, $queryObtenerReserva);

        if ($resultadoObtenerReserva && mysqli_num_rows($resultadoObtenerReserva) > 0) {
            $reserva = mysqli_fetch_assoc($resultadoObtenerReserva);

            // Realizar la consulta de eliminación de la reserva
            $queryEliminarReserva = "DELETE FROM reservas WHERE id = '$reservaId'";
            $recursoId = $reserva['recurso_id'];
            $queryActualizarOcupacion = "UPDATE recursos SET ocupacion_actual = ocupacion_actual - 1 WHERE id = '$recursoId'";
            mysqli_query($conexion, $queryActualizarOcupacion);

            $resultadoEliminarReserva = mysqli_query($conexion, $queryEliminarReserva);

            if (!$resultadoEliminarReserva) {
                die("Error al eliminar la reserva: " . mysqli_error($conexion));
            }

            // Redirigir a la página actual para evitar envío duplicado del formulario
            header('Location: ' . $_SERVER['PHP_SELF']);
            exit;
        } else {
            // No se encontró la reserva correspondiente
            die("Error al obtener los detalles de la reserva: " . mysqli_error($conexion));
        }
    }
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Morcín | Central de Reservas</title>
    <link rel="stylesheet" type="text/css" href="../ProyectoSEW/estilo/estilo.css" />
    <link rel="stylesheet" type="text/css" href="../ProyectoSEW/estilo/layout.css" />
</head>

<body>
    <header>
        <h1>Bienvenido,
            <?php echo $_SESSION['usuario']; ?>
        </h1>
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
        <h2>Realizar Reserva</h2>

        <?php if (isset($error)): ?>
            <p>
                <?php echo $error; ?>
            </p>
        <?php endif; ?>

        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            <label for="fecha_entrada">Fecha de Entrada:</label>
            <input type="date" name="fecha_entrada" required><br>

            <label for="hora_entrada">Hora de Entrada:</label>
            <input type="time" name="hora_entrada" required><br>

            <label for="fecha_salida">Fecha de Salida:</label>
            <input type="date" name="fecha_salida" required><br>

            <label for="hora_salida">Hora de Salida:</label>
            <input type="time" name="hora_salida" required><br>

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
                        <?php echo $recursos[array_search($reserva['recurso_id'], array_column($recursos, 'id'))]['nombre']; ?>
                        <br>
                        Fecha de entrada:
                        <?php echo date('Y-m-d', strtotime($reserva['fecha_entrada'])); ?><br>
                        Hora de entrada:
                        <?php echo date('H:i', strtotime($reserva['hora_entrada'])); ?><br>
                        Fecha de salida:
                        <?php echo date('Y-m-d', strtotime($reserva['fecha_salida'])); ?><br>
                        Hora de salida:
                        <?php echo date('H:i', strtotime($reserva['hora_salida'])); ?><br>

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
        <a href="cerrar_sesion.php">Cerrar sesión</a>
    </footer>
</body>

</html>