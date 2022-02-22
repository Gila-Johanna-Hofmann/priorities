import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../shoppinglist-master';

@Component({
  selector: 'app-want-list',
  templateUrl: './want-list.component.html',
  styleUrls: ['./want-list.component.css']
})
export class WantListComponent implements OnInit {

  @Input()
  shoppingList: ShoppingItem[] = [];

  @Output()
  purchased: EventEmitter<ShoppingItem> = new EventEmitter();

  ngOnInit(): void {}

  onPurchased(shoppingItem: ShoppingItem) {
    this.purchased.emit(shoppingItem);
  }

}
