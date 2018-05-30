import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from './../feature/authentication/shared/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req)
        let token = this.authService.getToken();
        const copiedReq = req.clone({ headers: req.headers.append('Authorization', token ? token : '')});
        return next.handle(copiedReq);
    }
}