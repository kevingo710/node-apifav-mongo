'use strict'
//body-parser
var express=require('express');
var bodyParser= require('body-parser');

var app=express();

var api = require('./routes/favorito');//carga todas las rutas


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//devuelve como objeto de js utilizable
//toda la ruta comienza con api
app.use('/api',api); //carga todas las funciones y rutas




//para poder importar cada fichero es un modulo
module.exports = app;
