class LastModified {
  constructor() {}

  init(){
    this.showLastModified()
  }
  showLastModified() {
    const fechaHora = document.lastModified;
    $("p:last-child").html("Modificado por última vez: " + fechaHora);
  }
}

const lastModified = new LastModified();
lastModified.init();
