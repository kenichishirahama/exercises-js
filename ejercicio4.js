/**
 * Escribe una función que cuente la frecuencia de cada palabra en un texto
 * y retorne un objeto con los resultados (ignorar mayúsculas/minúsculas)
 */

function contarPalabras(texto) {
    // Tu código aquí
    texto = texto.toLowerCase();//tolowercase es para conveertir todo a minusculas
    const palabras = texto.split(" "); //split es para separar las palabras en un array
    const conteo = {}; //objeto vacio para guardar el conteo de palabras

    palabras.forEach(palabra => {
        if (conteo[palabra]) {
            conteo[palabra]++;
        }else {
            conteo[palabra] = 1;
        }
    });
    return conteo;
}

const resultado = contarPalabras("Hola mundo hola JavaScript");
console.log(resultado);
