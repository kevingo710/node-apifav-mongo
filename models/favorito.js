'use strict'

var mongoose = require('mongoose');

//definir los objetos que permitern trabajar con la bd

var Schema = mongoose.Schema;

//objeto
var FavoritoSchema= Schema({
	title:String,
	description: String,
	url:String
},
{collection: "gimnasio"}
);

//generar el modelo
module.exports = mongoose.model('Favorito', FavoritoSchema)