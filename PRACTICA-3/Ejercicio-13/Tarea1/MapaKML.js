"use strict";
class KML {
  initMap() {
    var oviedo = { lat: 43.3672702, lng: -5.8502461 };
    var mapaOviedo = new google.maps.Map(document.querySelector("main"), {
      zoom: 8,
      center: oviedo,
    });
    this.lugares.forEach(
      function (place) {
        var coords = place.toString().split(",");
        var livingIn = { lat: Number(coords[2]), lng: Number(coords[0]) };
        var marcador = new google.maps.Marker({
          position: livingIn,
          map: mapaOviedo,
        });
      }.bind(this)
    );
  }

  processData(data) {
    var coordenadas = [];

    var parser = new DOMParser();
    var dom = parser.parseFromString(data, "text/xml");
    var domCoord = dom.getElementsByTagName("coordinates");

    for (var element of domCoord) coordenadas.push(element.innerHTML.trim());

    this.lugares = coordenadas.map((conjunto) => conjunto.split(" "));

    this.initMap();
  }

  load(files) {
    var archive = files[0];
    var reader = new FileReader();
    if (archive.name.match(/.kml/)) {
      reader.onload = (e) => this.processData(reader.result);
      reader.readAsText(archive);
    } else {
      $("main").text("El archivo seleccionado no es de un tipo válido");
    }
  }
}

var kml = new KML();
