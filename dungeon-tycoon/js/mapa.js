var mapa = {
    cuadrosHorizontales: 25,
    cuadrosVerticales: 10,
    anchoCuadro: 64,
    altoCuadro: 64,
    anchoMapa: null,
    altoMapa: null,
    id: "mapa",
    cuadros: new Array(),
    cuadros2: new Array(),
    iniciar: function() {
        mapa.anchoMapa = mapa.cuadrosHorizontales * mapa.anchoCuadro,
        mapa.altoMapa = mapa.cuadrosVerticales * mapa.altoCuadro,

        document.getElementsByTagName("body")[0].innerHTML += "<div id='"+ mapa.id +"'></div>";

        for(let y = 0; y < mapa.cuadrosVerticales; y++) {
            for(let x = 0; x < mapa.cuadrosHorizontales; x++) {
                let xPixeles = x * mapa.anchoCuadro;
                let yPixeles = y * mapa.altoCuadro;
                let tipo = tiposCuadro.CAMPO;
                mapa.generarCuadro(xPixeles, yPixeles, tipo);

                if(x == 12 && y == 4) {
                    mapa.generarMazmorra(xPixeles, yPixeles);
                }
            }
        }
    },
    generarCuadro: function(x, y, tipo) {
        debug.log("generando cuadro: X: " + x + ", Y: " + y + " tipo:  " + tipo);
        let cuadro = new Cuadro(x, y, mapa.anchoCuadro, mapa.altoCuadro, tipo);
        mapa.cuadros.push(cuadro);
        document.getElementById(mapa.id).innerHTML += cuadro.html;
        cuadro.aplicarEstilo();
        cuadro.aplicarSprite(constantes.rutaSprites + mapa.seleccionarSpriteAlAzar(constantes.spritesTerreno));
    },
    generarMazmorra: function(x, y) {
        debug.log("generando mazmorra: X: " + x + ", Y: " + y);
        let cuadro = new Cuadro(x, y, mapa.anchoCuadro, mapa.altoCuadro, tiposCuadro.MAZMORRA);
        mapa.cuadros2.push(cuadro);
        document.getElementById(mapa.id).innerHTML += cuadro.html;
        cuadro.aplicarEstilo();
        cuadro.aplicarCapaZ(10);
        cuadro.aplicarSprite(constantes.spriteMazmorra);
    },
    seleccionarSpriteAlAzar: function(listaSprites) {
        return listaSprites[Math.floor(Math.random() * listaSprites.length)];
    },
    aplicarEventoClick: function() {
        for(let c = 0; c < mapa.cuadros.length; c++) {
            document.getElementById(mapa.cuadros[c].id).addEventListener("click", elegido);
        }

        for(let c = 0; c < mapa.cuadros2.length; c++) {
            document.getElementById(mapa.cuadros2[c].id).addEventListener("click", elegido);
        }
    }
};