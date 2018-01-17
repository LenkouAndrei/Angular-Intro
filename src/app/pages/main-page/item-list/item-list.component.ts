import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemWithId } from '../main-page.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemlistComponent implements OnInit {
  @Input('item') private readonly itemId: ItemWithId;
  @Output() public onDeleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  private deleteItem(id:number): void {
  	this.onDeleteItem.emit(id);
  }
}
