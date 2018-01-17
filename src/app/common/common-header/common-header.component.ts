import { Component } from '@angular/core';

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
}
