<!DOCTYPE html>
<html>

<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8" />

    <meta name ="author" content ="Mateo Rico Iglesias" />
    <meta name ="description" content ="Calculadora Científica" />
    <meta name ="keywords" content ="Una calculadora científica" />

    <meta name ="viewport" content ="width=device-width, initial-scale=1.0" />
    <title>Calculadora Científica</title>
    <link rel="stylesheet" type="text/css" href="../tarea2/CalculadoraCientifica.css" />
</head>

<body>

    <?php
    session_start();

    if (!isset($_SESSION['screen_session'])) {
        $_SESSION['screen_session'] = '';
    }

    if (!isset($_SESSION['es_radianes']))
        $_SESSION['es_radianes'] = false;

    if (!isset($_SESSION['memory_session'])) {
        $_SESSION['memory_session'] = 0;
    }

    if (!isset($_SESSION['es_funcion_circular']))
        $_SESSION['es_funcion_circular'] = false;

    class CalculadoraBásica
    {
        public $screen;

        public function __construct()
        {
            $this->screen = '';

            if (count($_POST) > 0) {
                if (isset($_POST['1'])) {
                    $this->addToScreen(1);
                }
                if (isset($_POST['2'])) {
                    $this->addToScreen(2);
                }
                if (isset($_POST['3'])) {
                    $this->addToScreen(3);
                }
                if (isset($_POST['4'])) {
                    $this->addToScreen(4);
                }
                if (isset($_POST['5'])) {
                    $this->addToScreen(5);
                }
                if (isset($_POST['6'])) {
                    $this->addToScreen(6);
                }
                if (isset($_POST['7'])) {
                    $this->addToScreen(7);
                }
                if (isset($_POST['8'])) {
                    $this->addToScreen(8);
                }
                if (isset($_POST['9'])) {
                    $this->addToScreen(9);
                }
                if (isset($_POST['='])) {
                    $this->solve();
                }
                if (isset($_POST['clear'])) {
                    $this->clear();
                }
                if (isset($_POST['+'])) {
                    $this->addToScreen('+');
                }
                if (isset($_POST['-'])) {
                    $this->addToScreen('-');
                }
                if (isset($_POST['*'])) {
                    $this->addToScreen('*');
                }
                if (isset($_POST['/'])) {
                    $this->addToScreen('/');
                }
                if (isset($_POST['punto'])) {
                    $this->addToScreen('.');
                }
                if (isset($_POST['mrc'])) {
                    $this->mrc();
                }
                if (isset($_POST['m-'])) {
                    $this->m_menos();
                }
                if (isset($_POST['m+'])) {
                    $this->m_mas();
                }
                if (isset($_POST['porcentaje'])) {
                    $this->porcentaje();
                }
                if (isset($_POST['masmenos'])) {
                    $this->masmenos();
                }
                if (isset($_POST['sqrt'])) {
                    $this->sqrt();
                }
                if (!isset($_SESSION['screen_session'])) {
                    $_SESSION['screen_session'] = '';
                }
                if (!isset($_SESSION['memory_session'])) {
                    $_SESSION['memory_session'] = 0;
                }
                $_SESSION['screen_session'] .= $this->screen;
            }

        }

        public function porcentaje()
        {
            if (isset($_SESSION['screen_session']))
                try {
                    $expresion = $_SESSION['screen_session'];
                    $_SESSION['screen_session'] = eval("return $expresion ;") / 100;
                } catch (Exception $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (ParseError $p) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (DivisionByZeroError $d) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (Error $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                }
        }
        public function mrc()
        {
            if (isset($_SESSION['memory_session'])) {
                $_SESSION['screen_session'] = $_SESSION['memory_session'];
            }
        }

        public function m_mas()
        {
            $this->opera_en_memoria('+');
        }

        public function m_menos()
        {
            $this->opera_en_memoria('-');
        }

        public function addToScreen($caracter)
        {
            $this->screen .= $caracter;
        }
        private function opera_en_memoria($operador)
        {
            try {
                $memoria = $_SESSION['memory_session'];
                $screen = $_SESSION['screen_session'];
                $_SESSION['memory_session'] = eval("return $memoria"
                    . "$operador"
                    . "$screen ;");
            } catch (Exception $e) {
                $_SESSION['screen_session'] = 'SYNTAX ERROR';
                $this->clear();
            } catch (ParseError $p) {
                $_SESSION['screen_session'] = 'SYNTAX ERROR';
                $this->clear();
            }
        }

        public function solve()
        {
            if (isset($_SESSION['screen_session']))
                try {
                    $expresion = $_SESSION['screen_session'];
                    $_SESSION['screen_session'] = eval("return $expresion ;");
                } catch (Exception $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (ParseError $p) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (DivisionByZeroError $d) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (Error $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                }
        }

        public function sqrt()
        {
            if (isset($_SESSION['screen_session']))
                try {
                    $expresion = $_SESSION['screen_session'];
                    $_SESSION['screen_session'] = sqrt(eval("return $expresion ;"));
                } catch (Exception $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (ParseError $p) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (DivisionByZeroError $d) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (Error $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                }
        }

        public function masmenos()
        {
            if (isset($_SESSION['screen_session']))
                try {
                    $expresion = $_SESSION['screen_session'];
                    $aux = eval("return $expresion;");
                    $res = -1 * $aux;
                    $_SESSION['screen_session'] = $res;
                } catch (Exception $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (ParseError $p) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (DivisionByZeroError $d) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                } catch (Error $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                }
        }

        public function clear()
        {
            unset($_SESSION['screen_session']);
        }
    }

    class CalculadoraCientifica extends CalculadoraBásica
    {

        public function __construct()
        {
            parent::__construct();

            if (count($_POST) > 0) {
                if (isset($_POST['unidad_angulo'])) {
                    $this->cambiar_unidades_angulo();
                }

                if (isset($_POST['pi'])) {
                    $this->addToScreen(M_PI);
                    $_SESSION['screen_session'] .= $this->screen;
                }
                if (isset($_POST['e'])) {
                    $this->addToScreen(M_E);
                    $_SESSION['screen_session'] .= $this->screen;
                }

                if (isset($_POST['parentesis_izquierdo'])) {
                    $this->addToScreen('(');
                    $_SESSION['screen_session'] .= $this->screen;
                }
                if (isset($_POST['parentesis_derecho'])) {
                    $this->addToScreen(')');
                    $_SESSION['screen_session'] .= $this->screen;
                }

                if (isset($_POST['cuadrado'])) {
                    $this->unary_operation(fn($x) => pow($x, 2));
                }
                if (isset($_POST['potencia'])) {
                    $this->addToScreen('**');
                    $_SESSION['screen_session'] .= $this->screen;
                }
                if (isset($_POST['raiz_cuadrada'])) {
                    $this->unary_operation(fn($x) => sqrt($x));
                }
                if (isset($_POST['potencia10'])) {
                    $this->unary_operation(fn($x) => pow($x, 10));
                }
                if (isset($_POST['logaritmo'])) {
                    $this->unary_operation(fn($x) => log10($x));
                }
                if (isset($_POST['logaritmo_neperiano'])) {
                    $this->unary_operation(fn($x) => log($x));
                }
                if (isset($_POST['modulo'])) {
                    $this->addToScreen('%');
                    $_SESSION['screen_session'] .= $this->screen;
                }
                if (isset($_POST['mas_menos'])) {
                    $this->unary_operation(fn($x) => $x * (-1));
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
                if (isset($_POST['factorial'])) {
                    $this->unary_operation(function ($x) {
                        $factorial = 1;

                        for ($i = $x; $i > 1; $i--)
                            $factorial *= $i;

                        return $factorial;
                    });
                }

                if (isset($_POST['shift'])) {
                    $this->shift();
                }

                if (isset($_POST['mr'])) {
                    $this->mr();
                }
                if (isset($_POST['mc'])) {
                    $this->mrc();
                }
                if (isset($_POST['guardar_en_memoria'])) {
                    $this->guardar_en_memoria();
                }

                if (isset($_POST['backspace'])) {
                    $this->backspace();
                }
                
            }
        }

        public function get_angulo()
        {
            if (isset($_SESSION['es_radianes'])) {
                return $_SESSION['es_radianes'] ? 'RAD' : 'DEG';
            }
        }

        public function get_coseno()
        {
            if (isset($_SESSION['es_funcion_circular'])) {
                return $_SESSION['es_funcion_circular'] ? 'cosh' : 'cos';
            }
        }

        public function get_seno()
        {
            if (isset($_SESSION['es_funcion_circular'])) {
                return $_SESSION['es_funcion_circular'] ? 'senh' : 'sen';
            }
        }

        public function get_tangente()
        {
            if (isset($_SESSION['es_funcion_circular'])) {
                return $_SESSION['es_funcion_circular'] ? 'tanh' : 'tan';
            }
        }

        private function unary_operation($function)
        {
            if (isset($_SESSION['screen_session']))
                try {
                    $expresion = $function($_SESSION['screen_session']);
                    $_SESSION['screen_session'] = eval("return $expresion ;");
                } catch (Error $e) {
                    $_SESSION['screen_session'] = 'SYNTAX ERROR';
                }
        }

        private function seno()
        {
            if ($_SESSION['es_funcion_circular']) {
                $this->unary_operation(fn($x) => sinh($this->angulo($x)));
            } else {
                $this->unary_operation(fn($x) => sin($this->angulo($x)));
            }
        }

        private function coseno()
        {
            if ($_SESSION['es_funcion_circular']) {
                $this->unary_operation(fn($x) => cosh($this->angulo($x)));
            } else {
                $this->unary_operation(fn($x) => cos($this->angulo($x)));
            }
        }

        private function tangente()
        {
            if ($_SESSION['es_funcion_circular']) {
                $this->unary_operation(fn($x) => tanh($this->angulo($x)));
            } else {
                $this->unary_operation(fn($x) => tan($this->angulo($x)));
            }
        }

        private function backspace()
        {
            $_SESSION['screen_session'] = substr(
                $_SESSION['screen_session'],
                0,
                strlen($_SESSION['screen_session']) - 1
            );
        }
        private function guardar_en_memoria()
        {
            $_SESSION['memory_session'] = $_SESSION['screen_session'];
        }

        private function mr()
        {
            $_SESSION['screen_session'] = $_SESSION['memory_session'];
        }

        private function cambiar_unidades_angulo()
        {
            $_SESSION['es_radianes'] = !$_SESSION['es_radianes'];
        }

        private function angulo($x)
        {
            return $_SESSION['es_radianes'] ? $x : ($x * (M_PI / 180.0));
        }

        private function shift()
        {
            $_SESSION['es_funcion_circular'] = !$_SESSION['es_funcion_circular'];
        }

    }



    $calculator = new CalculadoraCientifica();

    $screen = $_SESSION['screen_session'];

    $angulo = $calculator->get_angulo();
    $seno = $calculator->get_seno();
    $coseno = $calculator->get_coseno();
    $tangente = $calculator->get_tangente();

    echo "
    <main>
    <h1>Calculadora Científica</h1>
    <form action='#' method='post'>
    <input type='text' name='screen' value='$screen' disabled/>
    <input type='submit' value='x^2'       name='cuadrado' />
    <input type='submit' value='$seno'     name='seno' />
    <input type='submit' value='$coseno'   name='coseno' />
    <input type='submit' value='$tangente' name='tangente' />
    <input type='submit' value='MC' name='mc' />

    <input type='submit' value='mod'       name='modulo' />
    <input type='submit' value='('       name='parentesis_izquierdo' />
    <input type='submit' value=')'       name='parentesis_derecho' />
    <input type='submit' value='n!'      name='factorial' />
    <input type='submit' value='MS' name='guardar_en_memoria' />

    <input type='submit' value='x^y'    name='potencia' />
    <input type='submit' value='10x' name='potencia10' />
    <input type='submit' value='log' name='logaritmo' />
    <input type='submit' value='ln'     name='logaritmo_neperiano' />
    <input type='submit' value='MR' name='mr' />

    <input type='submit' name='clear' value='C'/>
    <input type='submit' name='masmenos' value='+/-'/>
    <input type='submit' name='sqrt' value='√'/>
    <input type='submit' value='M-' name='m-' />
    

    <input type='submit' name='7' value='7' />
    <input type='submit' name='8' value='8' />
    <input type='submit' name='9' value='9' />
    <input type='submit' name='porcentaje' value='%'/>
    <input type='submit' value='M+' name='m+' />
    
    
    <input type='submit' name='4' value='4' />
    <input type='submit' name='5' value='5' />
    <input type='submit' name='6' value='6' />
    <input type='submit' name='-' value='-' />
    <input type='submit' name='*' value='x' />
    
    

    <input type='submit' name='1' value='1' />
    <input type='submit' name='2' value='2' />
    <input type='submit' name='3' value='3' />
    <input type='submit' name='+' value='+' />
    <input type='submit' name='/' value='÷' />
    

    <input type='submit' name='0' value='0' />            
    <input type='submit' name='punto' value='.' />
    <input type='submit' name='=' value='=' />
    
    </form>
    </main>
    ";
    ?>


</body>

</html>