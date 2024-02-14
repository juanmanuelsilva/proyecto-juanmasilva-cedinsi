/* 1. Realizar un programa que permita generar 100 números e imprimir solo los números pares
 */

'use-strict'

// Declaro una función para generar los números uno a uno y validar si son pares

function generarNumerosPares(cantidad) {
    //creo un arreglo vacío para almacenar lso números
    const numerosPares = [];
    // recorro con ciclo for desde cero hasta la cantidad indicada (100) 
    // y verifico: si es par lo agrego al arreglo, sino, lo descarto
    for (let i = 0; i < cantidad; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    // devuelvo el array con los números pares
    return numerosPares;
}

// declaro la función para imprimir el array creado
function imprimirNumeros(numeros) {
    for (const numero of numeros) {
        console.log(numero);
    }
}

// Llamo la función para generar los números y le paso la cantidad de números como parámetro

const numerosPares = generarNumerosPares(100);

// Llamo la funcion imprimirNumeros para imprimir el array que generó la función generarNumerosPares

imprimirNumeros(numerosPares);