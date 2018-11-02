import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../feature/authentication/shared/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

}
