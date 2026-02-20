const bd = require('./bd');


const PaisRepositorio = () => {

};

PaisRepositorio.listar = async (respuesta) => {
    const basedatos = bd.obtenerBD();

    try {
        resultado = await basedatos.collection('paises')
            .find()
            .project({
                id: 1,
                nombre: 1,
                continente: 1,
                codigoAlfa2: 1,
                codigoAlfa3: 1
            })
            .toArray();

        return respuesta(resultado, null);
    } catch (error) {
        console.error('Error al listar los regiones:', error);
        return respuesta(null, error);
    }
};


module.exports = PaisRepositorio;