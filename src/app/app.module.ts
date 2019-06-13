import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { NuevoTurnoComponent } from './nuevoTurno/nuevoTurno.component';
import { AgendaEspecialistaComponent } from './agendaEspecialista/agendaEspecialista.component';
import { MenuRecepcionComponent } from './menuRecepcion/menuRecepcion.component';
import { JwtModule } from './jwt/jwt.module';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ErrorComponent,
      RegistrarseComponent,
      NuevoTurnoComponent,
      AgendaEspecialistaComponent,
      MenuRecepcionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      JwtModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
