import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

import { MainService, Item } from '../../../common/main.service';
import { FilterByNamePipe } from '../../../common/filter-by-name.pipe';

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
  private date: string;
  private description: string;
  private topRated: boolean = false;

  constructor(
    public mainService: MainService,
    public filterByNamePipe: FilterByNamePipe
  ) {}

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
    const obj: Item = {
          id: Number(this.id),
          title: this.title, 
          duration: this.duration.toString(), 
          date: this.date,
          description: this.description,
          topRated: this.topRated,
        };
  	this.mainService.createItem(obj);
    this.id='';
    this.title='';
    this.duration='';
    this.date='';
    this.description='';
  }

  private find(value: string): void {
    this.filterByNamePipe.transform(value);
  }
}
