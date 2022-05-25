import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticatorService } from '../servicios/autenticator.service';
import { ProfileService } from '../servicios/profile.service';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BannerComponent, CommonModule
  ],
  providers:[
    AutenticatorService, ProfileService
  ]
})
export class ModuloHomeModule { }
