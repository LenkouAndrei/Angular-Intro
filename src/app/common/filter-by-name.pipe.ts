import { Pipe, PipeTransform } from '@angular/core';

import { MainService, Item } from './main.service';

@Pipe({
  name: 'filterByName',
  pure: false
})
export class FilterByNamePipe implements PipeTransform {

  constructor(public mainService: MainService) {}

  transform(value: string, args?: any): Item[] {
  	const a: Item[] = this.mainService.courseList.filter(courseListItem => courseListItem.title.toUpperCase() === value.toUpperCase());
  	return this.mainService.courseList = a;
  }

}
