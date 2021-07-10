var popup = {
    visible: false,
    id: "popup",
    idSeleccionado: "",
    mostrar: function(x, y, ancho, texto) {
        if(popup.visible || texto === "") {
            return;
        }

        let margenIzquierdo = 5;
        let margenDerecho = 24;
        let margenVertical = 8;

        let centroX = Math.floor(dimensiones.ancho / 2);

        x = Math.floor(x);
        y = Math.floor(y);

        if (x <= centroX) {
            x = x + mapa.anchoCuadro + margenIzquierdo;
        } else {   
            x = x - ancho - mapa.anchoCuadro + margenDerecho;
        }

        y -= margenVertical;

        document.getElementById(popup.id).innerHTML = texto;
        document.getElementById(popup.id).style.display = "block";
        document.getElementById(popup.id).style.position = "absolute";
        document.getElementById(popup.id).style.transform = 'translate3d('+ x + 'px, ' + y + 'px, 0' + ')';
        document.getElementById(popup.id).style.width = ancho + "px";
        document.getElementById(popup.id).style.zIndex = "90";
        document.getElementById(popup.id).style.backgroundColor = "#303030";
        document.getElementById(popup.id).style.color = "white";
        document.getElementById(popup.id).style.borderTop = "3px solid white";
        document.getElementById(popup.id).style.padding = "0.5em";
        document.getElementById(popup.id).style.textAlign = "center";

        popup.visible = true;
    },
    ocultar: function() {
        if(!popup.visible) {
            return;
        }

        document.getElementById(popup.id).style.display = "none";
        document.getElementById(popup.id).innerHTML = "";

        popup.visible = false;
    }
};