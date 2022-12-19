'use strict'

// Prueba con let y var
var numero = 40;
console.log(numero); // valor 40 

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// prueba con let
var texto = "Curso JS victorroblesweb.es";
console.log(texto); //valor js

if(true){
    let texto = "Curso laravel 5 victorroblesweb.es";
    console.log(texto);// valor leveral 5
}

console.log(texto);//valor js


var texto = 'hola como estas';
console.log(texto);
if(true){
    let  texto = 'farzin koskesh';
    console.log(texto);
}