function Cuadro(x, y, ancho, alto, tipo) {
    this.x = x;
	this.y = y;
	this.ancho = ancho;
	this.alto = alto;
	this.tipo = tipo;
	this.id = tipo + "x" + x + "y" + y;
	this.html = '<div id="' + this.id + '"' + ' class="tile"' + '></div>';
}

Cuadro.prototype.aplicarEstilo = function() {
    if (!document.getElementById(this.id)) {
		throw("El ID " + this.id + " no existe en la hoja");
	}

	document.getElementById(this.id).style.position = "absolute";
	document.getElementById(this.id).style.left = this.x + "px";
	document.getElementById(this.id).style.top = this.y + "px";
	document.getElementById(this.id).style.width = this.ancho + "px";
	document.getElementById(this.id).style.height = this.alto + "px";
}

Cuadro.prototype.aplicarCapaZ = function(z) {
	document.getElementById(this.id).style.zIndex = z;
}

Cuadro.prototype.aplicarSprite = function(ruta) {
	document.getElementById(this.id).style.backgroundImage = "url('" + ruta + "')";
	document.getElementById(this.id).style.backgroundSize = "cover";
	document.getElementById(this.id).style.backgroundPosition = "center";
}