"use strict";
class KML {

  initMap(){
    var oviedo = {lat: 43.3672702, lng: -5.8502461};
    var mapaOviedo = new google.maps.Map(document.querySelector('main'),{zoom: 8,center:oviedo});
    this.lugares.forEach(function(place){
      let coords = place.toString().split(",");
      let livingIn = {lat: (Number)(coords[1]), lng: (Number)(coords[0])};
      var marcador = new google.maps.Marker({position:livingIn,map:mapaOviedo});
    }.bind(this));
  }

  processData(data){
    let coordenadas = [];

    let parser = new DOMParser();
    let dom = parser.parseFromString(data, "text/xml");
    let domCoord = dom.getElementsByTagName("coordinates");

    for (let element of domCoord)
        coordenadas.push(element.innerHTML.trim());
    
    this.lugares = coordenadas.map(conjunto => conjunto.split(" "))

    this.initMap();
  }

  load(files){
    let archive = files[0];
    let reader = new FileReader();
    if(archive.name.match(/.kml/)){
      reader.onload = e => this.processData(reader.result);
      reader.readAsText(archive);
    } else {
      $('p').text('El archivo seleccionado no es de un tipo válido')
    }
  }
}

var kml = new KML();
