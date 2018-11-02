import { Injectable } from '@angular/core';
import { HttpBackendService } from '../../../core/services/http-backend.service';
import { Login } from './login.model';
import { AuthenticationResult } from './authentication-result.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenticationService {
    private readonly loginUrl = 'login';
    private readonly logoutUrl = 'logout';

    constructor(private httpBackendService: HttpBackendService) {}

    login(data: Login): Observable<any> {
        return this.httpBackendService.post<AuthenticationResult, Login>(this.loginUrl, data)
            .map(auth => {
                this.setToken(auth.token);
                return auth;
            });
    }

    logout() {
        const auth: AuthenticationResult = { token: this.getToken(), user: null};
        this.httpBackendService.post<any, AuthenticationResult>(this.logoutUrl, auth)
            .subscribe(() => this.deleteToken());
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
