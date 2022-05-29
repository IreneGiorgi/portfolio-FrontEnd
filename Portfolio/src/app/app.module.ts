import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuloHomeModule } from './modulo-home/modulo-home.module'
import { ModuloSeccionesModule } from './modulo-secciones/modulo-secciones.module';
import { ModuloUtilitarioModule } from './modulo-utilitario/modulo-utilitario.module';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticatorService } from './servicios/autenticator.service';
import { ServiciosModule } from './servicios/servicios.module';
import { ProfileService } from './servicios/profile.service';
import { SeccionService } from './servicios/seccion.service';
import { AuthInterceptor } from './servicios/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloHomeModule,
    ModuloSeccionesModule,
    ModuloUtilitarioModule,
    HttpClientModule,
    ServiciosModule
  ],
  providers: [HttpClientModule, AutenticatorService, ProfileService, SeccionService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
