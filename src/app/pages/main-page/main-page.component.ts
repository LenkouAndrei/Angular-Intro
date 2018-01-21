import { Component, OnInit } from '@angular/core';

import { MainService, Item } from '../../common/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private courseList: Item[];

  constructor(public mainService: MainService) {
  }

  public ngOnInit() {
  	this.courseList = this.getList();
  }

  public getList(): Item[] {
  	return this.mainService.getList();
  }

  public itemById(id: number): Item {
  	return this.mainService.getItemById(id);
  }

  private onDeleteItem(id:number): void {
  	this.mainService.removeItem(id);
  }

  private onAddItem(obj: Item): void {
  	this.mainService.createItem(obj);
  }
}
