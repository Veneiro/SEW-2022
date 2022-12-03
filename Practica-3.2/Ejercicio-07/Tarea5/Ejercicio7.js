class Ej7{
    removeParagraph(){
        $(document).ready(function(){
            $("*").each(function() {
                for(var i = 0; i<($(this).parents().length); i += 1){
                    var aux = ($(this).parents()[i]).attr('name');
                }
                $("p").html(aux);
            });
        });
    }
}

ej7 = new Ej7();