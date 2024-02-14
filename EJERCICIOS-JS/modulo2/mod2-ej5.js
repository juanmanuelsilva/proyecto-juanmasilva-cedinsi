// 5. Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir la cantidad.

'use strict';

// Función para contar los múltiplos de 3
function contarMultiplosDe3(cantidad) {
    let count = 0;

    // Recorremos desde 1 hasta la cantidad indicada
    for (let i = 1; i <= cantidad; i++) {
        // Si el número actual es múltiplo de 3, aumentamos el contador
        if (i % 3 === 0) {
            count++;
        }
    }

    // Devolvemos el número de múltiplos de 3
    return count;
}

// Contamos los múltiplos de 3 entre los primeros 50 números
const cantidadMultiplosDe3 = contarMultiplosDe3(50);

// Imprimimos la cantidad de múltiplos de 3
console.log(`Cantidad de múltiplos de 3: ${cantidadMultiplosDe3}`);
