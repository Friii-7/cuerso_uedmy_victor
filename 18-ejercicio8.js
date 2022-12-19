'use strict'

/*
Calculadora:
-pide dos numeros en la pantalla
-Si metemos uno mal que nos los vuelva a pedir 
-en el cuerpo de la pagina,
en una alarta y por consola y resultado de sumar , restar, multipicar y dividir esas dos cifras 
*/

var numero1 = parseInt(prompt('Intruduce el primer numero', 0));
var numero2 = parseInt(prompt('Intruduce el numero segundo', 0));

while(numero1 < 0 || numero2 < 0 || isNaN (numero1) || isNaN (numero2)){
    
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                "La resta es: "+(numero1-numero2)+" <br/>"+
                "La multipicacion es: "+(numero1*numero2)+" <br/>"+
                "La divicion es:" +(numero1/numero2)+" <br/> ";

var resultadoCMD = "La suma es: "+(numero1+numero2)+" \n"+
                "La resta es: "+(numero1-numero2)+"  \n"+
                "La multipicacion es: "+(numero1*numero2)+"  \n"+
                "La divicion es:" +(numero1/numero2)+"  \n ";


document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
