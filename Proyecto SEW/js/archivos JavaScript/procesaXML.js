class ProcesaXML {

    constructor() {
        $.get('./xml/rutas.xml', this.convierteHTML.bind(this));
    }

    convierteHTML(xml) {
        let html = '';
        $('ruta', xml).each((i, ruta) => {
            const nombre = $('nombre', ruta).text();
            const tipo = $('tipo', ruta).text();
            const transporte = $('transporte', ruta).text();
            const agencia = $('agencia', ruta).text();
            const descripcion = $('descripcion', ruta).text();
            const destinadoA = $('destinadoA', ruta).text();

            html += '<h1>' + nombre + '</h1>';
            html += '<p>' + '<t3>Tipo:</t3><br>';
            html += tipo + '<br>';
            html += '<t3>Tipo:</t3><br>';
            html += transporte + '<br>';
            html += '<t3>Agencia:</t3><br>';
            html += agencia + '<br>';
            html += '<t3>Descripción:</t3><br>';
            html += descripcion + '<br>';
            html += '<t3>Destinado para:</t3><br>';
            html += destinadoA + '<p>';
        });
        
        $('article').html(html);
    }
}

procesa = new ProcesaXML();