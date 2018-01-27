import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Item } from '../../../common/main.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemlistComponent implements OnInit {
  @Input() public item: Item;
  @Output() public onDeleteItem: EventEmitter<number> = new EventEmitter<number>();

  private fullCourseNameString: string;
  private duration: string;
  private date: string;
  private description: string;
  private id: number;
  private topRated: boolean;
  public oldData: string;

  constructor() { }

  ngOnInit() {
    this.fullCourseNameString = this.fullCourseName();
    this.duration = this.item.duration;
    this.date = this.item.date.slice(0,-4) + this.item.date.slice(-2);
    this.description = this.item.description;
    this.id = this.item.id;
    this.topRated = this.item.topRated;
  }

  private deleteItem(id:number): void {
  	this.onDeleteItem.emit(id);
  }

  private fullCourseName(): string {
    return `${this.item.title} ${this.item.id}`;
  }
}
