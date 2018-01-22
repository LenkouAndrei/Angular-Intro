import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appActualCourse]'
})
export class ActualCourseDirective implements OnInit{
  @Input('appActualCourse') private itemData: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
  	this.addBorderIfIsNecessary();
  }

  private addBorderIfIsNecessary(): void {
  	const styled = this.el.nativeElement.style;
  	const necessaryDays = 14;

  	const currentDate = new Date();
    const simpleNumberCurrentMonth = `${currentDate.getMonth() + 1}`;
    const simpleNumberCurrentDay = `${currentDate.getDate()}`;
    const currentMonth = simpleNumberCurrentMonth.length < 2 ? `0${simpleNumberCurrentMonth}` : simpleNumberCurrentMonth;
    const currentDay = simpleNumberCurrentDay.length < 2 ? `0${simpleNumberCurrentDay}` : simpleNumberCurrentDay;
    const currentYear = currentDate.getFullYear().toString();

    const itemDataArray = this.itemData.split('/');
    const itemDataParseFormat = [itemDataArray[1], itemDataArray[0], itemDataArray[2]].join(' ');
    const currentDateParseFormat = `${currentMonth} ${currentDay} ${currentYear}`;

    const currentDateForSort = Date.parse(currentDateParseFormat);
    const itemDataForSort = Date.parse(itemDataParseFormat);
    const millisecondsForNecessaryDays = 1000*60*60*24*necessaryDays;

    if (currentDateForSort < itemDataForSort) {
    	styled.borderWidth = '3px';
    	styled.borderStyle = 'solid';
    	styled.borderColor = 'blue';
    } else if (itemDataForSort >= currentDateForSort - millisecondsForNecessaryDays) {
      styled.borderWidth = '3px';
    	styled.borderStyle = 'solid';
    	styled.borderColor = 'green';
    }
  }
}
