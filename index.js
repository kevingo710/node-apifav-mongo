'use strict'
//importa fichero app.js
var app = require('./app');//configuracion

var port=process.env.PORT || 3680;

app.listen(port, function(){
  //comilla invertar alt+96
  //sirve para enviar parametros
  console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
});
