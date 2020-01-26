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

  constructor(private evaluacionService: EvaluacionService,
              private modal: MatDialog) { }

  ngOnInit() {
    this.listar()
    this.listarOpinion()
  }

  listar(){
    this.evaluacionService.ListarEvaluacion()
          .subscribe((resp: any) => this.evaluaciones = resp)
  }

  listarOpinion(){
    this.evaluacionService.listarOpinion()
      .subscribe((resp: any) => this.opiniones = resp)
  }

  verInfo(datos){
    this.modal.open(InfoModalComponent, {
      width: '200px',
      height: 'auto',
      data: {datos}
    })
  }

}
