"use strict";
class Meteo {
  constructor() {
    this.apikey =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2ZW5laXJveXRAZ21haWwuY29tIiwianRpIjoiMmM4NTg2OTAtYTc4ZS00NjA3LWIzMjMtMWExYjNlMTQyMmRmIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2ODU5NjU2MTcsInVzZXJJZCI6IjJjODU4NjkwLWE3OGUtNDYwNy1iMzIzLTFhMWIzZTE0MjJkZiIsInJvbGUiOiIifQ.bQY3FfaaKsdHrU8pHQibnMNAeqw1F2rCa6uV3ByyUUQ";
    this.url =
      "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/33038/?api_key=" +
      this.apikey;
    this.correcto = "¡Todo correcto!";
  }
  cargarDatos() {
    const self = this; // Guardamos una referencia a la instancia actual
    $.ajax({
      url: this.url,
      dataType: "json",
      success: function (response) {
        var datosUrl = response.datos;
        // Realizar una nueva petición a la URL proporcionada en la respuesta anterior
        $.ajax({
          url: datosUrl,
          dataType: "json",
          success: function (datosResponse) {
            // Procesar los datos de respuesta y utilizarlos en tu página web
            console.log(datosResponse);
            self.mostrarDatos(datosResponse); // Llamamos al método para mostrar los datos
          },
          error: function () {
            console.error("Error al obtener los datos meteorológicos.");
          },
        });
      },
      error: function () {
        console.error("Error al obtener la URL de los datos meteorológicos.");
      },
    });
  }

  mostrarDatos(datos) {
    let html = "";
    datos.forEach((e) => {
      e.prediccion.dia.forEach((dia) => {
        html += `<h2>${dia.fecha}</h2>`;
        if ((dia.temperatura.dato.length == 0)) {
          html += "<h3>" + "Media del día" + "</h3>";
          html +=
            "<p> Máxima: " +
            dia.temperatura.maxima +
            "°C Mínima: " +
            dia.temperatura.minima +
            "°C</p>";
        } else {
          html += "<h3>Por Horas</h3>"
          dia.temperatura.dato.forEach((dato) => {
            html += "<p>";
            html += "<p> Hora: " + dato.hora + ":00 - Temperatura: " + dato.value + "°C</p>";
            html += "</p>";
          });
        }
        html += "<h3>Precipitación</h3>";
          dia.probPrecipitacion.forEach((prob) => {
            if(prob.periodo == undefined){
              html +=
              "<p>" + prob.value + "%</p>";
            } else{
              html +=
              "<p>" + prob.value + "% - Horas: " + prob.periodo + "</p>";
            }
          });
          html += "<h3>Estado del cielo</h3>";
          dia.estadoCielo.forEach((cielo) => {
            if(cielo.periodo == undefined){
              html +=
              "<p>" +
              cielo.value +
              " - " +
              cielo.descripcion +
              "</p>";
            } else{
              html +=
              "<p>" +
              cielo.value +
              "% - Horas: " +
              cielo.periodo +
              " - " +
              cielo.descripcion +
              "</p>";
            }
          });
      });
    });
    $('article').eq(0).html(html);
  }

  iniciar() {
    this.cargarDatos();
    //setInterval(() => this.cargarDatos(), 15000);
  }
}

var meteoMorcin = new Meteo();
meteoMorcin.iniciar();
