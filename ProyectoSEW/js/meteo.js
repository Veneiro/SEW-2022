"use strict";
class Meteo {
  constructor() {
    this.apikey = "47b790fd0fc41878c80c57c9846132cb";
    this.ciudad = "Morcín";
    this.tipo = "&mode=xml";
    this.unidades = "&units=metric";
    this.idioma = "&lang=es";
    this.url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.ciudad +
      this.tipo +
      this.unidades +
      this.idioma +
      "&APPID=" +
      this.apikey;
    this.correcto =
      "¡Todo correcto! XML recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>";
  }
  cargarDatos() {
    //debugger;
    $.ajax({
      dataType: "xml",
      url: this.url,
      method: "GET",
      success: function (datos) {
        //Presentación del archivo XML en modo texto
        $("h5").text(new XMLSerializer().serializeToString(datos));
        //Extracción de los datos contenidos en el XML
        var totalNodos = $("*", datos).length; // cuenta los elementos de XML: son los nodos del árbol DOM de XML
        var icon = $("weather", datos).attr("icon");
        var ciudad = $("city", datos).attr("name");
        var longitud = $("coord", datos).attr("lon");
        var latitud = $("coord", datos).attr("lat");
        var pais = $("country", datos).text();
        var amanecer = $("sun", datos).attr("rise");
        var minutosZonaHoraria = new Date().getTimezoneOffset();
        var amanecerMiliSeg1970 = Date.parse(amanecer);
        amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
        var amanecerLocal = new Date(amanecerMiliSeg1970).toLocaleTimeString(
          "es-ES"
        );
        var oscurecer = $("sun", datos).attr("set");
        var oscurecerMiliSeg1970 = Date.parse(oscurecer);
        oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
        var oscurecerLocal = new Date(oscurecerMiliSeg1970).toLocaleTimeString(
          "es-ES"
        );
        var temperatura = $("temperature", datos).attr("value");
        var temperaturaMin = $("temperature", datos).attr("min");
        var temperaturaMax = $("temperature", datos).attr("max");
        var temperaturaUnit = $("temperature", datos).attr("unit");
        var humedad = $("humidity", datos).attr("value");
        var humedadUnit = $("humidity", datos).attr("unit");
        var presion = $("pressure", datos).attr("value");
        var presionUnit = $("pressure", datos).attr("unit");
        var velocidadViento = $("speed", datos).attr("value");
        var nombreViento = $("speed", datos).attr("name");
        var direccionViento = $("direction", datos).attr("value");
        var codigoViento = $("direction", datos).attr("code");
        var nombreDireccionViento = $("direction", datos).attr("name");
        var nubosidad = $("clouds", datos).attr("value");
        var nombreNubosidad = $("clouds", datos).attr("name");
        var visibilidad = $("visibility", datos).attr("value");
        var precipitacionValue = $("precipitation", datos).attr("value");
        var precipitacionMode = $("precipitation", datos).attr("mode");
        var descripcion = $("weather", datos).attr("value");
        var horaMedida = $("lastupdate", datos).attr("value");
        var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
        var horaMedidaLocal = new Date(
          horaMedidaMiliSeg1970
        ).toLocaleTimeString("es-ES");
        var fechaMedidaLocal = new Date(
          horaMedidaMiliSeg1970
        ).toLocaleDateString("es-ES");
        var stringDatos =
          "<p>Número de elementos del XML: " + totalNodos + "</p>";
        var aux = '"http://openweathermap.org/img/wn/' + icon;
        stringDatos = "<img name=meteoimage src= " + aux  + '@2x.png"' + "/>";
        stringDatos += "<p>Ciudad: " + ciudad + "</p>";
        stringDatos += "<p>Longitud: " + longitud + " grados</p>";
        stringDatos += "<p>Latitud: " + latitud + " grados</p>";
        stringDatos += "<p>País: " + pais + "</p>";
        stringDatos += "<p>Amanece a las: " + amanecerLocal + "</p>";
        stringDatos += "<p>Oscurece a las: " + oscurecerLocal + "</p>";
        stringDatos +=
          "<p>Temperatura: " + temperatura + " grados Celsius</p>";
        stringDatos +=
          "<p>Temperatura mínima: " + temperaturaMin + " grados Celsius</p>";
        stringDatos +=
          "<p>Temperatura máxima: " + temperaturaMax + " grados Celsius</p>";
        stringDatos +=
          "<p>Temperatura (unidades): " + temperaturaUnit + "</p>";
        stringDatos += "<p>Humedad: " + humedad + " " + humedadUnit + "</p>";
        stringDatos += "<p>Presión: " + presion + " " + presionUnit + "</p>";
        stringDatos +=
          "<p>Velocidad del viento: " +
          velocidadViento +
          " metros/segundo</p>";
        stringDatos += "<p>Nombre del viento: " + nombreViento + "</p>";
        stringDatos +=
          "<p>Dirección del viento: " + direccionViento + " grados</p>";
        stringDatos += "<p>Código del viento: " + codigoViento + "</p>";
        stringDatos +=
          "<p>Nombre del viento: " + nombreDireccionViento + "</p>";
        stringDatos += "<p>Nubosidad: " + nubosidad + "</p>";
        stringDatos += "<p>Nombre nubosidad: " + nombreNubosidad + "</p>";
        stringDatos += "<p>Visibilidad: " + visibilidad + " metros</p>";
        stringDatos +=
          "<p>Precipitación valor: " + precipitacionValue + "</p>";
        stringDatos += "<p>Precipitación modo: " + precipitacionMode + "</p>";
        stringDatos += "<p>Descripción: " + descripcion + "</p>";
        stringDatos += "<p>Hora de la medida: " + horaMedidaLocal + "</p>";
        stringDatos += "<p>Fecha de la medida: " + fechaMedidaLocal + "</p>";
        $('p').eq(2).html(stringDatos);
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

  iniciar() {
    this.cargarDatos();
    //setInterval(() => this.cargarDatos(), 15000);
  }
}

var meteoMorcin = new Meteo();
meteoMorcin.iniciar();
