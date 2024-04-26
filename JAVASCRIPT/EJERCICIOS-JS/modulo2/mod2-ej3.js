// 3. Leer 10 precios de productos y calcular cuánto cuestan los 10 productos

'use strict';

function leerPrecios(cantidad) {
    // Creamos un array vacío para almacenar los precios
    const precios = [];

    // Pedimos al usuario que ingrese cada precio
    for (let i = 0; i < cantidad; i++) {
        let precio;
        try {
            precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}: `));
        } catch (error) {
            console.error(`Error al ingresar el precio: ${error.message}`);
            continue;
        }
        precios.push(precio);
    }

    // Devolvemos el array con los precios
    return precios;
}

function calcularTotal(precios) {
    // Variable para almacenar el total
    let total = 0;

    // Recorremos el array de precios
    for (const precio of precios) {
        // Sumamos cada precio al total
        total += precio;
    }

    // Devolvemos el total
    return total;
}

// Leemos 10 precios de productos
const precios = leerPrecios(10);

// Calculamos el total
const total = calcularTotal(precios);

// Imprimimos el total en la consola
console.log(`El total de los productos es: $${total}`);
