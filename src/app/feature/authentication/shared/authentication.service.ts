import { Injectable } from '@angular/core';
import { HttpBackendService } from '../../../core/services/http-backend.service';
import { Login } from './login.model';
import { Authorization } from './authorization';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    private url: string = "login";

    constructor(private httpBackendService: HttpBackendService) {}

    login(data: Login): Observable<any> {
        return this.httpBackendService.post<Login>(this.url, data)
            .map(auth => this.setToken(auth.token));
    }

    logout() {
        this.deleteToken();
    }

    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }

    getToken() {
        return localStorage.getItem('token');
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    deleteToken() {
        localStorage.removeItem('token');
    }

}