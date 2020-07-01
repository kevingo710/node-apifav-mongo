'use strict' //para nuevas funcionalidad de js


var express=require('express');
var FavoritoController = require('../controllers/favorito');
//definimos rutas desde app.js

var api = express.Router();

//  en vez de ser una function(req,res) call back
// vamos a llamar a un controller
api.get('/prueba/:nombre?', FavoritoController.prueba);
api.get('/favorito/:id?', FavoritoController.getFavorito);
api.get('/favoritostodos/',FavoritoController.getFavoritosTodos);
api.post('/favorito',FavoritoController.saveFavorito);
api.put('/favorito/:id',FavoritoController.updateFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);


//exportar mi api
module.exports = api;
