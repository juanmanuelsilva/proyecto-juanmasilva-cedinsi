
'use strict'

/** EJERCICIO 5
 * Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros:
 * a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
 * b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000, sino le pagan el mismo salario.
 * c. Si gana más del millón Descuento de pensión =6%.
 */

let salario = parseInt(prompt("Ingrese un valor para el salario"));
let desc_pension = 0;
let aux_transporte = 0;
let subsidio_fam = 12000;
let a_pagar = 0;

if (salario < 700000) {
    desc_pension = salario * 0.02;
    aux_transporte = salario * 0.06;
    a_pagar = salario + aux_transporte - desc_pension;
    alert(`El salario es $ ${salario} \r 
    + auxilio de transporte (6%) $ ${aux_transporte} \r 
    - descuento aporte pensión (2%) $ ${desc_pension} 
    \r El total a pagar es: $ ${a_pagar} `);
} else if (700000 >= salario < 1000000) {
    desc_pension = salario * 0.04;
    a_pagar = salario + subsidio_fam - desc_pension;
    alert(`El salario es $ ${salario} \r 
    + subsidio familiar $ ${subsidio_fam} \r 
    - descuento aporte pensión (4%) $ ${desc_pension} 
    \r El total a pagar es: $ ${a_pagar} `);
} else if (salario > 999999) {
    desc_pension = salario * 0.06;
    a_pagar = salario - desc_pension;
    alert(`El salario es $ ${salario} \r 
    - descuento aporte pensión (6%) $ ${desc_pension} 
    \r El total a pagar es: $ ${a_pagar} `);
} else {
    alert("No se ejecutó ninguna operación")
}


/* alert("El salario es $" + salario + "\r + auxilio de transporte por $" + aux_transporte + "\r - descuento aporte pensión por $" + desc_pension + " \rEl total a pagar es: $" + a_pagar); */