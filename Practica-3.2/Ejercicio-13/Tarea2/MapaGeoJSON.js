"use strict";
class KML {
  initMap(files) {
    let archivo = files[0];

    if (archivo.name.match(/.GeoJSON/)) {
      // Leemos el archivo...
      var oviedo = { lat: 43.3672702, lng: -5.8502461 };
      var mapaOviedo = new google.maps.Map(document.querySelector("main"), {
        zoom: 8,
        center: oviedo,
      });
      // Creamos el infoWindow para poder mostrar el contenido...
      let infoWindow = new google.maps.InfoWindow();

      let reader = new FileReader();
      reader.onload = function () {
        mapaOviedo.data.addGeoJson(JSON.parse(reader.result));
      };
      reader.readAsText(archivo);

      // Mostramos el nombre del lugar al hacer click
      mapaOviedo.data.addListener("click", function (event) {
        infoWindow.setPosition(event.feature.getGeometry().get());
        infoWindow.setContent(event.feature.getProperty("name"));
        infoWindow.open(mapaOviedo);
      });
    } // Si el archivo no es GeoJSON...
    else {
      $("main").text("El archivo seleccionado no es de un tipo válido");
    }
  }
}

var kml = new KML();
