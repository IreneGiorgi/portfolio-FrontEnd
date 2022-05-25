import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutenticatorService } from 'src/app/servicios/autenticator.service';
import { SeccionService } from 'src/app/servicios/seccion.service';

@Component({
  selector: 'app-card-seccion',
  templateUrl: './card-seccion.component.html',
  styleUrls: ['./card-seccion.component.css']
})
export class CardSeccionComponent implements OnInit {

  @Output() delete = new EventEmitter<number>()
  @Input() modelo: {
    id: string,
    subtype: string,
    cardImagen: string,
    cardTitulo: string,
    cardLugar: string,
    cardDescripcion: string,
    cardDuracion: string,
    cardFechaInicio: string,
    cardFechaFin: string,
    cardEstado: string,
    cardInformacion: string
  } = {
    id: " ",
    subtype: " ",
    cardImagen: " ",
    cardTitulo: " ",
    cardLugar: " ",
    cardDescripcion: " ",
    cardDuracion: " ",
    cardFechaInicio: " ",
    cardFechaFin: " ",
    cardEstado: " ",
    cardInformacion: " "
  }

  itemForm = this.fb.group({
    nombre: ['', Validators.required],
    lugar: [''],
    descripcion: [''],
    fechaInicio: [''],
    fechaFin: [''],
    informacion: [''],
    imagen: [''],
    estado:['']
  })



  constructor(private fb:FormBuilder, public auth: AutenticatorService, private seccionService: SeccionService) { }

  onSubmit() {

    this.modelo.cardTitulo = this.itemForm.value.nombre
    this.modelo.cardLugar = this.itemForm.value.lugar
    this.modelo.cardDescripcion = this.itemForm.value.descripcion
    this.modelo.cardDuracion = `${this.itemForm.value.fechaInicio} / ${this.itemForm.value.fechaFin || ' Actualidad'}`,
    this.modelo.cardFechaFin = this.itemForm.value.fechaFin
    this.modelo.cardFechaInicio = this.itemForm.value.fechaInicio
    this.modelo.cardEstado = this.itemForm.value.estado
    this.modelo.cardInformacion = this.itemForm.value.informacion
    this.modelo.cardImagen = this.itemForm.value.imagen

    this.seccionService.editSeccionItem(this.modelo.id, this.modelo)
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      nombre: [this.modelo.cardTitulo, Validators.required],
      lugar: [this.modelo.cardLugar],
      descripcion: [this.modelo.cardDescripcion],
      fechaInicio: [this.modelo.cardFechaInicio],
      fechaFin: [this.modelo.cardFechaFin],
      informacion: [this.modelo.cardInformacion],
      imagen: [this.modelo.cardImagen],
      estado:[this.modelo.cardEstado]
       
    })
  }

  eliminar() {
    this.delete.emit(0)
  }
}
