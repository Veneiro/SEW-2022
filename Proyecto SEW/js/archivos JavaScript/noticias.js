"use strict";
class Noticias {
  constructor() {
    this.apikey = "94e6d98833514e95bcaba5a45dd357f4";
    this.search = "asturias";
    this.url =
      "https://newsapi.org/v2/everything?q=" 
      + this.search 
      + "&from=2023-04-29&sortBy=publishedAt&apiKey=" 
      + this.apikey;
    this.correcto =
      "¡Todo correcto!";
  }
  cargarDatos() {
    $.ajax({
      dataType: "json",
      url: this.url,
      method: "GET",
      success: function (datos) {
        console.log(datos);
        $("h5").text(JSON.stringify(datos));
        var articles = datos.articles;
        var stringDatos = "";
        
        for(var i = 0; i < articles.length; i++){
            stringDatos += "<section><p>" + articles[i].source.name;
            stringDatos += " - " + articles[i].author + "</p>";
            stringDatos += "<h3>" + articles[i].title + "</h3>";
            stringDatos += "<p>" + articles[i].description + "</p></section>";
        }
        $('[name = noticias]').html(stringDatos);
      },
      error: function () {
        $("h3").html(
          "¡Tenemos problemas!"
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

var noticiasMorcin = new Noticias();
noticiasMorcin.iniciar();
