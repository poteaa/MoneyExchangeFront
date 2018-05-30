import { AuthGuardService } from './feature/authentication/shared/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { CurrencyComponent } from './feature/currency/currency.component';
import { AboutComponent } from './feature/about/about.component';
import { DefaultComponent } from './feature/default/default.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    { path: 'currency', component: CurrencyComponent},
    { path: 'more', component: CurrencyComponent},
    { path: 'about', component: AboutComponent},
    { path: 'default', component: DefaultComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}