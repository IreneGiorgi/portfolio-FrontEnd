import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  @Input() modelo: {
    id: string,
    fotoBannerPerfil: string,
    fotoPerfil: string,
    nombrePerfil: string,
    tituloPerfil: string,
    acercaPerfil: string
  } = {
    id: '',
    fotoBannerPerfil: '',
    fotoPerfil: '',
    nombrePerfil: '',
    tituloPerfil: '',
    acercaPerfil: ''
  }

  itemForm = this.fb.group({
    fotoBannerPerfil: ['', Validators.required],
    fotoPerfil: ['', Validators.required],
    nombrePerfil: ['', Validators.required],
    tituloPerfil: ['', Validators.required],
    acercaPerfil: ['', Validators.required]
  })

  constructor(private fb:FormBuilder) { }

  onSubmit() {

    this.modelo.fotoBannerPerfil = this.itemForm.value.fotoBannerPerfil
    this.modelo.fotoPerfil = this.itemForm.value.fotoPerfil
    this.modelo.nombrePerfil = this.itemForm.value.nombrePerfil
    this.modelo.tituloPerfil = this.itemForm.value.tituloPerfil
    this.modelo.acercaPerfil = this.itemForm.value.acercaPerfil
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      fotoBannerPerfil: [this.modelo.fotoBannerPerfil, Validators.required],
      fotoPerfil: [this.modelo.fotoPerfil, Validators.required],
      nombrePerfil: [this.modelo.nombrePerfil, Validators.required],
      tituloPerfil: [this.modelo.tituloPerfil, Validators.required],
      acercaPerfil: [this.modelo.acercaPerfil, Validators.required]       
    })
  }
}
