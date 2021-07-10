<?php
date_default_timezone_set("Europe/Madrid");
$fecha = new DateTime();

$fuentesJavascript = array(
    /*
	"js/audio.js",
	"js/EstadoPantallaTitulo.js",
	"js/Localizacion.js",
	"js/Tile.js",
	"js/CapaMapaTiles.js",
	"js/ajax.js",
	"js/Punto.js",
	"js/controlesTeclado.js",
	"js/teclado.js",
    */
	
	"js/debug.js",
	"js/constantes.js",
    "js/dimensiones.js",
	"js/tiposCuadro.js",
	"js/cuadro.js",
    "js/mapa.js",
	"js/barraEstado.js",
	"js/inicio.js",
	"js/popup.js",
	"js/catalogoInfo.js",
	"js/gestorPopup.js"	
);

foreach($fuentesJavascript as $fuente) {
	echo '<script src="' . $fuente . '?' . $fecha -> getTimestamp() . '"></script>';
	echo nl2br("\n");
}