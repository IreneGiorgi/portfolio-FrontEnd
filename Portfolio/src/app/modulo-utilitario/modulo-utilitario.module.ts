import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraRedesComponent } from './barra-redes/barra-redes.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';



@NgModule({
  declarations: [
    BarraRedesComponent,
    PiePaginaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuloUtilitarioModule { }
