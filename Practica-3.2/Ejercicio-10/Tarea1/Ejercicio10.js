"use strict";
class Gasolina {
  constructor() {
    this.url =
      " https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroProvincia/33";
  }

  cargarDatosXML() {
    $.ajax({
      dataType: "xml",
      url: this.url,
      method: "GET",
      success: function (datos) {
        $("p").html("");
        $("h5").text(new XMLSerializer().serializeToString(datos));
        var fechas = [];
        var provincias = [];
        var precios = [];
        $("p").append("<h2>A fecha de: </h2>");
        $("Fecha", datos).each((i, e) => {
          $("p").append("<h3>" + $(e).text() + "</h3>");
        });
        $("p").append(
          "<section>-------------------------------------------------------------------------</section>"
        );
        $("Precio_x0020_Gasolina_x0020_95_x0020_E5", datos).each((i, e) => {
          if ($(e).text() != "") {
            $("p").append(
              "<section>" +
                $("Municipio", datos).get(i).innerHTML +
                "</section>"
            );
            $("p").append(
              "<section>" +
                $("Localidad", datos).get(i).innerHTML +
                "</section>"
            );
            $("p").append(
              "<section>" +
                $("Dirección", datos).get(i).innerHTML +
                "</section>"
            );
            $("p").append(
              "<section>" +
                $("Rótulo", datos).get(i).innerHTML +
                "</section>"
            );
            $("p").append(
              "<section>" +
                $("Horario", datos).get(i).innerHTML +
                "</section>"
            );

            $("p").append("<section>" + $(e).text() + " €</section>");
            $("p").append(
              "<section>-------------------------------------------------------------------------</section>"
            );
          }
        });
      },
      error: function () {
        $("p").html("No se puedo encontrar el XML");
      },
    });
  }
}

var gas = new Gasolina();
