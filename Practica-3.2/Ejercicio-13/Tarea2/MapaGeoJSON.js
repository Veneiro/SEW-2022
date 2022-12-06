"use strict";
class GeoJSON {
  initMap(files) {
    let archivo = files[0];

    if (archivo.name.match(/.GeoJSON/)) {
      var oviedo = { lat: 43.3672702, lng: -5.8502461 };
      var mapaOviedo = new google.maps.Map(document.querySelector("main"), {
        zoom: 8,
        center: oviedo,
      });
      let infoWindow = new google.maps.InfoWindow();

      let reader = new FileReader();
      reader.onload = function () {
        mapaOviedo.data.addGeoJson(JSON.parse(reader.result));
      };
      reader.readAsText(archivo);
      mapaOviedo.data.addListener("click", function (event) {
        infoWindow.setPosition(event.feature.getGeometry().get());
        infoWindow.setContent(event.feature.getProperty("name"));
        infoWindow.open(mapaOviedo);
      });
    } 
    else {
      $("main").text("El archivo seleccionado no es de un tipo válido");
    }
  }
}

var geo = new GeoJSON();
