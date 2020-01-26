import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interfaces';
import { RegistroService } from 'src/app/services/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private modalRef: MatDialogRef<RegistroComponent>,
              private registroService: RegistroService,
              private toat: MatSnackBar) { }

  ngOnInit() {
    this.formulario()
  }

  formulario(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  guardarRegistro(){
    this.loading = true;

    const user: Usuario = {
      Id: 0,
      Name: this.form.controls.name.value,
      Email: this.form.controls.email.value,
      Password: this.form.controls.password.value,
      Token: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    }


    this.registroService.guardarRegistro(user)
        .subscribe((resp: any) => {
          if(resp){
            this.toat.open('Usuario Creado Con Exito', '', {
              duration: 4000
            });
            this.modalRef.close()
          }
        })

  }

  generate_token(length) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i = 0; i < length; i++) {
        var j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
  }

}
