import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileService } from './servicios/profile.service';
import { SeccionService } from './servicios/seccion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  profile: any = {};

  itemsLab: any = [];
  itemsEdu: any = [];
  itemsProy: any = [];
  itemsSkill: any = [];

  constructor(private profileService: ProfileService, private seccionService: SeccionService) {

  }


  ngOnInit(): void {

    this.profileService.getProfileInfo(environment.user).subscribe(user => {
      console.log('Recibido user: '+ user);

      
      this.profile = user
    })

    this.seccionService.getSeccionInfo(environment.user).subscribe(items => {

      for (const item of items) {

        let nItem = {
          id: item.id,
          type: item.type,
          subtype: item.subtype,
          cardImagen: item.image,
          cardTitulo: item.name,
          cardLugar: item.location,
          cardDescripcion: item.description,
          cardDuracion: `${item.startDate} / ${item.endDate || ' Actualidad'}`,
          cardFechaInicio: item.startDate,
          cardFechaFin: item.endDate,
          cardInformacion: item.information,
          porcentaje: item.percentage,
          name: item.name
        }



        if (item.type == 'card') {

          if (item.subtype == 'formEdu') {
            this.itemsEdu.push(nItem)
          }
          else if (item.subtype == 'expLab') {
            this.itemsLab.push(nItem)
          }
          else if (item.subtype == 'proyectos') {
            this.itemsProy.push(nItem)
          }

        }
        else if(item.type == 'skills') {
          this.itemsSkill.push(nItem)
        }


      }

    })
  }

}
