'use strict'

//soy un comentario (cuento como codigo)
/* soy otro comentario, sirve vpar varias lineas*/
 
/* VALORES : TODOS LOS VALORRES SON CONVERTIDOS A BITS 
-> cada valor (dato) tiene un tipo  que determina el rol 
    que juega un valr en nuestro programa
-<JS tiene 6 tipos de datos basico:
    NUMEROS, CADENAS, BOOLEANOS, FUNCIONES, E INDEFINIDOS */
 


//VARIABLES:
/* Una variable es un contenedor de informacion.
Almacenan valores que pueder utulizadoos posteriormente. 
El valor de una  variable puede cambiar (variar)
durante la ejucuacion del programa */

//var permite que en la sentencia se defina una variable 

//Tipo de datos 
// numeros, numbres, enteros, flotantes


var pais = "Colombia";
var contiente = "Suramerica";
var antiguedad = "2021"
var pais_y_contiente = pais+' '+contiente;

pais = "Mexico";
contiente = "Latinamerica";

console.log(pais, contiente, antiguedad);
alert(pais_y_contiente);
 

var numeros = 358 + 5569;
console.log("sumar 358 + 5569 = " + numeros);

//cadenas de  texto (string): van entre "" o ''

var farzin = "777"; 
console.log("farzin: " + farzin );
   
var string_numero1 = '20';
var string_numero2 = '22';
console.log("año : " + string_numero1 + string_numero2);

/*BOOLEANOS (bool): Solo pueden contenr uno de dos valores 
verdadero o false (true o false) (1 0)*/

var bloofalse = false;
var blootrue = true;
console.log("valor de tipo Booleando: " + bloofalse);
console.log("valor de tipo Booleando: " + blootrue);