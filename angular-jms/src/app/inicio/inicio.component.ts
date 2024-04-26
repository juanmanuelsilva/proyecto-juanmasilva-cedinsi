import { Component, OnInit } from '@angular/core';
import { TextosService } from '../servicios/textos/textos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  textos: any;

  constructor(private textosService: TextosService) { }

  ngOnInit(): void {
    this.textosService.getTextos().subscribe(datos => {
      this.textos = datos;
    })
  }

}
