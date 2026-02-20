const repositorio=require('../repositorios/pais.repositorio')

exports.listar=(solicitud, respuesta)=>{
    repositorio.listar((datos, error)=>{
        if(error){
            return respuesta.status(500).send(
                {
                    mensaje: "Error consultando la lista de paises",
                    error: error
                }
            );
        }
        return respuesta.status(200).send(datos);

    });
}