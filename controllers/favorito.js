//ruta de prueba
'use strict'

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


module.exports = {

	prueba

}
