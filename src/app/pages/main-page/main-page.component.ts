import { Component, OnInit, OnChanges } from '@angular/core';

import { MainService, Item } from '../../common/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private courseList: Item[] = [];
  public message: string = 'No data. Fill free to add new course.';

  constructor(public mainService: MainService) {
  }

  public ngOnInit() {
  	this.getList();
  }

  public getList(): void {
  	this.mainService.getList()
      .subscribe(
        courseListItems => this.courseList.push(courseListItems),
        err => console.log(err),
        () => console.log('done')
      )
      .unsubscribe();
  }

  public itemById(id: number): Item {
    let item: Item;
    this.mainService.getItemById(id)
  	  .subscribe(
        courseListItems => {
          item = courseListItems;
          return courseListItems;
        },
        err => console.log(err),
        () => console.log('done')
      );
      return item;
  }

  private onDeleteItem(id:number): void {
  	this.mainService.removeItem(id);
  }

  private onAddItem(obj: Item): void {
  	this.courseList = this.mainService.createItem(obj);
    console.log(this.courseList);
  }

  public isCourseListEmpty(): boolean {
    return this.courseList.length ? false : true
  }
}
