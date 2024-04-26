import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextosService {

  //private textosUrl = "assets/textos/textos.json"

  constructor(private http: HttpClient) { }

  getTextos() {
    return this.http.get<any>('assets/textos/textos.json')
  }
}
