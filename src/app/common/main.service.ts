import { Injectable } from '@angular/core';

export interface Item {
	id: number,
	title: string, 
	duration: string, 
	date: string, 
	description: string,
}

@Injectable()
export class MainService {
  public courseList: Item[] = [
  {	
  	id: 1,
  	title: 'Coures', 
		duration: '1h28min', 
		date: '16/01/17', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
	},
	{	
		id: 2,
  	title: 'Coures', 
		duration: '2h58min', 
		date: '12/08/15', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
	},
	{	
		id: 3,
  	title: 'Coures', 
		duration: '38min', 
		date: '05/01/18', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
	},
  ];

  public getList(): Item[] {
  	return this.courseList;
  }

  public createCourse(id: number, title: string, duration: string, date: string, description: string): void {
  	this.courseList.push({id, title, duration, date, description});
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
