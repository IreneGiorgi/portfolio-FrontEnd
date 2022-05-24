import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';


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
  ]
})
export class ModuloHomeModule { }
