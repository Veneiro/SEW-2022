//Version 1.1 23/10/2021
class Ejercicio1{
  iniciar() {
    this.obtener();
  }
  obtener() {
    navigator.geolocation.getCurrentPosition(this.mostrar, this.errores);
  }
  mostrar(posicion) {
    var ubicacion = document.getElementById("ubicacion");
    var datos = "";
    datos += "<h2>Los datos de ubicación</h2>";
    datos += "<p>Latitud: " + posicion.coords.latitude + " grados</p>";
    datos += "<p>Longitud: " + posicion.coords.longitude + " grados</p>";
    datos +=
      "<p>Precisión de la latitud y longitud: " +
      posicion.coords.accuracy +
      " metros</p>";
    datos += "<p>Altitud: " + posicion.coords.altitude + " metros.</p>";
    datos +=
      "<p>Precisión de la altitud: " +
      posicion.coords.altitudeAccuracy +
      " metros</p>";
    datos += "<p>Rumbo: " + posicion.coords.heading + " grados</p>";
    datos += "<p>Velocidad: " + posicion.coords.speed + " metros/segundo</p>";
    ubicacion.innerHTML = datos;
  }
  
  errores(error) {
    alert("Error: " + error.code + " " + error.message);
  }
}

var ej1 = new Ejercicio1();
