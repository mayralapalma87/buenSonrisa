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
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { MisTurnosComponent } from './misTurnos/misTurnos.component';
import { MiPerfilComponent } from './miPerfil/miPerfil.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ErrorComponent,
      RegistrarseComponent,
      NuevoTurnoComponent,
      AgendaEspecialistaComponent,
      MenuRecepcionComponent,
      NavbarComponent,
      MisTurnosComponent,
      MiPerfilComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireStorageModule
   ],
   providers: [
      AngularFireAuth,
      AngularFirestore
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
