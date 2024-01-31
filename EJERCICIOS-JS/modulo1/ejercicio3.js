
/**EJERCICIO 3
 * Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.
 */

'use strict';
// Usuario elige la conversión deseada
let conversion = parseInt(prompt("Elige la conversión que deseas ejecutar: 1. Centígrados a Farenheit | 2. Farenheit a Centígrados"));

if ((conversion === 1) || (conversion === 2)) {
    // usuario ingresa 2 números
    let grados = parseInt(prompt("Ingresa la cantidad de grados que deseas convertir"));
    // declaro y asigno resultado
    let resultado = 0;

    // ejecuto la operación según la elección del usuario
    switch (conversion) {
        case 1:
            resultado = ((grados * 9 / 5) + 32);
            console.log(grados + " grados Centígrados equivalen a " + (parseInt(resultado)) + " grados Farenheit");
            alert(grados + " grados Centígrados equivalen a " + (parseInt(resultado)) + " grados Farenheit");
            break;
        case 2:
            resultado = ((grados - 32) * 5 / 9);
            console.log(grados + " grados Farenheit equivalen a " + (parseInt(resultado)) + " grados Centígrados");
            alert(grados + " grados Farenheit equivalen a " + (parseInt(resultado)) + " grados Centígrados");
            alert("");
            break;
        default:
            console.log("No se ejecutó ninguna conversión")
            alert("No se ejecutó ninguna conversión")
            break;
    }
} else {
    console.log("No elegiste una conversión correcta ... Intenta nuevamente")
    alert("No elegiste una conversión correcta ... Intenta nuevamente")
}
