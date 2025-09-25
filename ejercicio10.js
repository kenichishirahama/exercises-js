//Que es un a Array?
//Un array es una estructura de datos que permite almacenar multiples valores en una sola variable

let frutas =  ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "hola", true, null, 3.14];

//Acceder a Elementos
//Arriba tengo definido el let frutas y ahora accedere a sus elementos
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas.length);//length es una propiedad que devuelve la cantidad de elementos en un array

//Metodos principales de los Arrays
//push: agrega un elemento al final del array
frutas.push("pera");
console.log(frutas);

//pop: elimina el ultimo elemento del array
frutas.pop();
console.log(frutas);

//shift: elimina el primer elemento del array
frutas.shift();
console.log(frutas);

//unshift: agrega un elemento al inicio del array
frutas.unshift("kiwi");
console.log(frutas);


//Buscar elementos
//indexOf: devuelve el indice de la primera ocurrencia de un elemento en el array, o -1 si no se encuentra
console.log(numeros.indexOf(3)); //2 posicion
console.log(numeros.indexOf(10));//-1 no se encuentra

//includes: devuelve true si el array contiene un elemento especifico, de lo contrario false
console.log(frutas.includes("banana"));//true
console.log(frutas.includes("uva"));//false

//Transformar Arrays
let numeros2 = [1, 2, 3];

//map: crea un nuevo array con los resultados de la llamada a una funcion proporcionada aplicada a cada elemento del array
let duplicados = numeros2.map(num => num * 2);
console.log(duplicados);//[2, 4, 6]

//filter: crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada
let pares = numeros2.filter(num => num % 2 === 0);
console.log(pares);//[2]

//forEach: ejecuta una funcion proporcionada una vez por cada elemento del darray
numeros2.forEach(num => console.log(num));


//Recorrer Arrays
for (let i = 0; i< frutas.length; i++) {
    console.log(frutas[i]);
}

//con for...of
for (let fruta of frutas) {
    console.log(fruta);
}

//Ejercicio Practico Sencillo
//Crea una funcion que reciba un array de numeros y
//Devuelva la suma de todos los numeros
//Encuentre el numero mas grande
//Cree un nuevo array con los numeros duplicados

function procesarArray(numeros) {
    let suma = 0;
    let maximo = numeros[0];

    //Sumar todos los numeros y encontrar el maximo
    for(let numero of numeros){
        suma += numero;
        if(numero > maximo) {
            maximo = numero;
        }
    }

    //crear un nuevo arra y duplicar los numeros 
    let duplicados = numeros.map(num => num * 2);

    return {
        suma: suma,
        maximo: maximo, 
        duplicados: duplicados
    }
    
}

let resultado = procesarArray([1, 2, 3, 4, 5]);
console.log(resultado);