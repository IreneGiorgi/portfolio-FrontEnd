import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AutenticatorService } from './autenticator.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AutenticatorService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const token = this.authService.getToken();
        if (token && this.authService.isLoggedIn()) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }

        return next.handle(request);
    } 

}