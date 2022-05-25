import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import * as moment from "moment";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AutenticatorService {

  constructor(private http: HttpClient) {
  }


  login(user: string, password: string) {
    return this.http.post<any>(environment.backend +'/api/v1/login', { user, password }).subscribe(obj => {
      this.setSession(obj);
      return obj;
    })
  }


  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }


  getExpiration() {
    const expiration = localStorage.getItem("expires_at") || JSON.stringify(new Date().getTime() / 1000);
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
