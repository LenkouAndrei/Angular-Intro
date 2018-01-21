import { Injectable } from '@angular/core';

export interface LoginData {
	login: string,
	password: number | string,
}

@Injectable()
export class AuthorizationService {
  private authenticated: boolean = true;
  private id: number = 0;

  constructor() { }

  public login(userData: LoginData): void {
  	localStorage.setItem(this.id.toString(), JSON.stringify(userData));
  }

  public logOut(id: string): void {
  	localStorage.removeItem(id);
  }

  public getUserInfo(id: string): string{
  	const login: string = JSON.parse(localStorage.getItem(id));
  	return login;
  }

  public isAuthenticated(): boolean {
  	return this.authenticated;
  }
}
