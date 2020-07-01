'use strict'


var mongoose = require('mongoose');

//importa fichero app.js
var app = require('./app');//configuracion

var port=process.env.PORT || 3678;

//conexion a bdd con una funcion
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:37017/prueba20',
{useNewUrlParser:true, useUnifiedTopology: true }  
//ptions:{promiseLibrary:mongoose.Promise}}
, (err, res)=>{
	if(err){
		throw err;
	}else{
		console.log('conexion mongo ok');
		app.listen(port, function(){

  console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
});

}
});




