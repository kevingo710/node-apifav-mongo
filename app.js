'use strict'
//body-parser
var express=require('express');
var bodyParser= require('body-parser');

var app=express();

var api = require('./routes/favorito');//carga todas las rutas

app.use((req, res, next) => {

    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    res.header('Access-Control-Allow-Origin', '*');
    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//devuelve como objeto de js utilizable
//toda la ruta comienza con api
app.use('/api',api); //carga todas las funciones y rutas


//para poder importar cada fichero es un modulo
module.exports = app;
