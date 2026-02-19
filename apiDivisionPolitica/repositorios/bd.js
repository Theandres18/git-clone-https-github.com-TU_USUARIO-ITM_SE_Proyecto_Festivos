const { MongoClient } = require('mongodb');

const configuracion = require('../configuracion/bd.config');

const cadenaConexion = `mongodb://${configuracion.SERVIDOR}:${configuracion.PUERTO}`;

const cliente = new MongoClient(cadenaConexion);

let basedatos;

module.exports = {
    conectar: async () => {
        try {
            await cliente.connect();
            basedatos = cliente.db(configuracion.BASEDATOS);
            return basedatos;
        } catch (error) {
            console.log(error);
        }
    },
    desconectar: async () => {
        await client.close();
    },
    obtenerBD: () => basedatos

}