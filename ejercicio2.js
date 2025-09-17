// Escribe una función que reciba un array de números y retorne un objeto con:
// - suma: total de todos los números
// - promedio: promedio de los números
// - max: número más alto
// - min: número más bajo

function calcularEstadisticas(numeros) {
    // Tu código aquí
    const suma = numeros.reduce((total, num) => total + num, 0);

    //2 Calcular el promedio (suma / cantidad de numeros)
    const promedio = suma / numeros.length;

    //3 Calcular el numero mas alto
    const max = Math.max(...numeros);

    //4 Calcular el numero mas bajo
    const min = Math.min(...numeros);

    //5 Retornar el objeto con todas las estadisticas
    return {
        suma: suma,
        promedio: promedio,
        max: max,
        min: min
    };
}


// Ejemplo de uso:
console.log(calcularEstadisticas([1, 2, 3, 4, 5]));
// Debería mostrar: { suma: 15, promedio: 3, max: 5, min: 1 }

console.log(calcularEstadisticas([10, 20, 30]));