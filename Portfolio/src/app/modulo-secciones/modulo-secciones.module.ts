import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSeccionComponent } from './card-seccion/card-seccion.component';
import { SkillSeccionComponent } from './skill-seccion/skill-seccion.component';
import { SeccionComponent } from './seccion/seccion.component';



@NgModule({
  declarations: [
    CardSeccionComponent,
    SkillSeccionComponent,
    SeccionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeccionComponent, CommonModule
  ]
})
export class ModuloSeccionesModule { }
