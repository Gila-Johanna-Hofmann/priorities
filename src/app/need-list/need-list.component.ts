import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../shoppinglist-master';

@Component({
  selector: 'app-need-list',
  templateUrl: './need-list.component.html',
  styleUrls: ['./need-list.component.css'],
})
export class NeedListComponent implements OnInit {
  @Input()
  shoppingList: ShoppingItem[] = [];

  @Output()
  purchased: EventEmitter<ShoppingItem> = new EventEmitter();

  ngOnInit(): void {}

  onPurchased(shoppingItem: ShoppingItem) {
    this.purchased.emit(shoppingItem);
  }
}
