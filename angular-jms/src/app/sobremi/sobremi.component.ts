import { Component, OnInit } from '@angular/core';
import { TextosService } from '../servicios/textos/textos.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  textos: any;

  constructor(private textosService: TextosService) { }

  ngOnInit(): void {
    this.textosService.getTextos().subscribe(datos => {
      this.textos = datos;
    })
  }
}
