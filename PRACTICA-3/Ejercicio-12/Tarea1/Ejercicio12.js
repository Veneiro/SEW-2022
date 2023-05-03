"use strict";
class Loader {
  constructor(){
    this.text = /text.*/;
    this.json = /application.json/;
    this.xml = /application.xml/;
  }
  load(files){
    this.archive = files[0];
    let type = this.archive.type;
    if(type.match(this.text) || type.match(this.json) || type.match(this.xml)){
      let reader = new FileReader();
      reader.onload = event => $('p').text(reader.result);
      reader.readAsText(this.archive);
    } else {
      $('p').text('El archivo seleccionado no es de un tipo válido')
    }
  }
}

var loader = new Loader();
