import { Component } from '@angular/core';

export interface Item {
	title: string, 
	duration: string, 
	date: string, 
	description: string,
}

export interface ItemWithId {
	item: Item,
	id: number,
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  private courseList: Item[] = [
  	{	
  		title: 'Coures', 
		duration: '1h28min', 
		date: '16/01/17', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
	},
	{	
  		title: 'Coures', 
		duration: '2h58min', 
		date: '12/08/15', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
	},
	{	
  		title: 'Coures', 
		duration: '38min', 
		date: '05/01/18', 
		description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
	},
  ];

  public itemWithId(id: number): ItemWithId {
  	const newId: number = id + 1;
  	const itemId: ItemWithId = {item: this.courseList[id], id: newId}
  	return itemId;
  }

  private onDeleteItem(id:number): void {
  	const oldId: number = id - 1;
  	console.log(oldId);
  }
}
