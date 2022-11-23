class Index{
    ejercicio1(){
        window.location.href = './Práctica-3.1/Ejercicio-01/Tarea1/Ejercicio1.html';
    }

    ejercicio2(){
        window.location.href = './Práctica-3.1/Ejercicio-02/Tarea1/Ejercicio2.html';
    }

    ejercicio3(){
        window.location.href = './Práctica-3.1/Ejercicio-03/Tarea1/CalculadoraMilán.html';
    }

    ejercicio4(){
        window.location.href = './Práctica-3.1/Ejercicio-04 (con herencia)/Tarea1/CalculadoraCientífica.html';
    }

    ejercicio5(){
        window.location.href = './Práctica-3.1/Ejercicio-05/Tarea1/CalculadoraRpn.html';
    }

    ejercicio6(){
        window.location.href = './Práctica-3.1/Ejercicio-06/Tarea1/CalculadoraRpn.html';
    }
    exercise1Code(){
        var tag_id = document.getElementById('html');
        document.getElementById("Exercise1Txt").value = tag_id.innerHTML;
    }
}

var index = new Index();
