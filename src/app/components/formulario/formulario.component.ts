import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Evaluacion } from 'src/app/interfaces/evaluacion.interface';
import { EvaluacionService } from 'src/app/services/evaluacion.service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup
  loading = false;

  datos = {};
  id: number;

  constructor(private evaluacionService: EvaluacionService,
              private modalRef: MatDialogRef<FormularioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.formulario()
    this.id = this.data.id;
    this.datos = this.data.cuerpo;

    if(this.datos !== null){
      this.editarEvaluacion(this.datos);
    }
  }

  formulario(){
    this.form = new FormGroup({
      comentario: new FormControl('', Validators.required),
      score: new FormControl('', [Validators.required, Validators.max(10), Validators.min(1)])
    })
  }

  editarEvaluacion(datos){
    this.form.setValue({
      comentario: datos.Comment,
      score: datos.Score
    })
  }

  AgregarEvaluacion(){
    this.loading = true;
    if(this.id === 0) {

     
      const evaluacion: Evaluacion = {
        Id: 0,
        UserId: Number(localStorage.getItem('id')),
        Comment: this.form.controls.comentario.value,
        Score: this.form.controls.score.value,
        Date: this.getDateNow()
      }
  
      return this.evaluacionService.Agregar(evaluacion)
       .subscribe((resp) => this.modalRef.close('success'));
    } else {

      
      const evaluacion: Evaluacion = {
        Id: this.id,
        UserId: Number(localStorage.getItem('id')),
        Comment: this.form.controls.comentario.value,
        Score: this.form.controls.score.value,
        Date: this.getDateNow()
      }

     this.evaluacionService.editar(evaluacion, this.id)
       .subscribe((resp) => this.modalRef.close('success'));

    }


  }

  getDateNow() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  }

}
