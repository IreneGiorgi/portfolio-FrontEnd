import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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

  eventSort: Subject<void> = new Subject<void>()

  constructor(private profileService: ProfileService, private seccionService: SeccionService) {

  }


  emitSortToSkills() {
    this.eventSort.next();
  }

  ngOnInit(): void {

    this.profileService.getProfileInfo(environment.user).subscribe(
      (response) => {
        this.profile = response
      },
      (error) => {
        alert('Ocurrió un error al cargar el perfil, intente nuevamente más tarde');
      }
    );
       

    this.seccionService.getSeccionInfo(environment.user).subscribe(
      (response) => {
        for (const item of response) {

          let nItem = {
            id: item.id,
            type: item.type,
            subtype: item.subtype,
            cardImagen: item.image,
            cardTitulo: item.name,
            cardEstado: item.status,
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
  
        this.emitSortToSkills();
  
      },
      (error) => {
        alert('Ocurrió un error al cargar la información del perfil, intente nuevamente más tarde');
      }
    );
  }

}
