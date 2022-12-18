<!DOCTYPE html>
<html>

<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8" />

    <meta name ="author" content ="Mateo Rico Iglesias" />
    <meta name ="description" content ="Calculadora Milán" />
    <meta name ="keywords" content ="Una calculadora básica" />

    <meta name ="viewport" content ="width=device-width, initial-scale=1.0" />
    <title>Calculadora Milán</title>
    <link rel="stylesheet" type="text/css" href="../tarea2/CalculadoraMilan.css" />
</head>

<body>
    <?php
    session_start();

    if (!isset($_SESSION['screen_session'])) {
        $_SESSION['screen_session'] = '';
    }

    if (!isset($_SESSION['memory_session'])) {
        $_SESSION['memory_session'] = 0;
    }

    class CalculadoraMilán
    {
        private $screen;

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

        public function porcentaje(){
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
        private function opera_en_memoria($operador) {
            try {
                $memoria = $_SESSION['memory_session'];
                $screen = $_SESSION['screen_session'];
                $_SESSION['memory_session'] = eval("return $memoria"
                                                         ."$operador"
                                                         ."$screen ;");
            } catch (Exception $e) {
                $_SESSION['screen_session'] = 'SYNTAX ERROR';
                $this->clear();
            } catch(ParseError $p){
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
    
    $calculator = new CalculadoraMilán();

    $screen = $_SESSION['screen_session'];

    echo "
    <main>
    <h1>Calculadora Milán</h1>
    <form action='#' method='post'>
        <input type='text' name='screen' value='$screen' disabled/>
            <input type='submit' name='clear' value='C'/>
            <input type='submit' name='masmenos' value='+/-'/>
            <input type='submit' name='sqrt' value='√'/>
            <input type='submit' name='porcentaje' value='%'/>

            <input type='submit' name='7' value='7' />
            <input type='submit' name='8' value='8' />
            <input type='submit' name='9' value='9' />
            <input type='submit' name='*' value='x' />
            <input type='submit' name='/' value='÷' />

            <input type='submit' name='4' value='4' />
            <input type='submit' name='5' value='5' />
            <input type='submit' name='6' value='6' />
            <input type='submit' name='-' value='-' />
            <input type='submit' name='mrc' value='MRC' />

            <input type='submit' name='1' value='1' />
            <input type='submit' name='2' value='2' />
            <input type='submit' name='3' value='3' />
            <input type='submit' name='+' value='+' />
            <input type='submit' name='m-' value='M-' />

            <input type='submit' name='0' value='0' />            
            <input type='submit' name='punto' value='.' />
            <input type='submit' name='=' value='=' />
            <input type='submit' name='m+' value='M+' />

    </form>
    </main>
    ";
    ?>


</body>

</html>