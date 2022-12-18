<!DOCTYPE html>
<html>

<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8" />

    <meta name ="author" content ="Mateo Rico Iglesias" />
    <meta name ="description" content ="Precios del oro" />
    <meta name ="keywords" content ="precios, oro" />

    <meta name ="viewport" content ="width=device-width, initial-scale=1.0" />
    <title>Precios del Oro</title>
    <link rel="stylesheet" type="text/css" href="./Ejercicio4.css" />
</head>

<body>
    <?php
    session_start();
    echo "<h2>Precios del oro en tiempo real de todas las divisas</h2>
    <p> Introduce la fecha de inicio </p>
    <form action='#' method='post'>
    <input name='startDate' type='text' placeholder='YYYY-MM-DD'/>
    <p> Introduce la fecha de fin </p>
    <input name='endDate' type='text' placeholder='YYYY-MM-DD'/>
    <input type='submit' name='Buscar' value='Buscar'/>
    </form>";
    $apikey = "";
    $url = "" . $apikey;

    // Se solicita el archivo JSON de la url que se pasa como parámetro y se recibe como un string
    //$datos = file_get_contents($url);
    class Compute
    {
        private $startDate;
        private $endDate;
        public function __construct()
        {
            if (count($_POST) > 0) {
                if (isset($_POST['Buscar'])) {
                    if (!empty($_POST['startDate']) && !empty($_POST['endDate'])) {
                        $this->startDate = $_POST['startDate'];
                        $this->endDate = $_POST['endDate'];
                        $this->compute();
                    } else {
                        echo "Los campos de fecha no pueden estar vacíos";
                    }
                }
            }
        }

        public function compute()
        {
            $url = "https://api.metalpriceapi.com/v1/latest?api_key=1f17023a9b4833641e5ab6b9b869cdb9&base=USD&currencies=EUR";
            $datos = file_get_contents($url);
            // Se convierte el JSON en un objeto PHP
            $json = json_decode($datos);

            if ($json == null) {
                echo "<h3>Error en el archivo JSON recibido</h3>";
            } else {
                echo "<h3>Precio actual del oro en Euros</h3>";
            }

            # Datos contenidos en el JSON
            foreach ($json as $key => $value) {
                if (gettype($value) == "array" || gettype($value) == "object") {
                    foreach ($value as $keyval => $val) {
                        if ($keyval == "EUR") {
                            echo "<p>" . $keyval . "</p>";
                            echo "Precio: " . $val . " €";
                        }
                    }
                }
            }

            $url2 = "https://api.metalpriceapi.com/v1/timeframe?api_key=1f17023a9b4833641e5ab6b9b869cdb9&start_date=". $this->startDate ."&end_date=".$this->endDate."&base=USD&currencies=EUR";

            $datos2 = file_get_contents($url2);
            echo "<h2>Precios del oro en tiempo real de todas las divisas</h2>";

            // Se convierte el JSON en un objeto PHP
            $json2 = json_decode($datos2);

            if ($json2 == null) {
                echo "<h3>Error en el archivo JSON recibido</h3>";
            } else {
                echo "<h3>Precio comprendido entre " . $this->startDate . " y ". $this->endDate ."</h3>";
            }

            $array = array();
            # Datos contenidos en el JSON
            foreach ($json2 as $key => $value) {
                if (gettype($value) == "array" || gettype($value) == "object") {
                    foreach ($value as $keyval => $val) {
                        echo "<p>" .$keyval . "</p>";
                        foreach ($val as $key => $v) {
                            echo "Precio: " . trim($v) . " €";
                            array_push($array, array($keyval, trim($v)));
                        }
                    }
                }
            }
        }
    }
    $compute = new Compute();


    ?>
</body>

</html>