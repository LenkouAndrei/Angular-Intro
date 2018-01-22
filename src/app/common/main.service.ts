import { Injectable } from '@angular/core';

export interface Item {
	id: number,
	title: string, 
	duration: string, 
	date: string, 
	description: string,
	topRated: boolean,
}

@Injectable()
export class MainService {
  // public courseList: Item[] = [];
  public courseList: Item[] = [
  	{	
  		id: 1,
  		title: 'Course', 
		duration: '88', 
		date: 'January, 18 2018', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
		topRated: false
	},
	{	
		id: 2,
  		title: 'Task', 
		duration: '178', 
		date: 'August, 12 2015', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
		topRated: true
	},
	{	
		id: 3,
  		title: 'Page Speed', 
		duration: '38', 
		date: 'May, 5 2019', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
		topRated: false
	},
  ];

  public getList(): Item[] {
  	return this.courseList;
  }

  public createCourse(id: number, title: string, duration: string, date: string, description: string, topRated: boolean = false): void {
  	this.courseList.push({id, title, duration, date, description, topRated});
  }

  public getItemById(id: number): Item {
	return this.courseList.filter(el => el.id === id)[0];
  }

  public removeItem(id: number): void {
  	if (window.confirm("Do you really want to delete this course?")) {
  		const index = this.courseList.findIndex(el => el.id === id);
  		this.courseList.splice(index,1);
  	}
  }

  public createItem(obj: Item): void {
  	this.courseList.push(obj);
  }
}
