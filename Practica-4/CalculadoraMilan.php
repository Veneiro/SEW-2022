<!DOCTYPE html>
<html>

<head>
    <title>Ejemplo</title>
    <link rel="stylesheet" type="text/css" href="./CalculadoraMilán.css" />
</head>

<body>

    <h3>Pulse un botón</h3>
    <form action='#' method='post' name='botones'>
        <div>
            <input type='submit' class='button' name='boton1' value='Botón 1' />
            <input type='submit' class='button' name='boton2' value='Botón 2' />
            <input type='submit' class='button' name='boton3' value='Botón 3' />
        </div>
        <div>
            <input type='submit' class='button' name='boton4' value='Botón 4' />
            <input type='submit' class='button' name='boton5' value='Botón 5' />
            <input type='submit' class='button' name='boton6' value='Botón 6' />
        </div>
        <div>
            <input type='submit' class='button' name='boton7' value='Botón 7' />
            <input type='submit' class='button' name='boton8' value='Botón 8' />
            <input type='submit' class='button' name='boton9' value='Botón 9' />
        </div>
    </form>
    <form action='#' method='post' name='calculadora'>
        <input type='text' name='expresion' value='' />
        <input type='submit' value='Calcular' />
    </form>
    <?php
    $expresion = "";
    $resultado = "";

    $formularioPOST = "";

    class Botonera
    {
        protected $mensaje;

        public function __construct()
        {
            $this->mensaje = "";
        }

        public function getMensaje()
        {
            //devuelve el mensaje
            return $this->mensaje;
        }

        public function pulsarBoton($boton)
        {
            // Construye el mensaje con el botón pulsado, la fecha y la hora
            $this->mensaje = "Se ha pulsado: " . $boton . " en el instante: " . date('l jS \of F Y h:i:s A');
        }
    }

    $aviso = "No se ha pulsado ningún botón";

    //Solo se ejecutará si se ha pulsado un botón
    if (count($_POST) > 0) {
        $miBotonera = new Botonera();

        if (isset($_POST['boton1']))
            $_POST["expresion"] += "1";
        if (isset($_POST['boton2']))
            $_POST["expresion"] += "2";
        if (isset($_POST['boton3']))
            $miBotonera->pulsarBoton("Botón 3");
        if (isset($_POST['boton4']))
            $miBotonera->pulsarBoton("Botón 4");
        if (isset($_POST['boton5']))
            $miBotonera->pulsarBoton("Botón 5");
        if (isset($_POST['boton6']))
            $miBotonera->pulsarBoton("Botón 6");
        if (isset($_POST['boton7']))
            $miBotonera->pulsarBoton("Botón 7");
        if (isset($_POST['boton8']))
            $miBotonera->pulsarBoton("Botón 8");
        if (isset($_POST['boton9']))
            $miBotonera->pulsarBoton("Botón 9");

        $aviso = $miBotonera->getMensaje();
    }
    echo "<p>aviso = " . $aviso . "</p>";

    //Solo se ejecutará si se han enviado los datos desde el formulario al pulsar el boton Calcular
    if (count($_POST) > 0) {
        $formularioPOST = $_POST;

        $expresion = $_POST["expresion"];
        try {
            $resultado = eval("return $expresion ;");
            printf("<p> Operación -> %s </p>", $expresion);
            printf("<p> Resultado = %d </p>", $resultado);
        } catch (Exception $e) {
            $resultado = "Error: " . $e->getMessage();
        }
    }
    ?>


</body>

</html>