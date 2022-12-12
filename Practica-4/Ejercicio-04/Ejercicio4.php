<!DOCTYPE html>
<html>

<head>
    <title>Calculadora Milán</title>
    <link rel="stylesheet" type="text/css" href="./CalculadoraMilan.css" />
</head>

<body>
    <?php
    session_start();
    $apikey = "";
    $url = "" . $apikey;

    // Se solicita el archivo JSON de la url que se pasa como parámetro y se recibe como un string
    //$datos = file_get_contents($url);
    class Compute
    {
        public function __construct()
        {
            if (count($_POST) > 0) {
                if (isset($_POST['Buscar'])) {
                    if(isset($_GET['startDate']) && isset($_GET['endDate'])){
                        echo "llegó";
                        echo $_GET['startDate'];
                        echo $_GET['endDate'];
                    }
                }
            }
        }

        public function compute(){
            // Se convierte el JSON en un objeto PHP
            $json = 'json_decode($datos)';

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
                            echo $keyval . "<br>";
                            echo "<p>" . $val . "</p>";
                        }
                    }
                }
            }

            $url2 = "https://api.metalpriceapi.com/v1/timeframe?api_key= &start_date=&end_date=&base=USD&currencies=EUR";

            $datos2 = file_get_contents($url2);
            echo "<h2>Precios del oro en tiempo real de todas las divisas</h2>";

            // Se convierte el JSON en un objeto PHP
            $json2 = json_decode($datos2);

            if ($json2 == null) {
                echo "<h3>Error en el archivo JSON recibido</h3>";
            } else {
                echo "<h3>Precio actual del oro en Euros</h3>";
            }

            $array = array();
            # Datos contenidos en el JSON
            foreach ($json2 as $key => $value) {
                if (gettype($value) == "array" || gettype($value) == "object") {
                    foreach ($value as $keyval => $val) {
                        echo $keyval . "<br>";
                        foreach ($val as $key => $v) {
                            echo "<p>" . trim($v) . "</p>";
                            array_push($array, array($keyval, trim($v)));
                        }
                    }
                }
            }
        }
    }
    $compute = new Compute();
    echo "<h2>Precios del oro en tiempo real de todas las divisas</h2>";
    echo "<p> Introduce la fecha de inicio </p>";
    echo "<form action='#' method='get'>
    <input name='startDate' type='text' placeholder='YYYY-MM-DD'/>
    </form>";
    echo "<p> Introduce la fecha de fin </p>";
    echo "<form action='#' method='get'>
    <input name='endDate' type='text' placeholder='YYYY-MM-DD'/>
    </form>";
    echo "<form action='#' method='post'>
    <input type='submit' name='Buscar' value='Buscar'/>
    </form>";
    
    ?>
</body>

</html>