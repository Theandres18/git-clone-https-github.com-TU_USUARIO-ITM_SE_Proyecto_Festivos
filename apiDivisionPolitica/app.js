const express = require('express');
const app = express();
const puerto = 3030

app.listen(puerto, ()=>{
    console.log(`API División Política escuchando por el puerto ${puerto}`);
});