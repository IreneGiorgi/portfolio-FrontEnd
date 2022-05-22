import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  @Input() type = ""
  @Input() name = "Nombre de Seccion"

  constructor() { }

  ngOnInit(): void {
  }

}
