import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './main.service';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(allCourses: Item[]): Item[] {
  	if (allCourses.length > 1) {
	    return allCourses.sort((a: Item, b: Item) => {
	    	return Date.parse(a.date) - Date.parse(b.date)
	    });
  	} else {
  		return allCourses;
  	}
  }
}
