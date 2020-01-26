import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RegistroComponent } from '../registro/registro.component';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  form: FormGroup

  constructor(private modal: MatDialog,
              private loginService: LoginService,
              private router: Router,
              private toat: MatSnackBar) { }

  ngOnInit() {
    this.formulario()
  }

  formulario(){
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  abrirModal(){
    this.modal.open(RegistroComponent, {
      width: '400px',
      height: '430px'
    })
  }

  loginAdmin(){
    localStorage.setItem('token', 'dasiodjasofnasdnvsdjkoncvsdnvisdvuiee');
    localStorage.setItem('email', 'admin@admin.com');
    localStorage.setItem('nombre', 'Administrador');
    localStorage.setItem('id', '9999999');
    return this.router.navigate(['/'])
  }

  logear(){
    this.loading = true;
    const user: {Email: string, Password: string} = {
      Email: this.form.controls.email.value,
      Password: this.form.controls.password.value
    }
    this.loginService.login(user)
      .subscribe((resp: any) => {
          if(resp.Message === 'Usuario o Password incorrecrtos'){
            this.loading = false;
            return this.toat.open('Usuario o Password incorrecrtos','',{duration: 4000})
          }
          if(resp.Message === 'Success'){
            this.loading = false;
            localStorage.setItem('token', resp.Data.Token);
            localStorage.setItem('email', resp.Data.Email);
            localStorage.setItem('nombre', resp.Data.Name);
            localStorage.setItem('id', resp.Data.Id);
            return this.router.navigate(['/'])
          }
      })
  }



}
