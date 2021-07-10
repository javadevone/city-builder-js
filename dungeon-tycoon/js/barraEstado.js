var barraEstado = {
    x: 0,
    y: null,
    ancho: null,
    alto: 64,
    id: "barraEstado",
    iniciar: function() {
        barraEstado.y = mapa.altoMapa;
        barraEstado.ancho = mapa.anchoMapa;
        debug.log("iniciando barra de estado en X:" + barraEstado.x + " Y:" + barraEstado.y + " ANCHO:" + barraEstado.ancho + " ALTO:" + barraEstado.alto);
        document.getElementsByTagName("body")[0].innerHTML += "<div id='"+ barraEstado.id +"'></div>";
        barraEstado.aplicarEstilo();
    },
    aplicarEstilo: function() {
        let colorHexadecimal = "#303030";
        document.getElementById(barraEstado.id).style.backgroundColor = colorHexadecimal;
        
        document.getElementById(barraEstado.id).style.position = "absolute";
        document.getElementById(barraEstado.id).style.left = barraEstado.x + "px";
        document.getElementById(barraEstado.id).style.top = barraEstado.y + "px";
        document.getElementById(barraEstado.id).style.width = barraEstado.ancho + "px";
        document.getElementById(barraEstado.id).style.height = barraEstado.alto + "px";
        document.getElementById(barraEstado.id).style.borderStyle = "none";
    }
};