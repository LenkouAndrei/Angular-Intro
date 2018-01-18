import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

import { Item } from '../../../common/login.service';

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

  private addItem(): Item {
  	this.toggleCourseForm();
  	const date = new Date().toString();
  	return {
			id: Number(this.id),
			title: this.title, 
			duration: this.duration.toString(), 
			date,
			description: this.description,
  			}
  }
}
