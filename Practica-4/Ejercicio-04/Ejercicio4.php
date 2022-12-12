<!DOCTYPE html>
<html>

<head>
    <title>Calculadora Milán</title>
    <link rel="stylesheet" type="text/css" href="./CalculadoraMilan.css" />
</head>

<body>
    <?php
    // 100-CodigoPHP.php
    // Versión 1.0 10/12/2017 Juan Manuel Cueva Lovelle. Universidad de Oviedo

    $apikey = "d204d0030eb6607d27cc0fd1569ca4f7";
    $url = "https://api.metalpriceapi.com/v1/latest?api_key=" . $apikey;

    // Se solicita el archivo JSON de la url que se pasa como parámetro y se recibe como un string
    $datos = file_get_contents($url);
    echo "<h2>JSON recibido</h2>";

    // Muestra el archivo JSON recibido como string maquetado en bonito
    echo "<pre>";
    $jsonMaquetado = json_decode($datos, JSON_PRETTY_PRINT);
    print_r($jsonMaquetado);
    echo "</pre>";

    // Se convierte el JSON en un objeto PHP
    $json = json_decode($datos);

    if ($json == null) {
        echo "<h3>Error en el archivo JSON recibido</h3>";
    } else {
        echo "<h3>JSON decodificado correctamente</h3>";
    }

    # Datos contenidos en el JSON
    $precio = $json->rates;

    foreach($precio as $p){
        echo $p;
        echo "\r";
    }
    ?>
</body>

</html>