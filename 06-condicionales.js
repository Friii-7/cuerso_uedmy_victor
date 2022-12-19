'use strict'

// Condicional IF
// si a es igual a  b entonces haz algo 

var edad = 24;
var nombre = "Farzin jimenez";
/* 
//Operacion relacionales 
    Mayor : >
    Menor : <
    Mayor o igual : >= 
    Menor o igual : <=
    Igual : ==
    Distinto : !=
    console.log(numero1 === numero2);
    console.log(numero1 !== numero2);
    console.log(numero1 > numero2);
    console.log(numero1 <= numero2);
    console.log(numero1 >= numero2)

//Operadores logico
AND (y): && Devuelve true solo cuando ambos valores son true
OR (o):|| Devolve true si cualquira de lños valores es true
NOT (no): ! invierte el valor. true produce false  ya false un true 


    console.log("OPERADORES LOGICOS");
    
    console.log("operador &&");
    console.log(false && true);//false
    console.log(false && false);//flse
    console.log(true && true);//true

    //n1 es menor a n2?=f y n1 es mayor a n2? = f 
    consol.log(#1 < #2) && (#1 > #2);

    console.log("operador ||");
    console.log(false || true);//true
    console.log(false || false);//flse
    console.log(true || true);//true

    //n1 es menor a n2?= f y n1 es mayor a n2? = t
    consol.log(#1 < #2) || (#1 > #2);

    console.log("operador !");
    console.log(!(#1 > #2)); //false
    console.log(!(#1 < #2)); //true

    //OPERADOR TERNARIO : Opera sober tres valores 
    cuando es true elige el valor medio
    cuando es false se elgie el de la derecha
    console.log("OPERADOR TERNARIO");
    console.log(true ? 2 : 1); //2
    console.log(false ? 2 :1); //1 





*/


if(edad >=18){
    //Es mayor de edad
    console.log(nombre+" tiene "+edad+"años, es mayor de edad"); 
    
    if(edad <= 23){
        console.log('Todavia eres millenial');
    }else if(edad >= 70){
        console.log('Eres nciano');
    }else{
        console.log('Ya no eres millenial');
    }

}else{
    //Es menor de eded 
    console.log(nombre+" tiene "+edad+"años, es menor de edad ");
} 

const edad = 30;
const name1 = 'farzin';


if(edad >= 18){
    console.log(name1 +'tiene'+edad+'años, eres mayor');
}if(edad <= 23){
    console.log('eres mayor de edad');
}