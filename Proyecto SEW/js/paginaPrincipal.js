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
  
  $(document).ready(() => {
    const carousel = new Carousel();
    const lastModified = new LastModified();
  });
  