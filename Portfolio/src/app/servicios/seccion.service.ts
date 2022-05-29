import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  constructor(private http: HttpClient) { }

  getSeccionInfo(userId: string) {
    return this.http.get<any>( environment.backend + '/api/v1/seccion/?userId='+ userId);
  }

  addSeccionItem(modelo: any) {
    return this.http.post<any>(environment.backend + '/api/v1/seccion/', this.convertModeloToBackEnd(modelo));
  }

  editSeccionItem(itemId: string, modelo: any) {
    return this.http.put<any>(environment.backend + '/api/v1/seccion/'+ itemId, this.convertModeloToBackEnd(modelo));
  }

  deleteSeccionItem(itemId: string, modelo: any) {
    return this.http.delete<any>( environment.backend + '/api/v1/seccion/' + modelo.type + '/' + itemId);
  }


  convertModeloToBackEnd(modelo: any) {
    return {
      id: modelo.id,
      type: modelo.type,
      userId: environment.user,
      subtype: modelo.subtype,
      image: modelo.cardImagen,
      name: ( modelo.cardTitulo && modelo.cardTitulo != "" ? modelo.cardTitulo : modelo.name ) ,
      location: modelo.cardLugar,
      description: modelo.cardDescripcion,
      startDate: modelo.cardFechaInicio,
      endDate: modelo.cardFechaFin,
      information: modelo.cardInformacion,
      percentage: modelo.porcentaje,
    }
  }

}
