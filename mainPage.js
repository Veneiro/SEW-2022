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
        document.getElementById("Exercise1Txt").scrollTop = 0;
            var fileToLoad = document.getElementById("fileToLoad").files[0];
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                var textFromFileLoaded = fileLoadedEvent.target.result;
                    document.getElementById("Exercise1Txt").value = textFromFileLoaded;
            };
            fileReader.readAsText(fileToLoad, "UTF-8");
        id=1;  
    }

    exercise1Code2(){
        var doc = new XMLHttpRequest("html");
        doc.Visible = false;
        doc.open('GET', 'https://veneiro.github.io/SEW-2022/Pr%C3%A1ctica-3.1/Ejercicio-01/Tarea1/Ejercicio1.html');
        var txt = doc.responseText;
        document.getElementById("Exercise1Txt").value = txt;

    }
}

var index = new Index();
