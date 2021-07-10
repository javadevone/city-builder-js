var inicio = {
	iniciadores: [
		dimensiones.iniciar(),
        mapa.iniciar(),
		barraEstado.iniciar()
	],
	iniciarJuego: function() {
		debug.modoDebug = true;
        debug.log("iniciando");
		inicio.encadenarIniciadores(inicio.iniciadores.shift());
	},
	encadenarIniciadores: function(iniciador) {
		if(iniciador) {
			iniciador(() => inicio.encadenarIniciadores(iniciadores.shift()));
		}
	}
};

document.addEventListener('DOMContentLoaded', function() {
	inicio.iniciarJuego();
	mapa.aplicarEventoClick();
}, false);