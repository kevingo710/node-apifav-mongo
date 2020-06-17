'use strict' //interpretar los navegadores los comandos

//modulo express
var express = require('express');

//body-parser
var bodyParser = require('body-parser');

//llamar al paquete express
var app = express();
var port= process.env.PORT || 3678;
//cualquier parametro
app.use(bodyParser.urlencoded({extended:false}));
//trabajo con los datos en json
app.use(bodyParser.json());

//ruta de prueba
app.get('/prueba/:nombre?',(req, res)=>{
	if(req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre  = "sin nombre";
	}

	res.status(200).send(
		{
			//cualquier dato u objeto
			datos: [2, 5 ,4 ,6],
	message: "hola mundo nodejs and express "+ nombre});
});

//backend
app.listen(3678, function(){
	console.log(`api rest ok http://localhost:${port}`);
});