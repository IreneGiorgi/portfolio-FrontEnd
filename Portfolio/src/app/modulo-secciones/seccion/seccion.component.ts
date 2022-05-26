import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { AutenticatorService } from 'src/app/servicios/autenticator.service';
import { SeccionService } from 'src/app/servicios/seccion.service';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  @Input() idSec = ""
  @Input() type = ""
  @Input() name = "Nombre de Seccion"

  @Input() itemsToShow: any = [];

  itemForm = this.fb.group({
    nombre: ['', Validators.required],
    lugar: [''],
    descripcion: [''],
    fechaInicio: [''],
    fechaFin: [''],
    informacion: [''],
    imagen: [''],
    estado: [''],
    tipoSkill: [''],
    nivelSkill: ['', Validators.compose([Validators.max(100), Validators.min(0)])]
  })

  constructor(private fb: FormBuilder, public auth: AutenticatorService, private seccionService: SeccionService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    let nuevoItem: any;

    nuevoItem = {
      //id: this.idSec + this.randomNumber(100, 100000),
      type: 'card',
      subtype: this.idSec,
      cardImagen: this.itemForm.value.imagen,
      cardTitulo: this.itemForm.value.nombre,
      cardLugar: this.itemForm.value.lugar,
      cardDescripcion: this.itemForm.value.descripcion,
      cardDuracion: `${this.itemForm.value.fechaInicio} / ${this.itemForm.value.fechaFin || ' Actualidad'}`,
      cardFechaInicio: this.itemForm.value.fechaInicio,
      cardFechaFin: this.itemForm.value.fechaFin,
      cardInformacion: this.itemForm.value.informacion,
      name: this.itemForm.value.nombre,
      porcentaje: this.itemForm.value.nivelSkill
    }



    if (this.idSec == 'formEdu') {
      nuevoItem.cardEstado = this.itemForm.value.estado
      nuevoItem.cardInformacion = this.itemForm.value.informacion
    }
    else if (this.idSec == 'proyectos') {

      nuevoItem.cardEstado = this.itemForm.value.estado
      nuevoItem.cardInformacion = this.itemForm.value.informacion
      nuevoItem.cardLugar = undefined

    }
    else if (this.idSec == 'skills') {
      nuevoItem.type = 'skills'
      nuevoItem.subtype = this.itemForm.value.tipoSkill
    }


    this.seccionService.addSeccionItem(nuevoItem).subscribe(obj => {
      nuevoItem.id = obj.id
      this.itemsToShow.push(nuevoItem);
    })


  }


  randomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  sacarItem(ind: Number) {
    this.seccionService.deleteSeccionItem(this.itemsToShow[Number(ind)].id).subscribe(obj =>{
      this.itemsToShow.splice(ind, 1);
    })
  }

}
