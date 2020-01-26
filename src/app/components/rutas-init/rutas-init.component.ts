import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormularioComponent } from '../formulario/formulario.component';
import { Router } from '@angular/router';
import { CrearOpinionComponent } from '../crear-opinion/crear-opinion.component';

@Component({
  selector: 'app-rutas-init',
  templateUrl: './rutas-init.component.html',
  styleUrls: ['./rutas-init.component.css']
})
export class RutasInitComponent implements OnInit {

  id = Number(localStorage.getItem('id'));

  constructor(private modal: MatDialog,
              private router: Router) { }

  ngOnInit() {
  }


  abrirModal(){
    this.modal.open(FormularioComponent, {
      width: '400px',
      height: '350px'
    })
  }

  abrirModalOpinion() {
    this.modal.open(CrearOpinionComponent, {
      width: '400px',
      height: '270px'
    })
  }

  salir(){
    localStorage.clear()
    this.router.navigateByUrl('login')
  }

}
