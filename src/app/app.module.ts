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
import { ProfileComponent } from './Profile/Profile.component';
import { HttpModule } from '@angular/http';
import { WsService } from './services/ws/ws.service';
import { AutService } from './services/auth/aut.service';
import { VerificarJWTService } from './services/verificar-jwt/verificar-jwt.service';
import { JwtModule } from './jwt/jwt.module';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ErrorComponent,
      RegistrarseComponent,
      NuevoTurnoComponent,
      AgendaEspecialistaComponent,
      MenuRecepcionComponent,
      ProfileComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      HttpModule
   ],
   providers: [
    WsService,
    AutService,
    VerificarJWTService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
