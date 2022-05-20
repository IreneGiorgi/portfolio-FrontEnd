import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuloHomeModule } from './modulo-home/modulo-home.module'
import { ModuloSeccionesModule } from './modulo-secciones/modulo-secciones.module';
import { ModuloUtilitarioModule } from './modulo-utilitario/modulo-utilitario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloHomeModule,
    ModuloSeccionesModule,
    ModuloUtilitarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
