class ProcesaXML {
  constructor() {
    $.get("./xml/rutas.xml", this.convierteHTML.bind(this));
    $.get("./xml/rutas.xml", this.convierteKML.bind(this));
    $.get("./xml/rutas.xml", this.convierteSVG.bind(this));
  }

  convierteHTML(xml) {
    let html = "";
    $("ruta", xml).each((i, ruta) => {
      const nombre = $("nombre", ruta).text();
      const tipo = $("tipo", ruta).text();
      const transporte = $("transporte", ruta).text();
      const duracion = $("duracion", ruta).text();
      const agencia = $("agencia", ruta).text();
      const descripcion = $("descripcion", ruta).text();
      const destinadoA = $("destinadoA", ruta).text();

      html += "<h1>" + nombre + "</h1>";
      html += "<p><h3>Tipo:</h3><br>";
      html += tipo + "<br>";
      html += "<h3>Transporte:</h3><br>";
      html += transporte + "<br>";
      html += "<h3>Duración:</h3><br>";
      html += duracion + "<br>";
      html += "<h3>Agencia:</h3><br>";
      html += agencia + "<br>";
      html += "<h3>Descripción:</h3><br>";
      html += descripcion + "<br>";
      html += "<h3>Destinado para:</h3><br>";
      html += destinadoA + "<br>";

      const inicioFecha = $("inicio fecha", ruta).text();
      const inicioHora = $("inicio hora", ruta).text();
      const inicioLugar = $("inicio lugar", ruta).text();
      const inicioDireccion = $("inicio direccion", ruta).text();
      const inicioCoordenadas = {
        latitud: $("inicio coordenadas", ruta).attr("lat"),
        longitud: $("inicio coordenadas", ruta).attr("lon"),
        altitud: $("inicio coordenadas", ruta).attr("alt"),
      };

      html += "<h3>Fecha de inicio:</h3>";
      html += inicioFecha + "<br>";
      html += "<h3>Hora de inicio:</h3><br>";
      html += inicioHora + "<br>";
      html += "<h3>Lugar de inicio:</h3><br>";
      html += inicioLugar + "<br>";
      html += "<h3>Dirección de inicio:</h3><br>";
      html += inicioDireccion + "<br>";
      html += "<h3>Coordenadas de inicio:</h3><br>";
      html += "Latitud: " + inicioCoordenadas.latitud + "<br>";
      html += "Longitud: " + inicioCoordenadas.longitud + "<br>";
      html += "Altitud: " + inicioCoordenadas.altitud + "<br>";

      const referencias = $("referencias referencia", ruta);
      html += "<h3>Referencias:</h3><br>";
      referencias.each((i, referencia) => {
        html += i + 1 + ". " + $(referencia).text() + "<br>";
      });

      const puntuacion = $("puntuacion", ruta).text();
      html += "<h3>Puntuación:</h3><br>";
      html += puntuacion + "<br>";

      const hitos = $("hitos hito", ruta);
      html += "<h3>Hitos:</h3><br>";
      hitos.each((i, hito) => {
        const nombreHito = $("nombreHito", hito).text();
        const descripcionHito = $("descripcionHito", hito).text();
        const distanciaAnterior = $(hito).find("distanciaAnterior").attr("metros");
        const coordenadasHito = {
          latitud: $("coordenadas", hito).attr("lat"),
          longitud: $("coordenadas", hito).attr("lon"),
          altitud: $("coordenadas", hito).attr("alt"),
        };

        html += "<h2>" + nombreHito + "</h2>";
        html += "<p>" + descripcionHito + "<br>";
        html += "<p>Distancia desde el anterior hito/punto de interés: " + distanciaAnterior + " metros</p>";
        html += "Coordenadas:<br>";
        html += "Latitud: " + coordenadasHito.latitud + "<br>";
        html += "Longitud: " + coordenadasHito.longitud + "<br>";
        html += "Altitud: " + coordenadasHito.altitud + "<br></p>";

        const galeriaFotos = $("galeriaFotos foto", hito);
        html += "Fotos:<br>";
        galeriaFotos.each((j, foto) => {
          const urlFoto = $(foto).text();
          html += "<img src='" + urlFoto + "' alt='Foto " + (j + 1) + "'><br>";
        });

        const galeriaVideos = $("galeriaVideos video", hito);
        if (galeriaVideos.length > 0) {
          html += "Videos:<br>";
          galeriaVideos.each((k, video) => {
            const urlVideo = $(video).text();
            html += "<video src='" + urlVideo + "' controls></video><br>";
          });
        }
      });
    });

    $('article').eq(0).html(html);
  }

