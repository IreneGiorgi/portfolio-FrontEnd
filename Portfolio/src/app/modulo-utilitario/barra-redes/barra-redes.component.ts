import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutenticatorService } from 'src/app/servicios/autenticator.service';

@Component({
  selector: 'app-barra-redes',
  templateUrl: './barra-redes.component.html',
  styleUrls: ['./barra-redes.component.css']
})

export class BarraRedesComponent implements OnInit {

  itemForm = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  })

  @ViewChild('closebutton') closebutton: any;


  constructor(private fb:FormBuilder, public auth: AutenticatorService) { }

  onSubmit() {
    //this.user = this.itemForm.value.user
    //this.pass = this.itemForm.value.pass

    this.auth.login(this.itemForm.value.user, this.itemForm.value.pass);
    this.closebutton.nativeElement.click();



  }

  ngOnInit(): void {
  }

}
