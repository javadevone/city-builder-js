var catalogoInfo = {
    obtenerAyuda: function(tipo) {
        let texto = "";
        if (tipo == tiposCuadro.CAMPO) {
            texto = "Campo vacío donde puedes edificar cualquier cosa.";
        }

        if (tipo == tiposCuadro.MAZMORRA) {
            texto = "Mazmorra subterránea sobre la cual puedes construir tu torre de la mazmorra";
        }
        return texto;
    }
};