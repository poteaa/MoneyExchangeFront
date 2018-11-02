import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/authentication.service';
import { Login } from '../shared/login.model';
import { Router } from '@angular/router';
import { AuthenticationResult } from '../shared/authentication-result.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  authenticated = false;
  error: string;
  userName: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.authenticated = this.authenticationService.isAuthenticated();
  }

  onLogin(form: NgForm) {
    const login: Login = new Login(form.value.username, form.value.password);
    this.authenticationService.login(login)
      .subscribe(
        (auth: AuthenticationResult) => {
          this.authenticated = true;
          this.userName = auth.user.username;
          this.router.navigate(['/home']);
        },
        error => {
          this.authenticated = false;
          console.log('Login error: ', error);
          this.error = 'Username or password incorrect';
        });
  }

  onLogout() {
    this.authenticationService.logout();
    this.authenticated = false;
    this.router.navigate(['/home']);
  }

}
