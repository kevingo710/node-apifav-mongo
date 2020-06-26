//ruta de prueba
'use strict'

//variables
var Favorito = require('../models/favorito');

function prueba(req, res){
	if(req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre  = "sin nombre";
	}

	res.status(200).send(
		{
			//cualquier dato u objeto
			datos: [2, 5 ,4 ,6],
	message: "hola mundo nodejs and express "
	+ nombre});
};

//funtion index(req, res) {
  //  res.status(200).send({"Hello from the Node JS RESTful side!"});
//};
function getFavoritosTodos(req, res){

	Favorito.find({ }).exec ((err, favoritos)=>{
		if(err){
			res.status(500).send({message:'error en find'});
		}else{
			if(!favoritos){
				res.status(404).send({message:'no existen datos'});
			}else{
				res.status(200).send({favoritos});
			}
		}

	});
}



module.exports = {

	prueba,
	getFavoritosTodos

}
