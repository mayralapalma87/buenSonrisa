import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NuevoRecepcionistaComponent } from './nuevoRecepcionista/nuevoRecepcionista.component';
import { NuevoClienteComponent } from './nuevoCliente/nuevoCliente.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NuevoRecepcionistaComponent,
      NuevoClienteComponent,
      ErrorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
