// EJERCICIOS MODULO 1
// Usuario elige la unidad de medida
let unidadDeMedida = prompt("Elige la unidad a que quieres convertir tus litros: cl, dl, gal, oz");
if ((unidadDeMedida === "cl") || (unidadDeMedida === "dl") || (unidadDeMedida === "gal") || (unidadDeMedida === "oz")) {
    // usuario ingresa cantidad de litros
    let cantidad = parseInt(prompt("Ingresa en números la cantidad de litros que quieres convertir ..."));
    // declaro y asigno resultado
    let resultado = 0;
    /* 
    1 litro === 100 centilitros === 10 decilitros 
    === 0.264172 galones === 33814 onzas
     */

    // ejecuto la conversión según la elección del usuario
    switch (unidadDeMedida) {
        case "cl":
            resultado = cantidad * 100;
            console.log(cantidad + " litros equivalen a " + (parseInt(resultado)) + " centilitros")
            break;
        case "dl":
            resultado = cantidad * 10;
            console.log(cantidad + " litros equivalen a " + (parseInt(resultado)) + " decilitros")
            break;
        case "gal":
            resultado = cantidad * 0.264172;
            console.log(cantidad + " litros equivalen a " + (parseInt(resultado)) + " galones")
            break;
        case "oz":
            resultado = cantidad * 33, 814;
            console.log(cantidad + " litros equivalen a " + (parseInt(resultado)) + " onzas líquidas")
            break;
        default:
            console.log("No se ejecutó ninguna conversión")
            break;
    }
} else {
    alert("No elegiste una unidad de medida correcta ... Intenta nuevamente")
    console.log("No elegiste una unidad de medida correcta ... Intenta nuevamente")
}
