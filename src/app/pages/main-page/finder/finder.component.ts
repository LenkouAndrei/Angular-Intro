import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

import { MainService, Item } from '../../../common/main.service';

export interface FormClass {
	'form-active': boolean,
	'form-disactive': boolean,
	'form-add-course': boolean,
}
@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {
  @Output() public onAddItem: EventEmitter<number> = new EventEmitter<number>();

  private search = 'name fragment or date';
  private isformActive: boolean = false;
  private id: string;
  private title: string;
  private duration: string | number;
  private description: string;

  constructor(public mainService: MainService) {
  }

  private toggleCourseForm(): void {
  	this.isformActive = !this.isformActive;
  }

  private toggleFormClass(): FormClass {
  	return {
  				'form-active': this.isformActive,
  				'form-disactive': !this.isformActive,
  				'form-add-course': true,
  			}
  }

  private addItem(): void {
  	this.toggleCourseForm();
  	const currentDate = new Date();
    const simpleNumberCurrentMonth = `${currentDate.getMonth() + 1}`;
    const month = simpleNumberCurrentMonth.length < 2 ? `0${simpleNumberCurrentMonth}` : simpleNumberCurrentMonth;
    const currentYearDoubleNumber = currentDate.getFullYear().toString().slice(-2);
    const date = `${currentDate.getDate()}/${month}/${currentYearDoubleNumber}`;
    const obj: Item = {
          id: Number(this.id),
          title: this.title, 
          duration: this.duration.toString(), 
          date,
          description: this.description,
        };
  	this.mainService.createItem(obj);
  }
}
