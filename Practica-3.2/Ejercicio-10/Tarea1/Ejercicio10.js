"use strict";
class Meteo {
    constructor(){
        this.url = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";
    }

    cargarDatosXML(){
      $.ajax({
        dataType: "xml",
        url: this.url,
        method: 'GET',
        success: function(datos){
          $("h5").text(new XMLSerializer().serializeToString(datos));
          $("Fecha", datos).each((i, e) => {
            $("p").append($(e).text() + '\n');
          });
          $("Precio_x0020_Gasolina_x0020_95_x0020_E10", datos).each((i, e) => {
            $("p").append($(e).text() + ' ');
          });      
        },
        error:function(){
            $("p").html("No se puedo encontrar el XML");
        }
    });
    }
}

var meteo = new Meteo();