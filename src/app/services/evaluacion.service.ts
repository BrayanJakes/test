import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../config/uri';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  constructor(private http: HttpClient) { }

  ListarEvaluacion(){
    const uri = `${URI}/Evaluation`
    return this.http.get(uri);
  }

  Agregar(Evaluacion){
    const uri = `${URI}/Evaluation`
    return this.http.post(uri, Evaluacion);
  }

  Delete(id){
    const uri = `${URI}/Evaluation/${id}`
    return this.http.delete(uri);
  }

  editar(Evaluacion, id){
    const uri = `${URI}/Evaluation/${id}`
    return this.http.put(uri, Evaluacion);
  }

  nuevaOpinion(Opinion){
    const uri = `${URI}/Opinion`
    return this.http.post(uri, Opinion);
  }

  listarOpinion(){
    const uri = `${URI}/Opinion`
    return this.http.get(uri);
  }
}
