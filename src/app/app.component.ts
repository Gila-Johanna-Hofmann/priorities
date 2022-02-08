import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './Services/shopping.service';
import { ShoppingItem } from './shoppinglist-master';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'priorities';
  description = 'keep track of stuff you need or want to buy';
  needList: ShoppingItem[] = [];
  wantList: ShoppingItem[] = [];
  purchasedList: ShoppingItem[] = [];

  constructor(
    private shoppingService: ShoppingService
  ) {}

  ngOnInit(): void {
    this.needList = this.shoppingService.getList(false, 'need');
    this.wantList = this.shoppingService.getList(false, 'want');
    this.purchasedList = this.shoppingService.getList(true);
    console.log('need', this.needList);
    console.log('wantList', this.needList);
    console.log('purchasedList', this.needList);
  }

  onClick() {
    console.log("I'm a lonely, empty click-event-handler.");
  }

  onPurchasedChange(shoppingItem: ShoppingItem) {
    console.log(shoppingItem);
    
  }
}
