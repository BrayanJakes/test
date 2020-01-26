import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../config/uri';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  guardarRegistro(Usuario){
    const uri = `${URI}/User`
    return this.http.post(uri, Usuario)
  }
}
