class Ej7 {
  show() {
    $("*").each(function () {
      for (var i = 0; i < $(this).parents().length; i += 1) {
        if ($(this)[i] != undefined) {
          $("p").append("<section>------------------------</section>");
          $("p").append("<section>Padre: " + $(this).parents()[i] + "</section>");
          $("p").append("<section>Hijo: " + $(this)[i] + "</section>");
          $("p").append("<section>------------------------</section>");
        }
      }
    });
  }
}

ej7 = new Ej7();