  convierteKML(xml) {
    let rutaInt = 2;
    $("ruta", xml).each((i, ruta) => {
      const nombre = $("nombre", ruta).text();
      const descripcion = $("descripcion", ruta).text();

      let placemarks = [];
      $("trkpt", ruta).each((i, trkpt) => {
        const lat = parseFloat($(trkpt).attr("lat"));
        const lon = parseFloat($(trkpt).attr("lon"));

        const placemark = {
          name: nombre,
          description: descripcion,
          lat: lat,
          lng: lon,
        };

        placemarks.push(placemark);
      });

      // Generar el KML
      let kml = '<?xml version="1.0" encoding="UTF-8"?>\n';
      kml += '<kml xmlns="http://earth.google.com/kml/2.0">\n';
      kml += "  <Document>\n";

      placemarks.forEach((placemark) => {
        kml += "    <Placemark>\n";
        kml += "      <name>" + placemark.name + "</name>\n";
        kml +=
          "      <description>" + placemark.description + "</description>\n";
        kml += "      <Point>\n";
        kml +=
          "        <coordinates>" +
          placemark.lng +
          "," +
          placemark.lat +
          "</coordinates>\n";
        kml += "      </Point>\n";
        kml += "    </Placemark>\n";
      });

      kml += "  </Document>\n";
      kml += "</kml>";

      // Realizar el parseo del string KML
      const parser = new DOMParser();
      const kmlDocument = parser.parseFromString(kml, "text/xml");

      const article = document.querySelector("article:nth-child("+ rutaInt +")");
      let mapElement = document.createElement("article");
      mapElement.setAttribute("name", "map");
      article.appendChild(mapElement);

      let map = new google.maps.Map(mapElement, {
        center: { lat: placemarks[0].lat, lng: placemarks[0].lng },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
      });

      // Obtener las coordenadas del documento KML parseado
      const coordinates = Array.from(
        kmlDocument.getElementsByTagName("coordinates")
      ).map((coord) => {
        const [lng, lat] = coord.textContent.trim().split(",");
        return { lat: parseFloat(lat), lng: parseFloat(lng) };
      });

      let pathCoordinates = coordinates;

      let polyline = new google.maps.Polyline({
        path: pathCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      polyline.setMap(map);

      let firstMarker = new google.maps.Marker({
        position: { lat: placemarks[0].lat, lng: placemarks[0].lng },
        map: map,
        title: placemarks[0].name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: "green",
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 6,
        },
      });

      let lastMarker = new google.maps.Marker({
        position: {
          lat: placemarks[placemarks.length - 1].lat,
          lng: placemarks[placemarks.length - 1].lng,
        },
        map: map,
        title: placemarks[placemarks.length - 1].name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: "red",
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 6,
        },
      });

      placemarks.forEach((placemark, index) => {
        if (index !== 0 && index !== placemarks.length - 1) {
          let marker = new google.maps.Marker({
            position: { lat: placemark.lat, lng: placemark.lng },
            map: map,
            title: placemark.name,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "yellow",
              fillOpacity: 1,
              strokeWeight: 0,
              scale: 3,
            },
          });

          let infoWindow = new google.maps.InfoWindow({
            content:
              "<h3>" +
              placemark.name +
              "</h3>" +
              "<p>" +
              placemark.description +
              "</p>",
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        }
      });

      rutaInt++;
    });
  }

  convierteSVG(xml) {
    let svg = "";

    $("ruta", xml).each((i, ruta) => {
      let x = 0;
      const nombre = $("nombre", ruta).text();
      let max = 0;
      let min = 9999999;
      let cont = 0;
      let contR = 1;
      svg += "<h1>" + nombre + "</h1>";
      $("trkpt", ruta).each((i, trkpt) => {
        const alt = parseInt($("ele", trkpt).text());
        if (alt > max) {
          max = alt;
        }
        if (alt < min) {
          min = alt;
        }
        cont++;
      });

      const svgHeight = max - min + 50;
      const svgWidth = cont * 10;

      svg += '<article>';
      svg += '<svg>';

      let points = ""; // Variable para almacenar los puntos del perfil altimétrico

      $("trkpt", ruta).each((i, trkpt) => {
        const alt = parseInt($("ele", trkpt).text());
        let colorFill = "blue";
        let colorStroke = "white";
        if (alt === min) {
          colorFill = "red";
          svg +=
            '<circle cx="' +
            x +
            '" cy="' +
            (svgHeight - (alt - min + 5)) +
            '" r="5" fill="red" />';
        }
        if (alt === max) {
          colorFill = "green";
          svg +=
            '<circle cx="' +
            x +
            '" cy="' +
            (svgHeight - (alt - min + 5)) +
            '" r="5" fill="green" />';
        }

        const point = x + "," + (svgHeight - (alt - min + 5));
        points += point + " ";

        x += 10;
      });

      // Dibujar el perfil altimétrico como una línea poligonal
      svg +=
        '<polyline points="' +
        points +
        '" fill="none" stroke="blue" stroke-width="2" />';

      svg += "</svg>";
      svg += "</article>";
    });

    $('article').eq(7).html(svg);
  }
}

procesa = new ProcesaXML();
