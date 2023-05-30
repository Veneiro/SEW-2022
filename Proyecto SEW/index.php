<?php

// Array de recursos turísticos
$recursos = [
    [
        'nombre' => 'Apartamentos Rurales Las Vegas',
        'tipo' => 'apartamento',
        'ocupacion' => 36,
        'precio' => 10,
        'descripcion' => 'Situados entre las conocidas montañas del Mostayal, el Monsacro y el Aramo, en el Municipio de Morcín (Cardeo) se divisa desde los apartamentos turísticos el mítico y conocido Angliru.',
    ],
    [
        'nombre' => 'Casas de Aldea Peñanes',
        'tipo' => 'Casa Rural',
        'ocupacion' => 20,
        'precio' => 20,
        'descripcion' => 'Un lugar ideal para desconectar de la rutina diaria en un entorno rural con preciosas vistas panorámicas y para conocer la provincia por su privilegiada situación en el centro de Asturias y buena comunicación con los principales lugares turísticos de la región.',
    ],
];

// Función para verificar la disponibilidad de un recurso turístico en una fecha y hora específicas
function verificarDisponibilidad($recurso, $fecha, $hora) {
    // Aquí puedes agregar la lógica para verificar la disponibilidad del recurso en la fecha y hora especificadas
    // Retorna true si está disponible, false si no lo está
    // Puedes implementar tu propia lógica de verificación de disponibilidad
    return true;
}

// Función para calcular el precio total de una reserva
function calcularPrecioTotal($reservas) {
    $total = 0;
    foreach ($reservas as $reserva) {
        $total += $reserva['precio'];
    }
    return $total;
}

// Verificar si el usuario ha iniciado sesión
session_start();

// Si no hay una sesión de usuario, redirigir al formulario de inicio de sesión
if (!isset($_SESSION['usuario'])) {
    header('Location: formulario_login.php');
    exit;
}

// Procesar formulario de reserva
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $recursoId = $_POST['recurso'];

    // Verificar la disponibilidad del recurso en la fecha y hora seleccionadas
    $recurso = $recursos[$recursoId];
    $disponible = verificarDisponibilidad($recurso, $fecha, $hora);

    if ($disponible) {
        // Agregar la reserva a la sesión del usuario
        $reserva = [
            'recurso' => $recurso,
            'fecha' => $fecha,
            'hora' => $hora,
        ];
        $_SESSION['reservas'][] = $reserva;
        // Redirigir a la página de confirmación de reserva
        header('Location: confirmacion_reserva.php');
        exit;
    } else {
        // Recurso no disponible en la fecha y hora seleccionadas
        $error = 'El recurso seleccionado no está disponible en la fecha y hora especificadas.';
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Morcín | Central de Reservas</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $_SESSION['usuario']; ?></h1>

    <h2>Realizar Reserva</h2>

    <?php if (isset($error)) : ?>
        <p><?php echo $error; ?></p>
    <?php endif; ?>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <label for="fecha">Fecha:</label>
        <input type="date" name="fecha" required><br>

        <label for="hora">Hora:</label>
        <input type="time" name="hora" required><br>

        <label for="recurso">Recurso Turístico:</label>
        <select name="recurso" required>
            <?php foreach ($recursos as $index => $recurso) : ?>
                <option value="<?php echo $index; ?>"><?php echo $recurso['nombre']; ?></option>
            <?php endforeach; ?>
        </select><br>

        <input type="submit" value="Reservar">
    </form>

    <h2>Reservas Realizadas</h2>

    <?php if (isset($_SESSION['reservas'])) : ?>
        <ul>
            <?php foreach ($_SESSION['reservas'] as $reserva) : ?>
                <li>
                    <strong><?php echo $reserva['recurso']['nombre']; ?></strong><br>
                    Fecha: <?php echo $reserva['fecha']; ?><br>
                    Hora: <?php echo $reserva['hora']; ?>
                </li>
            <?php endforeach; ?>
        </ul>
        <p>Precio Total: <?php echo calcularPrecioTotal($_SESSION['reservas']); ?></p>
    <?php else : ?>
        <p>No has realizado ninguna reserva.</p>
    <?php endif; ?>

    <a href="cerrar_sesion.php">Cerrar Sesión</a>
</body>
</html>
