const repositorio = require('../repositorios/region.repositorio')

exports.listar = (solicitud, respuesta) => {
    repositorio.listar(solicitud.params.id, (datos, error) => {
        if (error) {
            return respuesta.status(500).send(
                {
                    mensaje: "Error consultando la lista de regiones",
                    error: error
                }
            );
        }
        return respuesta.status(200).send(datos);

    });
}