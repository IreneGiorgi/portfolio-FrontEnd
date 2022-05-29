import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutenticatorService } from 'src/app/servicios/autenticator.service';
import { ProfileService } from 'src/app/servicios/profile.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit, OnChanges {

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

  constructor(private fb: FormBuilder, public auth: AutenticatorService, private profileService: ProfileService) { }


  ngOnChanges(changes: SimpleChanges): void {

    if (this.modelo) {
      this.itemForm = this.fb.group({
        fotoBannerPerfil: [this.modelo.fotoBannerPerfil || '', Validators.required],
        fotoPerfil: [this.modelo.fotoPerfil || '', Validators.required],
        nombrePerfil: [this.modelo.nombrePerfil || '', Validators.required],
        tituloPerfil: [this.modelo.tituloPerfil || '', Validators.required],
        acercaPerfil: [this.modelo.acercaPerfil || '', Validators.required]
      })

    }



  }

  onSubmit() {

    this.modelo.fotoBannerPerfil = this.itemForm.value.fotoBannerPerfil
    this.modelo.fotoPerfil = this.itemForm.value.fotoPerfil
    this.modelo.nombrePerfil = this.itemForm.value.nombrePerfil
    this.modelo.tituloPerfil = this.itemForm.value.tituloPerfil
    this.modelo.acercaPerfil = this.itemForm.value.acercaPerfil

    console.log('Sending this model: ', this.modelo);

    this.profileService.editProfileInfo(this.modelo.id, this.modelo)
    .subscribe(
      (response) => {
      },
      (error) => {

        console.log('Error happen: ', error);
        alert('Ocurrió un error al editar, los cambios realizados no serán guardados');
        
      }
    );

  }

  ngOnInit(): void {
  }

  getFotoBanner() {
    return (this.modelo && this.modelo.fotoBannerPerfil ? this.modelo.fotoBannerPerfil : ' ')
  }

  obtenerEstiloBanner() {
    return `
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url(${this.getFotoBanner()})`
  }
}
