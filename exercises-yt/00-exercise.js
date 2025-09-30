// 1. Escribe un comentario en una línea
//hola soy un comentaio


// 2. Escribe un comentario en varias líneas
/*
hola yo soy 
un 
comentario en 
varias lineas
 */


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let numero = 42; //number
let texto = "hola, mundo1"; //String
let booleano = true; //boolean
let nulo = null;
let indefinido = undefined;//undefinded
let simbolo = Symbol("mi simbolo");// Symbol
let bigInt = 3029302392039203920392039203920392039203920392039203920392039392039203920392039n;//BigInt 

//4. Imprime por consola el valor de todas las variables
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(nulo);
console.log(indefinido);
console.log(simbolo);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables
//utilizaremos typeof para saber el tipo de dato de una variable
console.log(typeof numero);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
//modificamos los valores de las variables por otros del mismo tipo
numero = 100;
texto = "hola chavales";
booleano = false;
nulo = null;
indefinido = undefined;
simbolo = Symbol("otro simbolo")
bigInt = 2034039402304238403284023840234820n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
//modificamos los valores de las variables por otros de distinto tipo
numero = "ahora soy texto"
console.log(numero);
texto = 123309;
console.log(texto)
//

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const PI = 3.1416;
const SALUDO = "HOLA, MUNDO";

// 9. A continuación, modifica los valores de las constantes
//SALUDO = 2;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse