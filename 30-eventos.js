'use strict'

// Eventos del raton 

var boton = document.querySelector("#boton");

function cambioColor(){   
    console.log("Me has dado click"); 

    var bg = boton.style.background;

    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    
    return true;
}

var boton = document.querySelector("#boton");
boton.addEventListener('click', function(){
    cambioColor();
});

// Mouse over
boton,addEventListener('mouseover', function(){
    boton.style.background = "yellow";
});

// Mouseout
boton.addEventListener('mouseout', function(){
    boton.style.background = "#ccc";
});

//Fucos
input.addEventListener('focus' , function(){
    console.log("[focus] estas fuera  del input");
})

//Blur 
input.addEventListener("blur", function(){
    consol.log()
})

//Keydown


//Keypressn 

//keyup