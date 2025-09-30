/*Ejercicio propuesto
Enunciado:
Dado un array de números, muestra en consola el doble de cada número usando forEach.*/

const numeros = [1, 2, 3, 4, 5];


numeros.forEach(function(numero) {
    console.log(numero * 2);
}) 

//que hace este codigo?
//Este codigo  recorre el array de numeros y por cada numero lo multiplica por 2 y muestra el resultado en consola

//forEach es un metodo que se usa para recorrer arrays y ejecutar una funcion por cada elemento del array
//function(numero) es una funcion anonima que recibe como parametro el elemento actual del array
//console.log(numero * 2) muestra en consola el resultado de multiplicar el numero por 2



