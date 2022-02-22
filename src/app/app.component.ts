import { Component, OnInit, ApplicationRef } from '@angular/core';
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
  categories: string[] = [];
  needList: ShoppingItem[] = [];
  wantList: ShoppingItem[] = [];
  purchasedList: ShoppingItem[] = [];
  emptyItem = {} as ShoppingItem;
  isButtonHidden = true;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.initLists();
  }

  initLists() {
    this.needList = this.shoppingService.getList(false, 'need');
    this.wantList = this.shoppingService.getList(false, 'want');
    this.purchasedList = this.shoppingService.getList(true);
    this.categories = this.shoppingService.categories;
  }

  onPurchasedChange(shoppingItem: ShoppingItem) {
    shoppingItem.purchased = true;
    this.ngOnInit();
    
  }

  onSubmit(item: ShoppingItem) {
    item = { ...item, purchased: false, category: item.category.toLowerCase() };
    this.shoppingService.addItem(item);
    this.onReset();
  }

  onShowAddButton(showButton: boolean) {
    this.isButtonHidden = showButton;
  }

  onReset() {
    this.initLists();
    this.isButtonHidden = true;
    this.emptyItem = {} as ShoppingItem;
  }
}
