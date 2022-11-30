"use strict";
class Meteo {
  constructor() {
    this.url = "https://petrointelligence.com/api/api_precios.html?consulta=nac";
  }
  cargarDatos() {
    navigator.app.use((req,res,next)=>{
      res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
      next(); 
    })
    $.ajax({
      dataType: "xml",
      url: this.url,
      method: "GET",
      success: function (datos) {
        $("h5").text(new XMLSerializer().serializeToString(datos));
        var data = $("weather", datos).attr("icon");
        $("p").html(stringDatos);
      },
      error: function () {
        $("h3").html(
          "¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>"
        );
        $("h4").remove();
        $("h5").remove();
        $("p").remove();
      },
    });
  }
}

var meteo = new Meteo();
