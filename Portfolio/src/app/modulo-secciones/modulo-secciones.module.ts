import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSeccionComponent } from './card-seccion/card-seccion.component';
import { SkillSeccionComponent } from './skill-seccion/skill-seccion.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SeccionComponent } from './seccion/seccion.component';
import { AutenticatorService } from '../servicios/autenticator.service';



@NgModule({
  declarations: [
    CardSeccionComponent,
    SkillSeccionComponent,
    SeccionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SeccionComponent, CommonModule
  ],
  providers:[
    AutenticatorService
  ]

})
export class ModuloSeccionesModule { }
