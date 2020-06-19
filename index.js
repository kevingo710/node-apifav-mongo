'use strict' //interpretar los navegadores los comandos

//importa archivo en forma de clase
var app = require('./app') ;//configuracion express

var port= process.env.PORT || 3678;



//backend
app.listen(3678, function(){
	console.log(`api rest ok http://localhost:${port}`);
});