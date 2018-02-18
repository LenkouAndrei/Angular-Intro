import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';

export interface LoginData {
	login: string,
	password: number | string,
}

@Injectable()
export class AuthorizationService {

  private isAuthenticatedSubject = new ReplaySubject<boolean>();
  private authenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  private loginSubject = new ReplaySubject<string>();
  private id: number = 0;

  constructor() { }

  public login(userData: LoginData): void {
    this.loginSubject.next(JSON.stringify(userData));
    this.loginSubject.asObservable()
      .subscribe(data => localStorage.setItem(this.id.toString(), data));
    this.id += 1;
  }

  public logOut(id: string): void {
    this.loginSubject.next(id);
    this.loginSubject.asObservable()
      .subscribe(key => localStorage.removeItem(key));
  }

  public getUserInfo(id: string): string{
  	const login: string = JSON.parse(localStorage.getItem(id));
  	return login;
  }

  public isAuthenticated(): Observable<boolean> {
  	return this.authenticated;
  }
}
