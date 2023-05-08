class ProcesaXML {

    constructor() {
        $.get('./xml/rutas.xml', this.convierteHTML.bind(this));
        //$.get('./xml/rutas.xml', this.convierteKML.bind(this));
        $.get('./xml/rutas.xml', this.convierteSVG.bind(this));
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
        
        $('article[name=html]').html(html);
    }

    convierteKML(xml){
        let kml = '';
        kml += '<p>'
        kml += '<xmp>'
        kml += '<?xml version="1.0" encoding="UTF-8"?>';
        kml += '<kml xmlns="http://earth.google.com/kml/2.0">'
        kml += '<Document>'
        $('ruta', xml).each((i, ruta) => {
            const nombre = $('nombre', ruta).text();
            const descripcion = $('descripcion', ruta).text();
            $('trkpt', ruta).each((i, trkpt) => {
                const lat = $(trkpt).attr('lat');
                const lon = $(trkpt).attr('lon');
                
                kml += '<Placemark>'
                kml += '<name>' + nombre + '</name>'
                kml += '<descripcion>' + descripcion + '</descripcion>'
                kml += '<Point><coordinates>' + lat + ',' + lon + '<coordinates></Point>';
                kml += '</Placemark>'
            });
        });
        kml += '</Document>'
        kml += '</kml>'
        kml += '</xmp>'
        kml += '</p>'
        $('article[name=kml]').html(kml);
    }

    convierteSVG(xml){

        let svg = '';
        
        $('ruta', xml).each((i, ruta) => {
            let x = 0;
            const nombre = $('nombre', ruta).text();
            let max = 0;
            let min = 9999999;
            let cont = 0;
            let contR = 1;
            svg += '<h1>' + nombre + '</h1>';
            $('trkpt', ruta).each((i, trkpt) => {
                const alt = parseInt($('ele', trkpt).text());
                if(alt > max){
                    max = alt;
                }
                if(alt < min){
                    min = alt;
                }
                cont++;
            });
            svg += '<article name=route>';
            svg += '<svg height="' + (max-min + 5) + '" width="' + (10*cont) + '">'
            $('trkpt', ruta).each((i, trkpt) => {
                console.log(max + ' ' + min )
                const alt = parseInt($('ele', trkpt).text());
                let colorFill = 'blue';
                let colorStroke = 'white'
                if (alt == min) {
                    colorFill = 'red';
                }

                if (alt == max) {
                    colorFill = 'green';
                }

                svg += '<rect x="' +x+ '" y="'+ ((max-min)-(alt-min + 5)) +'" width="10" height="' + (alt-min + 5) + '" stroke="' + colorStroke + '" stroke-width="1" fill="' + colorFill + '"/>';
                x+=10;
            });
            svg += '</svg>'
            svg += '</article>'
        });
        
        $('article[name="svg"]').html(svg);
    }
}

procesa = new ProcesaXML();