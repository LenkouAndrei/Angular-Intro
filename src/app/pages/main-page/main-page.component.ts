import { Component, OnInit } from '@angular/core';

import { LoginService, Item } from '../../common/login.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private courseList: Item[];

  constructor(public loginService: LoginService) {
  }

  public ngOnInit() {
  	this.courseList = this.getList();
  }

  public getList(): Item[] {
  	return this.loginService.getList();
  }

  public itemById(id: number): Item {
  	return this.loginService.getItemById(id);
  }

  private onDeleteItem(id:number): void {
  	this.loginService.removeItem(id);
  }

  private onAddItem(obj: Item): void {
  	this.loginService.createItem(obj);
  }
}
