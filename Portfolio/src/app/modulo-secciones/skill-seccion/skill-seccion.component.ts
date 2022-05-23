import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-seccion',
  templateUrl: './skill-seccion.component.html',
  styleUrls: ['./skill-seccion.component.css']
})
export class SkillSeccionComponent implements OnInit {

  @Input() name = ""
  @Input() type = ""
  @Input() percentage = "0"
  @Input() id = ""
  @Output() delete = new EventEmitter<number>()

  itemForm = this.fb.group({
    nombre: [ this.name , Validators.required],
    tipoSkill:[this.type],
    nivelSkill:[ this.percentage, Validators.compose([Validators.max(100), Validators.min(0)])]
  })

  constructor(private fb:FormBuilder) { }

  onSubmit() {

    this.name = this.itemForm.value.nombre
    this.type = this.itemForm.value.tipoSkill
    this.percentage = this.itemForm.value.nivelSkill

  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      nombre: [ this.name , Validators.required],
      tipoSkill:[this.type],
      nivelSkill:[ this.percentage, Validators.compose([Validators.max(100), Validators.min(0)])]
    })
  }

  eliminar() {
    this.delete.emit(0)
  }


  obtenerClases() {
    if (this.type == "soft") return 'bg-success'
    else if(this.type == 'hard') return 'bg-info'
    return ''
  }

  obtenerEstilo() {
    return `width: ${this.percentage}%`;
  }

  obtenerValorRestante() {
    return 100 -  Number(this.percentage) + 1;
  }

  obtenerEstiloRestante(){
    return `width: ${this.obtenerValorRestante() + 1}%`
  }
}

