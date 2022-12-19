 'use srtict'
    // DOM - Document Object model 
    function cmbioColor(color){
        caja.style.background = color;
    } 

     var caja = document.getelementById("micaja");
    //var caja = document.querySelector("#micaja");

    caja.innerHTML = "!TEXTO EN LA CAJA DESE JS¡";
    caja.style.background ="blue";
    caja.style.padding = "20px";
    caja.style.color = "white";
    caja.className = "hola farzin";

//    console.log.apply(caja);

// conseguir elemento por su etiqueta 
var todosLosDivs = document.getElementsByTagName('div');
 
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);              
        seccion.append(parrafo);
    }
}
seccion.append(hr);

///Conseguir elementos por su clase 
var divsRojos = document.getElementsByClassName('rojo');  
var divsAmarillos = document.getElementsByClassName('amarillo');  
divsAmarillos[0].style.background = "yellow";


var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}


/// query selector 
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.Rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("#encabezado");
console.log(etiqueta);