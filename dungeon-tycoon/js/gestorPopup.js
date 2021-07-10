function elegido(e) {
    console.log(e);
    if(popup.visible) {
        document.getElementById(popup.idSeleccionado).style.outline = "none";
        popup.idSeleccionado = "";
        popup.ocultar();
    } else {
        popup.idSeleccionado = e.target.id;
        let tipo = popup.idSeleccionado.split("x")[0];
        popup.mostrar(e.srcElement.offsetLeft, e.srcElement.offsetTop, 100, catalogoInfo.obtenerAyuda(tipo));
        document.getElementById(popup.idSeleccionado).style.outline = "3px solid white";
        document.getElementById(popup.idSeleccionado).style.outlineOffset = "-3px";
    }
};
