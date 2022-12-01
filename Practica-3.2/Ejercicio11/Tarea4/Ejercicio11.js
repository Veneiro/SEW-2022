// 107-objetoMapaDinamicoGoogle.js
// VersiÃ³n 2.0 18/noviembre/2018. Juan Manuel Cueva Lovelle. Universidad de Oviedo
//Version 2.1 23/10/2021 
class MapaDinamico {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    initMap(){
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        var mapaOviedo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:oviedo});
        var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});
    }
    getPosicion(posicion){
        this.mensaje = "Se ha realizado correctamente la peticiÃ³n de geolocalizaciÃ³n";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;  
        this.initMap();     
    }
    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la peticiÃ³n de geolocalizaciÃ³n"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "InformaciÃ³n de geolocalizaciÃ³n no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La peticiÃ³n de geolocalizaciÃ³n ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }
}
var map = new MapaDinamico();
