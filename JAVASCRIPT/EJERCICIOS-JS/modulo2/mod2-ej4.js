// 4. Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
// dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.

'use strict';

// Función para leer las notas
function leerNotas(cantidad) {
    // Creamos un array vacío para almacenar las notas
    const notas = [];

    // Pedimos al usuario que ingrese cada nota
    for (let i = 0; i < cantidad; i++) {
        let nota = alert(parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}: `)));
        notas.push(nota);
    }

    // Devolvemos el array con las notas
    return notas;
}

// Función para determinar si un estudiante aprobó o reprobó
function determinarAprobacion(nota) {
    // Aprobado si la nota está entre 5 y 10
    return nota >= 5 && nota <= 10;
}

// Función para contar el número de estudiantes que aprobaron y reprobaron
function contarAprobadosReprobados(notas) {
    let aprobados = 0;
    let reprobados = 0;

    // Recorremos el array de notas
    for (const nota of notas) {
        // Si el estudiante aprobó, aumentamos el contador de aprobados
        if (determinarAprobacion(nota)) {
            aprobados++;
        } else {
            // Si el estudiante reprobó, aumentamos el contador de reprobados
            reprobados++;
        }
    }

    // Devolvemos un objeto con el número de aprobados y reprobados
    return {
        aprobados,
        reprobados,
    };
}

// Leemos 12 notas de estudiantes
const notas = leerNotas(12);

// Contamos el número de estudiantes que aprobaron y reprobaron
const { aprobados, reprobados } = contarAprobadosReprobados(notas);

// Imprimimos los resultados
alert(`Estudiantes aprobados: ${aprobados}`);
alert(`Estudiantes reprobados: ${reprobados}`);
