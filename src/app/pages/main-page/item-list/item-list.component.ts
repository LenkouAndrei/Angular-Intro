import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemlistComponent implements OnInit {
  @Input() private readonly item: any;
  @Output() public onDeleteItem: EventEmitter<number> = new EventEmitter<number>();

  private fullCourseNameString: string;
  private duration: string;
  private date: string;
  private description: string;
  private id: number;

  constructor() { }

  ngOnInit() {
    this.fullCourseNameString = this.fullCourseName();
    this.duration = this.item.duration;
    this.date = this.item.date;
    this.description = this.item.description;
    this.id = this.item.id;
  }

  private deleteItem(id:number): void {
  	this.onDeleteItem.emit(id);
  }

  private fullCourseName(): string {
    return `${this.item.title} ${this.item.id}`;
  }
}
