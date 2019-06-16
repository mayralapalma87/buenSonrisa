import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { NuevoTurnoComponent } from './nuevoTurno/nuevoTurno.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaTurnosComponent } from './lista-turnos/lista-turnos.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registrarse' , component: RegistrarseComponent},
  {path: '**' , component: ErrorComponent},
  {path: 'nuevoTurno' , component: NuevoTurnoComponent},
  {path: 'Perfil' , component: PerfilComponent},
  {path: 'navbar' , component: NavbarComponent},
  {path: 'lista-turnos' , component: ListaTurnosComponent},
  {path: 'error' , component: ErrorComponent}
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }

