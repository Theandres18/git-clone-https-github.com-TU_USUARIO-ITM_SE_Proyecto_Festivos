const bd = require('./bd');


const RegionRepositorio = () => { };

RegionRepositorio.listar = async (idPais, respuesta) => {
    const basedatos = bd.obtenerBD();

    try {
        resultado = await basedatos.collection('paises')
            .aggregate([
                {
                    $match: {
                        id: parseInt(idPais)
                    }
                },
                {
                    $project: {
                        'regiones.nombre': 1,
                        'regiones.area': 1,
                        'regiones.poblacion': 1
                    }
                }
            ])
            .toArray();
        return respuesta(resultado.length > 0 && resultado[0].regiones ? resultado[0].regiones : [], null);
    } catch (error) {
        console.error('Error al listar los regiones:', error);
        return respuesta(null, error);
    }
};


module.exports = RegionRepositorio;