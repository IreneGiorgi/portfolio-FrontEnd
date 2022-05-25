import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileInfo(user: string) {
    return this.http.get<any>( environment.backend + '/api/v1/profile/'+ user);
  }

  editProfileInfo(user: string, modelo: any) {
    return this.http.put<any>(environment.backend + '/api/v1/profile/'+ user, modelo);
  }

}
