import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


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
    estado:[''],
    tipoSkill:[''],
    nivelSkill:['', Validators.compose([Validators.max(100), Validators.min(0)])]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {

    let nuevoItem: any;

    if (this.idSec != 'skills') {

      nuevoItem = {
        id: this.idSec + this.randomNumber(100, 100000),
        subtype: this.idSec,
        cardImagen: this.itemForm.value.imagen,
        cardTitulo: this.itemForm.value.nombre,
        cardLugar: this.itemForm.value.lugar,
        cardDescripcion: this.itemForm.value.descripcion,
        cardDuracion:  `${this.itemForm.value.fechaInicio} / ${this.itemForm.value.fechaFin || ' Actualidad'}`,
        cardFechaInicio: this.itemForm.value.fechaInicio,
        cardFechaFin: this.itemForm.value.fechaFin,
        cardInformacion: this.itemForm.value.informacion
      }

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
      nuevoItem = {
        id: 'skills-' + this.randomNumber(100, 100000),
        name: this.itemForm.value.nombre,
        subtype: this.itemForm.value.tipoSkill,
        porcentaje: this.itemForm.value.nivelSkill
      }
    }

    this.itemsToShow.push(nuevoItem);


  }


  randomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  sacarItem(ind: Number) {
    console.log('Item indice: '+ ind);
    this.itemsToShow.splice(ind, 1);
  }

}
