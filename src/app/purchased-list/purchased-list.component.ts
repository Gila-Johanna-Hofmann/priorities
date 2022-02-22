import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingItem } from '../shoppinglist-master';

@Component({
  selector: 'app-purchased-list',
  templateUrl: './purchased-list.component.html',
  styleUrls: ['./purchased-list.component.css']
})
export class PurchasedListComponent implements OnInit {

  @Input()
  shoppingList: ShoppingItem[] = [];

  ngOnInit(): void {}



}
