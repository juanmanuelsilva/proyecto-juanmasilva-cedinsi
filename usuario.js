'use-strict';
class Usuario {
    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;
    }
    validarUsername() {
        const regexUsername = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})$/g;
        if (regexUsername.test(this.username)) {
            return this.username;
        }
    }
    validarEmail() {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regexEmail.test(this.email)) {
            return this.email;
        }
    }
    validarPass() {
        const regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g;
        if (regexPass.test(this.pass)) {
            return this.pass;
        }
    }
}

class GestionUsuarios {
    constructor() {
        this.usernames = [];
        //this.email = [];
        //this.pass = [];
    }

    agregarUsuario(username, email, pass) {
        const nuevoUsuario = new Usuario(username, email, pass);
        if (nuevoUsuario.validarUsername() && nuevoUsuario.validarEmail() && nuevoUsuario.validarPass) {
            this.usernames.push(nuevoUsuario);
        }
    }
}

let agregarUsuario = new GestionUsuarios();

agregarUsuario.agregarUsuario('Juan', 'user@user.com', '123456');
agregarUsuario.agregarUsuario('Darlyn', 'user@user.com', '123456');
agregarUsuario.agregarUsuario('');

console.log(agregarUsuario.usernames,);