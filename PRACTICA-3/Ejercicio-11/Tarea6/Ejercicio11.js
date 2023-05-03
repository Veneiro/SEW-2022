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

          let mapa = new google.maps.Map(document.querySelector("main"), {
            zoom: 14,
            center: posActual,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
          });

          let infoWindow = new google.maps.InfoWindow();

          let request = {
            location: posActual,
            radius: 100000,
            types: ["pharmacy"],
          };

          let service = new google.maps.places.PlacesService(mapa);
          service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK)
              for (let i = 0; i < results.length; i++) {
                var marcador = new google.maps.Marker({
                  map: mapa,
                  position: results[i].geometry.location,
                });

                google.maps.event.addListener(marcador, "click", function () {
                  infoWindow.setContent(results[i].name);
                  infoWindow.open(mapa, this);
                });
              }
              var svgMarker = {
                path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                fillColor: "cyan",
                fillOpacity: 1,
                strokeWeight: 0,
                rotation: 0,
                scale: 2,
                anchor: new google.maps.Point(15, 30),
              };
              var marcador = new google.maps.Marker({
                position: posActual,
                map: mapa,
                icon: svgMarker,
              });
              google.maps.event.addListener(marcador, "click", function () {
                infoWindow.setContent("Posición actual");
                infoWindow.open(mapa, this);
              });
          });
        }, 
        (e) => this.handleLocationError(true, mapa, infoWindow, map.getCenter())
      );
    } 
    else this.creaMarcador(false, mapa, infoWindow, map.getCenter());
  }
}
var map = new MapaDinamico();
