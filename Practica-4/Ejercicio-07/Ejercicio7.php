<?php session_start(); ?>
<!DOCTYPE HTML>

<html lang="es">

<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8" />

    <meta name="author" content="Mateo Rico Iglesias" />
    <meta name="description" content="Calculadora Científica" />
    <meta name="keywords" content="Una calculadora científica" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pruebas de Usabilidad</title>
    <link rel="stylesheet" type="text/css" href="./Ejercicio6.css" />
</head>

<body>
    <?php
    
    echo "
 <header>
     <h1> Videojuegos </h1>
     <form action='#' method='post'> 
         <button type='submit' name='iniciar_sesion'> Iniciar Sesión </button>
         <button type='submit' name='cerrar_sesion'> Cerrar Sesión </button>
         <button type='submit' name='buscar videojuego'> Buscar Videojuego </button>
         <button type='submit' name='filtrar_por_genero'> Filtrar Videojuegos por género </button>
         <button type='submit' name='filtrar_por_goty'> Filtrar Videojuegos que han ganado un GOTY </button>
     </form>
 </header>";

    class BaseDatos
    {

        private $server_name;
        private $username;
        private $password;
        private $db;
        private $db_name;
        private $videojuegos;

        public function __construct()
        {
            $this->server_name = 'localhost';
            $this->username = 'DBUSER2022';
            $this->password = 'DBPSWD2022';
            $this->db_name = 'DataBase_Videojuegos_SEW';

            $this->videojuegos = array();

            $_SESSION['videojuegos'] = array();
            $_SESSION['generos'] = array();

            if (!isset($_SESSION['es_sesion_iniciada']))
                $_SESSION['es_sesion_iniciada'] = false;

            if (!isset($_SESSION['dni_usuario_logged']))
                $_SESSION['dni_usuario_logged'] = '';

            if (!isset($_SESSION['hay_que_crear_cuenta']))
                $_SESSION['hay_que_crear_cuenta'] = false;

            if (!isset($_SESSION['filtrar_por_genero']))
                $_SESSION['filtrar_por_genero'] = false;

            if (!isset($_SESSION['filtrar_por_goty']))
                $_SESSION['filtrar_por_goty'] = false;

            // Manejamos el menú
            if (count($_POST) > 0) {
                if (isset($_POST['formulario_iniciar_sesion'])) {
                    $this->iniciar_sesion();
                }
                if (isset($_POST['iniciar_sesion'])) {
                    $this->iniciar_sesion_gui();
                }
                if (isset($_POST['cerrar_sesion'])) {
                    $this->cerrar_sesion();
                }
                if (isset($_POST['formulario_buscar_videojuego'])) {
                    //$this->insertar_en_tabla_gui();
                }
                if (isset($_POST['buscar_videojuego'])) {
                    //$this->insertar_en_tabla_gui();
                }
                if (isset($_POST['crear_cuenta'])) {
                    $this->crear_cuenta();
                }
                if (isset($_POST['filtrar_por_genero'])) {
                    $this->filtrar_por_genero();
                }
                if (isset($_POST['filtrar_por_goty'])) {
                    $this->filtrar_por_goty();
                }
            }
            $this->init();

            if (count($_POST) > 0)
                foreach ($_SESSION['videojuegos'] as $videojuego)
                    if (isset($_POST[$videojuego->referencia]))
                        $this->comprar($videojuego->referencia);
        }

        private function init()
        {
            $this->añadir_generos();
            $this->añadir_videojuegos();

            $this->usuario_gui();
            $this->videojuegos_gui();
        }

        private function conectarse_db()
        {
            $this->db = new mysqli(
                    $this->server_name,
                    $this->username,
                    $this->password,
                    $this->db_name
            );
        }

        private function añadir_generos()
        {
            $this->conectarse_db();

            try {
                $select_query = $this->db->prepare("
                SELECT * FROM generos"
                );

                $select_query->execute();
                $resultado = $select_query->get_result();
                $select_query->close();

                if ($resultado->num_rows > 0)
                    while ($fila = $resultado->fetch_assoc()) // Añadimos la categoría
                        $_SESSION['generos'][] = new Genero(
                            $fila['id'],
                            $fila['tipo']
                        );
            } catch (Error $e) {
                $this->error(
                    "ERROR: ",
                    $e->getMessage()
                );
            }
            $this->db->close();
        }

        private function añadir_videojuegos()
        {
            $this->conectarse_db();

            try {
                $select_query = $this->db->prepare("
                SELECT * FROM videojuegos"
                );

                $select_query->execute();
                $resultado = $select_query->get_result();
                $select_query->close();
                if ($resultado->num_rows > 0)
                    while ($fila = $resultado->fetch_assoc())
                        $_SESSION['videojuegos'][] = new Videojuego(
                            $fila['referencia'],
                            $fila['titulo'],
                            $fila['genero_id'],
                            $fila['director'],
                            $fila['distribuidora'],
                            $fila['portada'],
                            $fila['ha_ganado_goty']
                        );
            } catch (Error $e) {
                $this->error(
                    "ERROR: ",
                    $e->getMessage()
                );
            }

            $this->db->close();
        }

        private function buscar_videojuego_gui()
        {
            echo "
        <form action='#' method='post'>
            <h2>Buscar Videojuego</h2>
            <label for='buscar_videojuego_id'>ID de la película:</label>
            <input type='text' id='buscar_videojuego_id' name='buscar_videojuego_id' />
            <input type='submit' name='buscar_videojuego_form' value='buscar película' />
        </form>
        ";
        }

        private function videojuego_gui($videojuego)
        {
            echo "
        <li>
            <h3> $videojuego->titulo </h3>
            <h4> $videojuego->director </h4>
            <img src='$videojuego->portada' alt='$videojuego->titulo'/>
            <p> $videojuego->distribuidora </p>
            <form action='#' method='post'>
                <input type='submit' name='$videojuego->referencia' value='Comprar' />
            </form>
        </li>
    ";
        }

        private function videojuegos_gui()
        {
            echo '<h2> Listado de videojuegos </h2>';
            echo '<p> Aquí tienes el escaparate de videojuegos disponibles en nuestro GAME </p>';

            $videojuegos = array();

            if ($_SESSION['filtrar_por_goty'])
                foreach ($_SESSION['videojuegos'] as $videojuego) {
                    if ($videojuego->ha_ganado_goty === 1)
                        $videojuegos[] = $videojuego;
                } else
                $videojuegos = $_SESSION['videojuegos'];

            if ($_SESSION['filtrar_por_genero']) {
                foreach ($_SESSION['generos'] as $genero) {
                    $numero_de_videojuegos = 0;

                    foreach ($videojuegos as $videojuego)
                        if ($videojuego->genero_id === $genero->id) {
                            if ($numero_de_videojuegos === 0) {
                                echo "<h2> $genero->tipo </h2>";
                                echo "<ul>";
                            }

                            $this->videojuego_gui($videojuego);
                            $numero_de_videojuegos++;
                        }

                    if ($numero_de_videojuegos > 0)
                        echo "</ul>";
                }
            } else {
                echo "<ul>";

                foreach ($videojuegos as $videojuego)
                    $this->videojuego_gui($videojuego);

                echo "</ul>";
            }
        }

        private function comprar($referencia)
        {
            $this->conectarse_db();

            try {
                if ($_SESSION['es_sesion_iniciada'] === true) {
                    $check_ha_sido_comprado = $this->db->prepare("
                    SELECT * 
                        FROM escaparate 
                        WHERE cliente_dni = ? 
                            and videojuego_referencia = ?"
                    );

                    // Comprobamos si ha sido comprado alguna vez
                    $check_ha_sido_comprado->bind_param('ss', $_SESSION['dni_usuario_logged'], $referencia);
                    $check_ha_sido_comprado->execute();

                    $ha_sido_comprado = $check_ha_sido_comprado->get_result();

                    $check_ha_sido_comprado->close();

                    // Si no ha sido comprado, ni está siendo comprado --> INSERT
                    if (
                        empty($ha_sido_comprado->fetch_assoc())
                    ) {
                        $insert = $this->db->prepare("
                        INSERT INTO escaparate 
                            (cliente_dni,
                             videojuego_referencia,
                             dia_comprado)
                        VALUES 
                            (?, ?, NOW())
                    ");

                        $insert->bind_param(
                            'ss', $_SESSION['dni_usuario_logged'],
                            $referencia
                        );

                        $insert->execute();
                        $insert->close();

                        $this->exito(
                            "Se ha comprado $referencia correctamente!"
                        );
                    } else {
                        $this->error(
                            "ERROR: ",
                            "Ya has comprado este videojuego"
                        );
                    }
                } else
                    $this->error(
                        "ERROR: ",
                        "No has iniciado sesión"
                    );
            } catch (Error $e) {
                $this->error(
                    "ERROR: ",
                    $e->getMessage()
                );
            }

            $this->db->close();
        }

        private function filtrar_por_genero()
        {
            $_SESSION['filtrar_por_genero'] = !$_SESSION['filtrar_por_genero'];
        }

        private function filtrar_por_goty()
        {
            $_SESSION['filtrar_por_goty'] = !$_SESSION['filtrar_por_goty'];
        }

        private function usuario_gui()
        {
            if ($_SESSION['es_sesion_iniciada'] === true) {
                $usuario = $_SESSION['dni_usuario_logged'];
                $mensaje = "Has iniciado sesión como: $usuario.";
            } else
                $mensaje = "No has iniciado sesión.";

            echo "
            <p>$mensaje</p>
        ";
        }

        private function iniciar_sesion_gui()
        {
            echo "
            <h3>Si quieres crear una cuenta introduce tu dni y dale a iniciar sesión. El proceso de introducir tus datos comenzará automaticamente</h3>
        <form action='#' method='post'>
            <h2>Iniciar sesión</h2>
            <label for='iniciar_sesion_dni'>DNI:</label>
            <input type='text' id='iniciar_sesion_dni' name='iniciar_sesion_dni' />
            <input type='submit' name='formulario_iniciar_sesion' value='Iniciar sesión' />
        </form>
        ";
        }

        private function crear_cuenta_gui()
        {
            echo "
        <form action='#' method='post'>
            <h2>Crear cuenta</h2>
            <label for='iniciar_sesion_nombre'>Nombre:</label>
            <input type='text' id='iniciar_sesion_nombre' name='iniciar_sesion_nombre' />
            <label for='iniciar_sesion_apellidos'>Apellidos:</label>
            <input type='text' id='iniciar_sesion_apellidos' name='iniciar_sesion_apellidos' />
            <label for='iniciar_sesion_email'>Correo electrónico:</label>
            <input type='email' id='iniciar_sesion_email' name='iniciar_sesion_email' />
            <label for='iniciar_sesion_telefono'>Teléfono:</label>
            <input type='text' id='iniciar_sesion_telefono' name='iniciar_sesion_telefono' />
            <input type='submit' name='crear_cuenta' value='Crear cuenta' />
        </form>
        ";
        }

        private function iniciar_sesion()
        {
            // Guardamos el DNI que acabamos de escrbir en el formulario
            if(!empty($_POST['iniciar_sesion_dni'])){
                $_SESSION['dni_usuario_logged'] = $_POST['iniciar_sesion_dni'];
                // Comprobamos si la cuenta existe o no
                $this->check_crear_cuenta();
                if ($_SESSION['hay_que_crear_cuenta'])
                    $this->crear_cuenta_gui();
                else
                    $_SESSION['es_sesion_iniciada'] = true;
            } else{
                echo "El dni introducido está vacío, inténtalo de nuevo";
            }
            
        }

        private function cerrar_sesion()
        {
            $_SESSION['es_sesion_iniciada'] = false; // marcamos como que NO hemos iniciado sesión
            $_SESSION['hay_que_crear_cuenta'] = true; // marcamos como que hay que crear la cuenta
        }

        private function check_crear_cuenta()
        {
            $this->conectarse_db();

            try {
                $select_query = $this->db->prepare("
                SELECT * FROM Clientes WHERE dni = ?"
                );

                $select_query->bind_param('s', $_SESSION['dni_usuario_logged']);
                $select_query->execute();

                $resultado = $select_query->get_result();

                $select_query->close();

                if ($resultado->fetch_assoc() === NULL)
                    $_SESSION['hay_que_crear_cuenta'] = true;
                else
                    $_SESSION['hay_que_crear_cuenta'] = false;
            } catch (Error $e) {
                $this->error(
                    "ERROR: ",
                    $e->getMessage()
                );
            }

            $this->db->close();
        }

        private function crear_cuenta()
        {
            $this->conectarse_db();

            try {
                $query = $this->db->prepare("
                INSERT INTO Clientes 
                    (dni,
                    nombre,
                    apellidos,
                    email,
                    telefono)
                VALUES 
                    (?, ?, ?, ?, ?)");

                $query->bind_param(
                    'sssss', $_SESSION['dni_usuario_logged'],
                    $_POST['iniciar_sesion_nombre'],
                    $_POST['iniciar_sesion_apellidos'],
                    $_POST['iniciar_sesion_email'],
                    $_POST['iniciar_sesion_telefono']
                );

                $query->execute();
                $query->close();

                // Si hemos llegado hasta aquí es que se ha creado una cuenta...
                $_SESSION['hay_que_crear_cuenta'] = false;
                $_SESSION['es_sesion_iniciada'] = true;
            } catch (Error $e) {
                $this->error(
                    "ERROR: ",
                    $e->getMessage()
                );
            }

            $this->db->close();
        }

        private function exito($mensaje)
        {
            echo "<p>" . $mensaje . "</p>";
        }

        private function error($mensaje, $error)
        {
            echo "<p>" . $mensaje . $error . "</p>";
            exit();
        }
    }

    class Videojuego
    {

        public $referencia;
        public $titulo;
        public $genero_id;
        public $director;
        public $distribuidora;
        public $portada;
        public $ha_ganado_goty;

        public function __construct(
            $referencia,
            $titulo,
            $genero_id,
            $director,
            $distribuidora,
            $portada,
            $ha_ganado_goty
        )
        {
            $this->referencia = $referencia;
            $this->titulo = $titulo;
            $this->genero_id = $genero_id;
            $this->director = $director;
            $this->distribuidora = $distribuidora;
            $this->portada = $portada;
            $this->ha_ganado_goty = $ha_ganado_goty;
        }

    }

    class Genero
    {

        public $id;
        public $tipo;

        public function __construct($id, $tipo)
        {
            $this->id = $id;
            $this->tipo = $id;
        }

    }

    $db = new BaseDatos();

    ?>
</body>