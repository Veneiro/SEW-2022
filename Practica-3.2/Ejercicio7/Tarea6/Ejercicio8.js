"use strict";
class Sumar {
  constructor() {}

  sum() {
    var res = 0;
    $("table tr td").each(function () {
        var n = Number($(this).text());
        if(Number.isFinite(n)){
            res += n;
        }
    });
    this.show(res);
  }

  show(res) {
    $("p").html("Resultado: " + res);
  }
}
var sumar = new Sumar();
