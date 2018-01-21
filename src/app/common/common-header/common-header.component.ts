import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

export interface Logo {
	src: string,
	alt: string,
	name: string,
}

export interface Login {
	name: string,
	password: number,
	placeholder: string,
}

export enum Title {
  courses = '#cources',
  login = '#login',
}

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent {
  private currentTitle: Title = Title.login;

  constructor(private authorizationService: AuthorizationService) {}

  private logo: Logo = {
  	src: '../../../assets/logo.png',
  	alt: 'raccoon',
  	name: 'raccoon'
  }
  private login: Login = {
  	name: 'Racoon Bat\'kovich',
	  password: 564123,
	  placeholder: 'Racoon name',
  }
  private authorized: boolean = false;
  private isAuthorized(): boolean {
    return this.authorizationService.isAuthenticated();
  }
  private logOff(): void {
    this.authorizationService.logOut('0');
  }
}
