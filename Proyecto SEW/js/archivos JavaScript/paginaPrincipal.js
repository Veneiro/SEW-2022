let actual = 0;
function cambiarImagen() {
    let aMostrar = actual + 1;
    if ($('[name = carousel] img').length == aMostrar) {
        aMostrar = 0;
    }
    $('[name = carousel] img').eq(actual).fadeOut(() => {
        $('[name = carousel] img').eq(aMostrar).fadeIn();
    });
    actual = aMostrar;
}

function inicializar() {
    $('[name = carousel] img').hide();
    $('[name = carousel] img').eq(actual).show();
}

function showLastModified(){
    // Obtener la fecha y hora de la última actualización del documento en formato de cadena de texto
    var fechaHora = document.lastModified;

    $('[name = lastModified]').html('Modificado por última vez: ' + fechaHora);
}

$(inicializar);
$(showLastModified);
setInterval(cambiarImagen, 3000); // Llamar a la función cada 5 segundos