import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Componente1RoutingModule } from './componente1-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearOpinionComponent } from './crear-opinion/crear-opinion.component';
import { RutasInitComponent } from './rutas-init/rutas-init.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { InfoModalComponent } from './info-modal/info-modal.component';


@NgModule({
  declarations: [
    InicioComponent,
    CrearOpinionComponent,
    RutasInitComponent,
    FormularioComponent,
    AdminComponent,
    InfoModalComponent
  ],
  entryComponents: [FormularioComponent, CrearOpinionComponent, InfoModalComponent],
  imports: [
    CommonModule,
    Componente1RoutingModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Componente1Module { }
