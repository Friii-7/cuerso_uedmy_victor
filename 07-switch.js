'use strict'

//Switch 

var edad = 29;
var imprime = "";

switch(edad){
    case 18:
        imprime = " Acabas de cumplir la mayoaria de edad";
    break;
    case 29:
        imprime = "Ya eres un aduldo";
    break;
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    case 80:
        imprime = "Ya eres anciano";
    break;
    default:        
        imprime = "Tu eded es nuetra";
    break;

}
console.log(imprime);