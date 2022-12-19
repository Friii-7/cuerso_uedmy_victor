'use strict'

// tabla de multipicar de un numerro  indtroducido por  pantalla 

var numero = parseInt(prompt("¿De que numero quieres la tyabla?", 1));

document.write("<h1>Tabla del "+numero+"</h1>");
for(var i = 1; i <= 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}

    // Todos las tablas de multipicar 
    for(var c = 1; c <= 10; c++){
        document.write("<h1>Tabla del "+c+"</h1>");
        for(var i = 1; i <= 10; i++){
            document.write(i+" x" +c+" = "+(i*c)+"<br/>");
    }
}