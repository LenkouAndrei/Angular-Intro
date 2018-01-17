import { Component } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {
  private search = 'name fragment or date';
  private consoleEnter(): void {
  	console.log(this.search);
  }
}
