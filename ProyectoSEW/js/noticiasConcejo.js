class NewscatcherAPI {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.apiUrl = "https://api.newscatcherapi.com/v2/search";
    }
  
    async getNewsByKeywords(keywords, language = "es") {
      const params = {
        q: keywords,
        lang: language,
      };
  
      const url = new URL(this.apiUrl);
      url.search = new URLSearchParams(params).toString();
  
      const requestOptions = {
        headers: {
          "x-api-key": this.apiKey,
        },
      };
  
      try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
  
        if (response.ok) {
          return data.articles;
        } else {
          throw new Error(`Error al hacer la solicitud: ${data.message}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }
  
  // Crea una instancia de la clase NewscatcherAPI
  //IdFG208B66QyTNEOBEw7kb2fYy1Z12LBB4orS6VZ2Tk
  const apiKey = "";
  const newscatcherApi = new NewscatcherAPI(apiKey);
  
  // Realiza la solicitud de noticias utilizando la instancia
  newscatcherApi
  .getNewsByKeywords("Asturias")
  .then((articles) => {
    const noticiasElement = $('p').eq(28);
    let noticiasHTML = "";

    for (const article of articles) {
      const { title, author, summary, link } = article;

      // Crea el elemento HTML para la noticia
      const noticiaHTML = `
        <section>
          <h3>${title}</h3>
          <p>Fuente: ${author}</p>
          <p>${summary}</p>
          <a href="${link}" target="_blank">Leer más</a>
        </section>
      `;

      // Agrega la noticia al string de noticias
      noticiasHTML += noticiaHTML + "<br>";
    }

    // Inserta el string de noticias en el elemento "noticias"
    noticiasElement.html(noticiasHTML);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  