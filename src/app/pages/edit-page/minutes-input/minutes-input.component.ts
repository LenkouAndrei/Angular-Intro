import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { DurationPipe } from '../../../common/duration.pipe';

@Component({
  selector: 'app-minutes-input',
  templateUrl: './minutes-input.component.html',
  styleUrls: ['./minutes-input.component.css']
})
export class MinutesInputComponent implements OnInit, DoCheck {

  @Input() public durationInMinutes: string;
  @Output() onDurationChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(private durationPipe: DurationPipe) { }

  private durationStringFormat: string;
  ngOnInit() {
    this.durationStringFormat = this.durationPipe.transform(this.durationInMinutes);
  }
  ngDoCheck() {
    this.durationStringFormat = this.durationPipe.transform(this.durationInMinutes);
    this.durationChange();
  }
  private durationChange(): void {
    this.onDurationChange.emit(this.durationInMinutes);
  }
}
