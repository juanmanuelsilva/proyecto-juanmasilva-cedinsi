import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public usuario: any = {
    nombre: '',
    email: '',
    msg: ''
  }

  enviar() {
    console.log(this.usuario)
  }
}
