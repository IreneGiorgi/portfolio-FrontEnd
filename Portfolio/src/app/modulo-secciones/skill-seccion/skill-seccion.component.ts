import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-seccion',
  templateUrl: './skill-seccion.component.html',
  styleUrls: ['./skill-seccion.component.css']
})
export class SkillSeccionComponent implements OnInit {

  @Input() name = ""
  @Input() type = ""
  @Input() percentage = "50"

  constructor() { }

  ngOnInit(): void {
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

