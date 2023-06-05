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
    let html = "<table>";
    datos.forEach((e) => {
      e.prediccion.dia.forEach((dia) => {
        html += "<tr>";
        html += `<td colspan="2">${dia.fecha}</td>`;
        html += "</tr>";
        html += "<tr>";
        
        html += "</tr>";
        if ((dia.temperatura.dato.length == 0)) {
          html += "<tr>";
          html += "<th>" + "Media del día" + "</th>";
          html +=
            "<td> Máxima: " +
            dia.temperatura.maxima +
            "°C Mínima: " +
            dia.temperatura.minima +
            "°C</td>";
          html += "</tr>";
        } else {
          dia.temperatura.dato.forEach((dato) => {
            html += "<tr>";
            html += "<th>Hora</th>";
            html += "<td>" + dato.hora + ":00</td>";
            html += "<th>Temperatura</th>";
            html += "<td>" + dato.value + "°C</td>";
            html += "</tr>";
          });
        }
        html += "<tr><th>Precipitación</th>";
          dia.probPrecipitacion.forEach((prob) => {
            if(prob.periodo == undefined){
              html +=
              "<td>" + prob.value + "%</td>";
            } else{
              html +=
              "<td>" + prob.value + "% - Horas: " + prob.periodo + "</td>";
            }
          });
          html += "</tr>";
          html += "<tr><th>Estado del cielo</th>";
          dia.estadoCielo.forEach((cielo) => {
            if(cielo.periodo == undefined){
              html +=
              "<td>" +
              cielo.value +
              " - " +
              cielo.descripcion +
              "</td>";
            } else{
              html +=
              "<td>" +
              cielo.value +
              "% - Horas: " +
              cielo.periodo +
              " - " +
              cielo.descripcion +
              "</td>";
            }
          });
          html += "</tr>";
      });
    });
    html += "</table>";
    $("p[name='meteo']").html(html);
  }

  iniciar() {
    this.cargarDatos();
    //setInterval(() => this.cargarDatos(), 15000);
  }
}

var meteoMorcin = new Meteo();
meteoMorcin.iniciar();
