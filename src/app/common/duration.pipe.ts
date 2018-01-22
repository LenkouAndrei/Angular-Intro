import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(durationString: string, minutes: number = 60): string {
  	const durationNumber = Number(durationString);
  	if (durationNumber < minutes) {
  	    return `${durationNumber} min`;	
  	} else {
  		const integerHours = Math.floor(durationNumber/minutes);
  		const integerMinutes = durationNumber - integerHours*minutes;
  		return `${integerHours} h ${integerMinutes} min`;
  	}
  }

}
