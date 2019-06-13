import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { NuevoTurnoComponent } from './nuevoTurno/nuevoTurno.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registrarse' , component: RegistrarseComponent},
  {path: '**' , component: ErrorComponent},
  {path: 'Turnos' , component: NuevoTurnoComponent},
  {path: 'error' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
