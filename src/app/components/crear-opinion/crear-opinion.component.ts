import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-crear-opinion',
  templateUrl: './crear-opinion.component.html',
  styleUrls: ['./crear-opinion.component.css']
})
export class CrearOpinionComponent implements OnInit {

  comentario = '';
  loading = false;
  constructor(private evaluacionService: EvaluacionService,
              private toat: MatSnackBar,
              private modalRef: MatDialogRef<CrearOpinionComponent>) { }

  ngOnInit() {
  }

  crearOpinion(){
    this.loading = true;
    const opinion = {
      Id: 0,
      UserId: Number(localStorage.getItem('id')),
      Description: this.comentario
    }

    this.evaluacionService.nuevaOpinion(opinion)
            .subscribe((resp) => {
              this.loading = false;
              this.toat.open('Hemos enviado tu Opinión, Gracias', '', {duration: 4000});
              this.modalRef.close();
            });
  }

}
