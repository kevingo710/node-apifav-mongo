//configuracion express

'use strict'

//modulo express
var express = require('express');

//body-parser
var bodyParser = require('body-parser');

//llamar al paquete express
var app = express();



//routes
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//carga todas las funciones y rutas
app.use('/api', api);

//convierte al fichero en una clase para exportarlo a cualquier
//modulo
module.exports = app;