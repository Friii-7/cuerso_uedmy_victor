'use strict'

/*
1.Pida 6 numeros en la pantalla y los meta en un array
2.Mostrar el array entro (todos sus elemento ) en el cuerpo de la pagina y en la consola
3.Ordenarlo y mostarlo 
4.Invitir su orden y mostarlo
5.Mostrar cuantos elementos tiene el array
6.busqueda de un valor introducido por el uauario , que nos diga si lo encuentra y su indice 
(se valorara el uso de funciones)
*/

function mostarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

//pedir  6 numeros 
var numeros = [];

for(var i = 0;  i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
// mostrar en el cuerpo de la pagina 
document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) =>{
    document.write("<strong>"+numero+"</strong></br>");
});

// mostar array en la consola
console.log(numeros);

// ordenar y mostrar 
numeros.sort(function(a, b){return a-b});
mostarArray(numeros, 'ordenado');

//Invertir y mostrar

numeros.reverse();
mostarArray(numeros, 'revertido');

// Contar elementos 
document.write("<h1>El array tiene: "+numeros.length+"elementos");

//Busqueda 
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("</hr><h1>ENCONTRADO</h1>");
    document.write("<h1>posicion de la busqueda: " +posicion+"</h1></hr>");

}else{
    document.write("</hr><h1>NO ENCONTRADO</h1></hr>");
}


