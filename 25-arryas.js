'use strict'

//Arrayas , arreglos , Matrices

var lenguajes = new Array("php","js", "pascal", "java", "css");
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");


lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" - "+elemento+"</li>");
    
});

document.write("</ul>")