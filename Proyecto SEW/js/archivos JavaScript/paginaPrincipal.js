class Carousel {
    constructor() {
      this.actual = 0;
      this.images = $('[name=carousel] img');
      this.inicializar();
      this.startInterval();
    }
  
    cambiarImagen() {
      let aMostrar = this.actual + 1;
      if (aMostrar >= this.images.length) {
        aMostrar = 0;
      }
      this.images.eq(this.actual).fadeOut(() => {
        this.images.eq(aMostrar).fadeIn();
      });
      this.actual = aMostrar;
    }
  
    inicializar() {
      this.images.hide();
      this.images.eq(this.actual).show();
    }
  
    startInterval() {
      this.interval = setInterval(() => this.cambiarImagen(), 3000);
    }
  
    stopInterval() {
      clearInterval(this.interval);
    }
  }
  
  class LastModified {
    constructor() {
      this.showLastModified();
    }
  
    showLastModified() {
      const fechaHora = document.lastModified;
      $('[name=lastModified]').html('Modificado por última vez: ' + fechaHora);
    }
  }

  class Mapa {
    constructor() {
      this.initializeMap();
    }
  
    initializeMap() {
        const mapElement = document.querySelector('article[name="map"]');
      const mapOptions = {
        center: { lat: 43.2737, lng: -5.8056 },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };
  
      const map = new google.maps.Map(mapElement, mapOptions);
  
      const imageOptions = {
        url: 'https://maps.googleapis.com/maps/api/staticmap?center=43.2737,-5.8056&zoom=14&size=800x600&maptype=satellite&key=AIzaSyCB6chQKcq3mMf5jRlVVV-O-OO0Vkw711k',
        size: new google.maps.Size(800, 600)
      };
  
      const imageOverlay = new google.maps.GroundOverlay(imageOptions.url, map.getBounds(), imageOptions);
      imageOverlay.setMap(map);
    }
  }
  
  $(document).ready(() => {
    const carousel = new Carousel();
    const lastModified = new LastModified();
    const mapa = new Mapa();

    // Llama a la función initializeMap una vez que la API de Google Maps esté cargada
    google.maps.event.addListenerOnce(mapa.map, 'idle', mapa.initializeMap.bind(mapa));
  });
  