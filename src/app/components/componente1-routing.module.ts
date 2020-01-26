import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutasInitComponent } from './rutas-init/rutas-init.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginGuard } from '../guard/login.guard';


const routes: Routes = [
  {path: '', component: RutasInitComponent, canActivate: [LoginGuard], children: [
    {path: '', component: InicioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Componente1RoutingModule { }
