import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import 'rxjs/operators';
import { concat } from 'rxjs/observable/concat';

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
  public courseList: Item[] = [
  {	
  	id: 1,
  	title: 'Course', 
		duration: '88', 
		date: 'February, 8 2018', 
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

  public getList(): Observable<Item> {
  	return Observable.of(this.courseList)
		.flatMap(data => data)
		.map(singleData => {
		singleData.duration = this.convertDuration(singleData.duration);
		singleData.title = singleData.title.toUpperCase();
		return singleData;
		})
		.filter(singleCourse => {
			return this.hideThisCourse(singleCourse.date);
		})
  }

  public createCourse(id: number, title: string, duration: string, date: string, description: string, topRated: boolean = false): void {
  	this.courseList.push({id, title, duration, date, description, topRated});
  }

  public getItemById(id: number): Observable<Item> {
	return Observable.of(this.courseList)
		.flatMap(data => data)
		.filter(singleCourse => singleCourse.id === id)
  }

  public removeItem(id: number): void {
  	if (window.confirm("Do you really want to delete this course?")) {
  		let indexOfCourseToDelete: number;
  		Observable.of(this.courseList)
		.flatMap(data => data)
		.filter((singleCourse, index) => {
			indexOfCourseToDelete = index;
			return singleCourse.id === id;
		})
		.subscribe(
			() => this.courseList.splice(indexOfCourseToDelete,1)
		)
  	}
  }

  public createItem(obj: Item): Item[] {
  	const arr: Item[] = [];
  	const arr2: Item[] = [];
  	arr.push(obj);
  	const obs1 = Observable.of(this.courseList, arr)
  		.flatMap(data => data)
		  .subscribe((data) => arr2.push(data));
	return arr2;
  }

  private hideThisCourse(itemData): boolean {
  	const necessaryDays = 14;

  	const currentDate = new Date();
    const simpleNumberCurrentMonth = `${currentDate.getMonth() + 1}`;
    const simpleNumberCurrentDay = `${currentDate.getDate()}`;
    const currentMonth = simpleNumberCurrentMonth.length < 2 ? `0${simpleNumberCurrentMonth}` : simpleNumberCurrentMonth;
    const currentDay = simpleNumberCurrentDay.length < 2 ? `0${simpleNumberCurrentDay}` : simpleNumberCurrentDay;
    const currentYear = currentDate.getFullYear().toString();

    const currentDateParseFormat = `${currentMonth} ${currentDay} ${currentYear}`;

    const currentDateForSort = Date.parse(currentDateParseFormat);
    const itemDataForSort = Date.parse(itemData);
    const millisecondsForNecessaryDays = 1000*60*60*24*necessaryDays;

    if ((currentDateForSort - millisecondsForNecessaryDays) < itemDataForSort) {
    	return true;
    } else {
    	return false;
    }
  }

  private convertDuration(itemDuration) {
  	const minutes = 60;
	if (itemDuration < 60) {
  	    return `${itemDuration} min`;	
  	} else {
  		const integerHours = Math.floor(itemDuration/minutes);
  		const integerMinutes = itemDuration - integerHours*minutes;
  		return `${integerHours} h ${integerMinutes} min`;
  	}
  }

  private convertData(itemData) {
  	const courseDate = new Date(Date.parse(itemData))
    const yy: string = courseDate.getFullYear().toString().slice(-2);
    let dd: string | number = courseDate.getDate();
    let mm: string | number = courseDate.getMonth()+1;

    if( dd < 10 ){
        dd= '0' + dd;
    } 
    if( mm < 10 ){
        mm = '0' + mm;
    } 
    return `${dd}/${mm}/${yy}`;
  }
}
