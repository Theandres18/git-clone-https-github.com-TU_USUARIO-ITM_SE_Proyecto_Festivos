module.exports = (app) => {
    const controlador = require("../controladores/region.controlador");

    app.get("/paises/:id/regiones", controlador.listar)


}