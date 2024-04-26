'use strict'

/** EJERCICIO 4
 * Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina si sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad de gasolina despachada en litros
 */

let valor_centilitro = 25;
let precio_litro = valor_centilitro * 100;
let valor_a_pagar = 0;
let galones = 0;
let litros = 0

// un galón son 3.78541 litros
alert("Bienvenido a nuestra Estación de Servicio!");
galones = parseInt(prompt("Por favor, ingrese la cantidad de galones  a surtir"));

litros = galones * 3.78541;
valor_a_pagar = precio_litro * litros;

alert("Usted compró " + galones + " galones que equivalen a " + litros + " litros y el costo total de su compra es de $" + valor_a_pagar)