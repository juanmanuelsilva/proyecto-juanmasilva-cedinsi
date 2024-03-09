class ManejadorDeSesion {
    constructor() {
        this.usuarios = [
            {
                username: "usuario1",
                password: "1234"
            },
            {
                username: "usuario2",
                password: "123456"
            }
        ]
    }

    autenticacion(username, password) {
        return this.usuarios.some(
            userinfo => userinfo.username === username
                && userinfo.password === password
        )
    }

}

function envioDeFormulario(event) {

    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const inicioSesion = new ManejadorDeSesion();

    if (inicioSesion.autenticacion(username, password)) {
        document.getElementById('autenticacionOk').classList.add('mostrarAutenticacion')
        console.log("Autenticacion exitosa")
    } else {
        console.log("Error en la información");
        document.getElementById('error').classList.add('mostrarMensaje')
    }

}