<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="author" content="Ángel Iglesias Préstamo" />
    <meta name="viewport" content="width=device-width, initial scale=1.0" />
    <title>Ejercicio3 - CalculadoraRPN</title>
    <link rel="stylesheet" href="CalculadoraRPN.css">
</head>

<body>
    <?php
    session_start();

    if (!isset($_SESSION['es_funcion_inversa']))
        $_SESSION['es_funcion_inversa'] = false;

    if (!isset($_SESSION['sesion_pila']))
        $_SESSION['sesion_pila'] = array();

    class CalculadoraRPN
    {

        private $pantalla;

        public function __construct()
        {
            $this->pantalla = '';

            if (count($_POST) > 0) {
                if (isset($_POST['1'])) {
                    $this->caracter(1);
                }
                if (isset($_POST['2'])) {
                    $this->caracter(2);
                }
                if (isset($_POST['3'])) {
                    $this->caracter(3);
                }
                if (isset($_POST['4'])) {
                    $this->caracter(4);
                }
                if (isset($_POST['5'])) {
                    $this->caracter(5);
                }
                if (isset($_POST['6'])) {
                    $this->caracter(6);
                }
                if (isset($_POST['7'])) {
                    $this->caracter(7);
                }
                if (isset($_POST['8'])) {
                    $this->caracter(8);
                }
                if (isset($_POST['9'])) {
                    $this->caracter(9);
                }
                if (isset($_POST['0'])) {
                    $this->caracter(0);
                }

                if (isset($_POST['punto'])) {
                    $this->caracter('.');
                }

                if (isset($_POST['pi'])) {
                    $this->caracter(M_PI);
                }

                if (isset($_POST['cuadradoDosIncg'])) {
                    $this->binary_operation(fn($x, $y) => $x ** $y);
                }

                if (isset($_POST['porcentaje'])) {
                    $this->unary_operation(fn($x) => $x / 100);
                }

                if (isset($_POST['masmenos'])) {
                    $this->unary_operation(fn($x) => $x * (-1));
                }

                if (isset($_POST['modulo'])) {
                    $this->binary_operation(fn($x, $y) => $x % $y);
                }

                if (isset($_POST['division'])) {
                    $this->binary_operation(fn($x, $y) => $x / $y);
                }
                if (isset($_POST['producto'])) {
                    $this->binary_operation(fn($x, $y) => $x * $y);
                }
                if (isset($_POST['resta'])) {
                    $this->binary_operation(fn($x, $y) => $x - $y);
                }
                if (isset($_POST['suma'])) {
                    $this->binary_operation(fn($x, $y) => $x + $y);
                }
                if (isset($_POST['cuadrado'])) {
                    $this->unary_operation(fn($x) => pow($x, 2));
                }
                if (isset($_POST['logaritmo'])) {
                    $this->unary_operation(fn($x) => log10($x));
                }
                if (isset($_POST['raiz_cuadrada'])) {
                    $this->unary_operation(fn($x) => sqrt($x));
                }
                if (isset($_POST['seno'])) {
                    $this->seno();
                }
                if (isset($_POST['coseno'])) {
                    $this->coseno();
                }
                if (isset($_POST['tangente'])) {
                    $this->tangente();
                }

                if (isset($_POST['enter'])) {
                    $this->push();
                }

                if (isset($_POST['borrar'])) {
                    $this->borrar();
                }

                if (isset($_POST['borrarSoloInput'])) {
                    $this->borrarSoloInput();
                }

                if (isset($_POST['shift'])) {
                    $this->shift();
                }

                if (!isset($_SESSION['sesion_pantalla'])) {
                    $_SESSION['sesion_pantalla'] = '';
                }
                $_SESSION['sesion_pantalla'] .= $this->pantalla;
            }
        }

        public function get_pila()
        {
            if (isset($_SESSION['sesion_pila'])) {
                return implode("\n", $_SESSION['sesion_pila']);
            }
        }

        public function get_coseno()
        {
            if (isset($_SESSION['es_funcion_inversa'])) {
                return $_SESSION['es_funcion_inversa'] ? 'cos' : 'acos';
            }
        }

        public function get_seno()
        {
            if (isset($_SESSION['es_funcion_inversa'])) {
                return $_SESSION['es_funcion_inversa'] ? 'sen' : 'asen';
            }
        }

        public function get_tangente()
        {
            if (isset($_SESSION['es_funcion_inversa'])) {
                return $_SESSION['es_funcion_inversa'] ? 'tan' : 'atan';
            }
        }
        private function push()
        {
            $elemento = $_SESSION['sesion_pantalla'];
            unset($_SESSION['sesion_pantalla']);

            if ($this->es_valido($elemento)) {
                $_SESSION['sesion_pila'][] = $elemento;
            }
        }

        public function es_valido($elemento)
        {
            return !empty($elemento) &&
                stripos($elemento, 'undefined') === false &&
                stripos($elemento, 'NaN') === false &&
                stripos($elemento, 'error') === false;
        }

        private function caracter($x)
        {
            $this->pantalla .= $x;
        }

        private function seno()
        {
            if ($_SESSION['es_funcion_inversa']) {
                $this->unary_operation(fn($x) => asin($this->angulo($x)));
            }
            $this->unary_operation(fn($x) => sin($this->angulo($x)));
        }

        private function coseno()
        {
            if ($_SESSION['es_funcion_inversa']) {
                $this->unary_operation(fn($x) => acos($this->angulo($x)));
            }
            $this->unary_operation(fn($x) => cos($this->angulo($x)));
        }

        private function tangente()
        {
            if ($_SESSION['es_funcion_inversa']) {
                $this->unary_operation(fn($x) => atan($this->angulo($x)));
            }
            $this->unary_operation(fn($x) => tan($this->angulo($x)));
        }

        private function unary_operation($f)
        {
            if (isset($_SESSION['sesion_pila']) && !empty($_SESSION['sesion_pila'])) {
                try {
                    $op1 = floatval(array_pop($_SESSION['sesion_pila']));

                    $_SESSION['sesion_pantalla'] = $f($op1);

                    $this->push();
                } catch (Exception $e) {
                    $_SESSION['sesion_pantalla'] = "SYNTAX ERROR";
                }
            }
        }

        private function binary_operation($f)
        {
            if (isset($_SESSION['sesion_pila']) && !empty($_SESSION['sesion_pila'])) {
                try {
                    $op2 = floatval(array_pop($_SESSION['sesion_pila']));
                    $op1 = floatval(array_pop($_SESSION['sesion_pila']));

                    $_SESSION['sesion_pantalla'] = $f($op1, $op2);

                    $this->push();
                } catch (Exception $e) {
                    $_SESSION['sesion_pantalla'] = "SYNTAX ERROR";
                }
            }
        }

        private function angulo($x)
        {
            return $x * (M_PI / 180.0);
        }
        private function borrar()
        {
            unset($_SESSION['sesion_pantalla']);
            unset($_SESSION['sesion_pila']);
        }

        private function borrarSoloInput(){
            unset($_SESSION['sesion_pantalla']);
        }

        private function shift()
        {
            $_SESSION['es_funcion_inversa'] = !$_SESSION['es_funcion_inversa'];
        }

    }

    $calculadora = new CalculadoraRPN();

    $pantalla = $_SESSION['sesion_pantalla'];
    $pila = $calculadora->get_pila();

    $seno = $calculadora->get_seno();
    $coseno = $calculadora->get_coseno();
    $tangente = $calculadora->get_tangente();

    echo "
        <main>
        <h1>Calculadora RPN</h1>
        <form action='#' method='post'>
            <label for='stack' hidden>Pantalla para mostrar los resultados en la pila</label>
            <textarea id='stack' rows='5' disabled>$pila</textarea>
            <label for='result' hidden>Pantalla para mostrar los resultados de los cálculos</label>
            <input type='text' id='result' value='$pantalla' disabled>

            
            <input type='submit' value='log'    name='logaritmo' />
            <input type='submit' value='SHIFT'  name='shift' />
            <input type='submit' value='$seno'   name='seno' />
            <input type='submit' value='$coseno'   name='coseno' />
            <input type='submit' value='$tangente'   name='tangente' />
            
            <input type='submit' value='x^y'    name='cuadradoDosIncg' />
            <input type='submit' value='%'    name='porcentaje' />
            <input type='submit' value='+/-'    name='masmenos' />
            <input type='submit' value='mod'    name='modulo' />
            <input type='submit' value='π'    name='pi' />

            <input type='submit' value='x^2'    name='cuadrado' />
            <input type='submit' value='7' name='7' />
            <input type='submit' value='8' name='8' />
            <input type='submit' value='9' name='9' />
            <input type='submit' value='*' name='producto' />
            
            <input type='submit' value='√' name='raiz_cuadrada' />
            <input type='submit' value='4' name='4' />
            <input type='submit' value='5' name='5' />
            <input type='submit' value='6' name='6' />
            <input type='submit' value='-' name='resta' />
            
            <input type='submit' value='÷' name='division' />
            <input type='submit' value='1' name='1' />
            <input type='submit' value='2' name='2' />
            <input type='submit' value='3' name='3' />
            
            <input type='submit' value='+' name='suma' />
            <input type='submit' value='.'     name='punto' />
            
            
            
            <input type='submit' value='0'     name='0' />
            
            
            
            <input type='submit' value='CE'     name='borrar' />
            <input type='submit' value='ENTER' name='enter' />
            <input type='submit' value='C'     name='borrarSoloInput' />
        </form>
        </main>";
    ?>
</body>

</html>