import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { MatDialog } from '@angular/material';
import { InfoModalComponent } from '../info-modal/info-modal.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  evaluaciones = [];
  opiniones = [];
  fecha = '';
  loadingE = true;
  loadingO = true;

  constructor(private evaluacionService: EvaluacionService,
              private modal: MatDialog) { }

  ngOnInit() {
    this.listar()
    this.listarOpinion()
  }

  listar(){
    this.evaluacionService.ListarEvaluacion()
          .subscribe((resp: any) => {this.loadingE = false; return this.evaluaciones = resp;})
  }

  listarOpinion(){
    this.evaluacionService.listarOpinion()
      .subscribe((resp: any) => {this.loadingO = false; return this.opiniones = resp})
  }

  buscarFecha() {
    const fecha = `${this.fecha}T00:00:00`;
    this.evaluaciones = this.evaluaciones.filter(e => e.Date === fecha)
    if(this.evaluaciones.length === 0){
      this.listar();
    }
  }

  verInfo(datos){
    this.modal.open(InfoModalComponent, {
      width: '200px',
      height: 'auto',
      data: {datos}
    })
  }

  

}
