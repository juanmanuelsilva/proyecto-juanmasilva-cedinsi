/* 2. Realizar un programa que permita sumar los 150 primeros números
 */
'use-strict'

function sumarNumeros(cantidad) {
    // Creo una variable para almacenar la suma
    let suma = 0;

    // Recorro un ciclo for desde 1 hasta la cantidad indicada
    for (let i = 1; i <= cantidad; i++) {
        // Sumar el número actual a la variable 'suma'
        suma += i;
    }

    // Devuelve la suma total
    return suma;
}

// Llamo la funcion sumarNumeros indicando la cantidad de 150 números
const sumaTotal = sumarNumeros(150);

// Imprimo la suma total en la consola
console.log(`La suma total es: ${sumaTotal}`);