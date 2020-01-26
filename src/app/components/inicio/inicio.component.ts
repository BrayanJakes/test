import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Evaluaciones = [];
  nombre: string;
  id = Number(localStorage.getItem('id'));

  constructor(private evaluacionService: EvaluacionService,
              private modal: MatDialog) { }

  ngOnInit() {
    this.listarEvaluacion();
    this.nombre = localStorage.getItem('nombre');
  }


  abrirModal(cuerpo, id){
    const modal = this.modal.open(FormularioComponent, {
      width: '400px',
      height: '350px',
      data: {cuerpo, id}
    })
    modal.afterClosed()
      .subscribe((e) => e === 'success' ? this.listarEvaluacion() : null);
  }

  Delete(id){
    this.evaluacionService.Delete(id)
      .subscribe((resp) => this.listarEvaluacion());
  }

  listarEvaluacion() {
    this.evaluacionService.ListarEvaluacion()
      .subscribe((resp: any) => {
        this.Evaluaciones = resp;
      })
  }

}
