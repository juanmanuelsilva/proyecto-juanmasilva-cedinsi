/**Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada. */
'use strict';
// Usuario elige la operación deseada
let operacion = prompt("Elige la operacion que deseas ejecutar: suma, resta, multiplicacion, division");
if ((operacion === "suma") || (operacion === "resta") || (operacion === "multiplicacion") || (operacion === "division")) {
    // usuario ingresa 2 números
    let numero1 = parseInt(prompt("Ingresa el primer número"));
    let numero2 = parseInt(prompt("Ingresa el segundo número"));

    // declaro y asigno resultado
    let resultado = 0;

    // ejecuto la operación según la elección del usuario
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            console.log("El resultado de la suma es " + (parseInt(resultado)));
            alert("El resultado de la suma es " + (parseInt(resultado)));
            break;
        case "resta":
            resultado = numero1 - numero2;
            console.log("El resultado de la resta es " + (parseInt(resultado)));
            alert("El resultado de la resta es " + (parseInt(resultado)));
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            console.log("El resultado de la multiplicacion es " + (parseInt(resultado)));
            alert("El resultado de la multiplicacion es " + (parseInt(resultado)));
            break;
        case "division":
            resultado = numero1 / numero2;
            console.log("El resultado de la división es " + (parseInt(resultado)));
            alert("El resultado de la división es " + (parseInt(resultado)));
            break;

        default:
            console.log("No se ejecutó ninguna operación")
            alert("No se ejecutó ninguna operación")
            break;
    }
} else {
    alert("No elegiste una operacion correcta ... Intenta nuevamente")
    console.log("No elegiste una operacion correcta ... Intenta nuevamente")
}
