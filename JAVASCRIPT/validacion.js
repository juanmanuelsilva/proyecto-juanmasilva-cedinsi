'use-strict';

class FormularioContacto {
    constructor(nombre, email, mensaje) {
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }

    validarNombre() {
        // Valida que el nombre solo contenga letras
        const regex = /^[a-zA-Záéíóúñ]+$/;
        return regex.test(this.nombre);
    }

    validarEmail() {
        // Valida que el email sea una cuenta válida
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(this.email);
    }

    enviarFormulario() {
        if (!this.validarNombre()) {
            alert("El nombre solo debe contener letras");
            return;
        }

        if (!this.validarEmail()) {
            alert("El correo electrónico no es válido");
            return;
        }

        // Aquí código para enviar el formulario mediante algun procedimiento
        alert("Formulario enviado correctamente");
    }
}

const formulario = new FormularioContacto();

const btnEnviar = document.getElementById("formulario-contacto");

btnEnviar.addEventListener("submit", (e) => {
    e.preventDefault();

    formulario.nombre = document.getElementById("nombre").value;
    formulario.email = document.getElementById("email").value;
    formulario.mensaje = document.getElementById("mensaje").value;

    formulario.enviarFormulario();
});

