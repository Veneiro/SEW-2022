// 107-objetoMapaDinamicoGoogle.js
// VersiÃ³n 2.0 18/noviembre/2018. Juan Manuel Cueva Lovelle. Universidad de Oviedo
//Version 2.1 23/10/2021
"use strict";
class MapaDinamico {
  constructor() {
    navigator.geolocation.getCurrentPosition(
      this.getPosicion.bind(this),
      this.verErrores.bind(this)
    );
  }
  getPosicion(posicion) {
    this.mensaje =
      "Se ha realizado correctamente la peticiÃ³n de geolocalizaciÃ³n";
    this.longitud = posicion.coords.longitude;
    this.latitud = posicion.coords.latitude;
    this.precision = posicion.coords.accuracy;
    this.altitud = posicion.coords.altitude;
    this.precisionAltitud = posicion.coords.altitudeAccuracy;
    this.rumbo = posicion.coords.heading;
    this.velocidad = posicion.coords.speed;
  }
  verErrores(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.mensaje = "El usuario no permite la peticiÃ³n de geolocalizaciÃ³n";
        break;
      case error.POSITION_UNAVAILABLE:
        this.mensaje = "InformaciÃ³n de geolocalizaciÃ³n no disponible";
        break;
      case error.TIMEOUT:
        this.mensaje = "La peticiÃ³n de geolocalizaciÃ³n ha caducado";
        break;
      case error.UNKNOWN_ERROR:
        this.mensaje = "Se ha producido un error desconocido";
        break;
    }
  }
  initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          var posActual = new google.maps.LatLng(
            pos.coords.latitude,
            pos.coords.longitude
          );

          // Creamos el mapa con la configuración establecida anteriormente
          let mapa = new google.maps.Map(document.querySelector("main"), {
            zoom: 14,
            center: posActual,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
          });

          // Creamos el info window
          let infoWindow = new google.maps.InfoWindow();

          // Indicamos que queremos buscar las gasolineras más cercanas en un radio
          let request = {
            location: posActual,
            radius: 100000,
            types: ["supermarket"], // si cambias este valor: cambia el tipo de lugar
          };

          // Creamos el servicio para que haga la petición
          let service = new google.maps.places.PlacesService(mapa);
          service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK)
              for (let i = 0; i < results.length; i++) {
                // Creamos el marcador
                var marcador = new google.maps.Marker({
                  map: mapa,
                  position: results[i].geometry.location,
                });

                // Mostramos el nombre del lugar al hacer click
                google.maps.event.addListener(marcador, "click", function () {
                  infoWindow.setContent(results[i].name);
                  infoWindow.open(mapa, this);
                });
              }
          });
        }, // si falla algo...
        (e) => this.handleLocationError(true, mapa, infoWindow, map.getCenter())
      );
    } // El navegador no soporta GEOLOCATION
    else this.creaMarcador(false, mapa, infoWindow, map.getCenter());
  }
}
var map = new MapaDinamico();
