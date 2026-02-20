const express = require('express');
const app = express();
const puerto = 3030

const bd= require('./repositorios/bd');
bd.conectar();

//rutas disponibles
require('./rutas/pais.ruta')(app);
require('./rutas/region.ruta')(app);

app.listen(puerto, ()=>{
    console.log(`API División Política escuchando por el puerto ${puerto}`);
});