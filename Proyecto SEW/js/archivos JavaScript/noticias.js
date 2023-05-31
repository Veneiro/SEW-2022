"use strict";
class Noticias {
  constructor() {
    this.apikey = "94e6d98833514e95bcaba5a45dd357f4";
    this.search = "Principado de Asturias";
    this.url =
      "https://newsapi.org/v2/everything?q=" 
      + this.search 
      + "&sortBy=publishedAt&apiKey=" 
      + this.apikey;
    this.correcto =
      "¡Todo correcto!";
  }
  

  cargarDatos() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const articles = data.articles;
        const noticiasContainer = document.getElementsByName("noticias")[0];

        articles.forEach(article => {
          const section = document.createElement("section");
          const pSource = document.createElement("p");
          const h3Title = document.createElement("h3");
          const pDescription = document.createElement("p");
          const button = document.createElement("button");

          if((article.author) == (null)){
            pSource.textContent = `${article.source.name}`;
          }else{
            pSource.textContent = `${article.source.name} - ${article.author}`;
          }
          h3Title.textContent = article.title;
          pDescription.textContent = article.description;
          button.textContent = "Leer más";

          button.addEventListener("click", () => {
            this.cargarNoticiaCompleta(article);
          });

          section.appendChild(pSource);
          section.appendChild(h3Title);
          section.appendChild(pDescription);
          section.appendChild(button);

          noticiasContainer.appendChild(section);
        });
      })
      .catch(error => {
        console.error("¡Tenemos problemas!", error);
        const h3 = document.createElement("h3");
        h3.textContent = "¡Tenemos problemas!";
        const noticiasContainer = document.getElementsByName("noticias")[0];
        noticiasContainer.appendChild(h3);
      });
  }

  cargarNoticiaCompleta(article) {
    window.location.href = article.url;
  }

  iniciar() {
    this.cargarDatos();
    //setInterval(() => this.cargarDatos(), 15000);
  }
}

var noticiasMorcin = new Noticias();
noticiasMorcin.iniciar();
