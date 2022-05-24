import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraRedesComponent } from './barra-redes/barra-redes.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BarraRedesComponent,
    PiePaginaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    BarraRedesComponent,
    PiePaginaComponent,
    CommonModule
  ]
})
export class ModuloUtilitarioModule { }
