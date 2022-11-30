// 108-GeolocalizacionMapaDinamicoGoogle.js
// VersiÃ³n 1.0 20/noviembre/2018. Juan Manuel Cueva Lovelle. Universidad de Oviedo
//Version 1.1 23/10/2021 
class Mapa{
  constructor(){
    this.url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU&callback=miMapa.initMap";
  }
  initMap(){
    $.ajax({
      dataType: "json",
      url: this.url,
      method: 'GET',
      success: function(datos){
        this.centro = {lat: 43.3672702, lng: -5.8502461};
        this.mapaGeoposicionado = new google.maps.Map(document.getElementsByName('mapa')[0],{
            zoom: 8,
            center:this.centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                this.pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };

                this.infoWindow.setPosition(pos);
                this.infoWindow.setContent('LocalizaciÃ³n encontrada');
                this.infoWindow.open(this.mapaGeoposicionado);
                this.mapaGeoposicionado.setCenter(this.pos);
              }, function() {
                this.handleLocationError(true, this.infoWindow, this.mapaGeoposicionado.getCenter());
              });
            } else {
              // Browser doesn't support Geolocation
              this.handleLocationError(false, this.infoWindow, this.mapaGeoposicionado.getCenter());
            }
    }});
  }
  
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    this.infoWindow.setPosition(pos);
    this.infoWindow.setContent(browserHasGeolocation ?
                          'Error: Ha fallado la geolocalizaciÃ³n' :
                          'Error: Su navegador no soporta geolocalizaciÃ³n');
    this.infoWindow.open(mapaGeoposicionado);
  }
}
var miMapa = new Mapa();
