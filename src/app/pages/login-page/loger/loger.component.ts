import { Component, OnInit } from '@angular/core';

import { AuthorizationService, LoginData } from '../../../common/authorization.service';

@Component({
  selector: 'app-loger',
  templateUrl: './loger.component.html',
  styleUrls: ['./loger.component.css']
})
export class LogerComponent {
	private login: string;
	private password: number | string;

  	constructor(public authorizationService: AuthorizationService) {}

	private makeLog(): void {
		if (this.login.length !== 0 && this.password.toString().length !== 0) {
			const userData: LoginData = {login: this.login, password: this.password};
			
			this.authorizationService.login(userData);	
			this.login = '';	
			this.password = '';	
		}
	}
}
