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
Favorito.find( {preferencias: {$in: ['Aquagym','Natación','Tennis','Spinning']}} ).exec((err,favoritos)=>{
		if(err){
			res.status(500).send({message: 'error al deveolver los datos'});
		}else {
			if(!favoritos){
			res.status(404).send({message: 'no existen datos'});
			}else{
				res.status(200).send({favoritos});
			}
			
		}

		
	});
}


function getFavoritosIds(req, res){
	Favorito.find({"idCliente":{$gt:100,$lt:150}}).exec((err,favoritos)=>{
			if(err){
				res.status(500).send({message: 'error al deveolver los datos'});
			}else {
				if(!favoritos){
				res.status(404).send({message: 'no existen datos'});
				}else{
					res.status(200).send({favoritos});
				}
				
			}
	
			
		});
	}

function getFavoritosUno(req, res){
	let unoid = Number(req.params.unoid);
	Favorito.find({"idCliente":unoid}).exec((err,favoritos)=>{
			if(err){
				res.status(500).send({message: 'error al deveolver los datos'});
			}else {
				if(!favoritos){
				res.status(404).send({message: 'no existen datos'});
				}else{
					res.status(200).send({favoritos});
				}
				
			}
	
			
		});
	}


// //obtener un dato de la coleccion favorito a traves de un parametro
// function getFavorito(req,res){
// 	var favoritoId = req.params.id; //ddesde http

// 	Favorito.findById (favoritoId, function(err,favorito){
// 		if(err){
// 			res.status(500).send({message:'error al buscar'});
// 		}else{
// 			if(!favorito){
// 				res.status(400).send({message:'no existe dato'});
// 			}else{
// 				res.status(200).send({favorito});
// 			}
// 		}

// 	});

// }
//guardar dato desde el api
function saveFavorito(req,res){
	var favorito = new Favorito();
	var params = req.body; //recogemos datos desde post
	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored)=>{
		if(err){
			res.status(500).send({message:'error al guardar'});
		}else{
			res.status(200).send({favorito:favoritoStored});
		}

	});

}
//actualizar
function updateFavorito(req, res){
	var favoritoId = req.params.id;
	var update = req.body;
	console.log(update);

	Favorito.findByIdAndUpdate(favoritoId,update,(err,favoritoUpdate)=>{
		if(err){
			res.status(500).send({message: 'error al actualizar los datos'});
		}else{
			res.status(200).send({favorito: favoritoUpdate});
		}
		
	});
	
}

//borrar
function deleteFavorito(req,res){
	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, function(err,favorito){
		if(err){
			res.status(500).send({message:'error al eliminar'});
		}
		if(!favorito){
			res.status(404).send({message:'no existe dato'});
		}else{
			favorito.remove(err =>{
				if(err){
					res.status(500).send({message:'error al eliminar'});
				}else{
					res.status(200).send({message:'dato borrado ok'});
				}

			});
		}
	});


}

module.exports = {

	prueba,
	// getFavorito,
	getFavoritosTodos,
	saveFavorito,
	updateFavorito,
	deleteFavorito,
	getFavoritosIds,
	getFavoritosUno


}
