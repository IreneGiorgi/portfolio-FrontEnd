import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraRedesComponent } from './barra-redes/barra-redes.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AutenticatorService } from '../servicios/autenticator.service';


@NgModule({
  declarations: [
    BarraRedesComponent,
    PiePaginaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    BarraRedesComponent,
    PiePaginaComponent,
    CommonModule
  ],
  providers: [
    AutenticatorService
  ]
})
export class ModuloUtilitarioModule { }
