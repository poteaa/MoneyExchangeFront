import { ConverterModule } from './../feature/converter/converter.module';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpBackendService } from './services/http-backend.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ConverterService } from '../feature/converter/shared/converter.service';
import { SharedModule } from './../shared/shared.module';
import { AuthenticationModule } from './../feature/authentication/authentication.module';
import { AuthenticationService } from '../feature/authentication/shared/authentication.service';
import { AboutModule } from '../feature/about/about.module';
import { CurrencyModule } from '../feature/currency/currency.module';
import { AuthGuardService } from '../feature/authentication/shared/auth-guard.service';
import { DefaultModule } from '../feature/default/default.module';
import { AuthInterceptor } from '../shared/auth.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        AuthenticationModule,        
        ConverterModule,
        CurrencyModule,
        AboutModule,
        DefaultModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        HttpBackendService,
        ConverterService,
        AuthenticationService,
        AuthGuardService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ]
})
export class CoreModule {

}