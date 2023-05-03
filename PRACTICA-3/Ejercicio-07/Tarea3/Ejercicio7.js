class Ej7{
    hideText(){
        $("p").hide();
    }
    addButton(){
        $("body").append('<button onClick="ej7.hideText()">Hide Text</button>');
    }
}

ej7 = new Ej7();