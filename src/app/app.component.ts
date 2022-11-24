import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './Services/shopping.service';
import { ShoppingItem, uuidv4 } from './shoppinglist-master';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'priorities';

  description = 'keep track of stuff you need or want to buy';

  categories: string[] = [];

  needList: ShoppingItem[] = [];

  wantList: ShoppingItem[] = [];

  purchasedList: ShoppingItem[] = [];

  shoppingItem = {} as ShoppingItem;

  isButtonHidden = true;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.onRestoreFromLocalStorage()
  }

  initLists() {
    this.needList = this.shoppingService.getList(false, 'need');
    this.wantList = this.shoppingService.getList(false, 'want');
    this.purchasedList = this.shoppingService.getList(true);
    this.categories = this.shoppingService.categories;
  }

  onPurchasedChange(shoppingItem: ShoppingItem) {
    shoppingItem.purchased = true;
    this.initLists();
  }

  onSubmit(item: ShoppingItem) {
    if (!item.guid) {
      item = {
        ...item,
        purchased: false,
        category: item.category.toLowerCase(),
        guid: uuidv4(),
      };
      this.shoppingService.addItem(item);
    } else {
      item = { ...item, category: item.category.toLowerCase() };
      this.shoppingService.editItem(item);
    }
    this.onReset();
  }

  onShowAddButton(showButton: boolean) {
    this.isButtonHidden = showButton;
  }

  onReset() {
    this.initLists();
    this.isButtonHidden = true;
    this.shoppingItem = {} as ShoppingItem;
  }

  onEdit($event: ShoppingItem) {
    this.shoppingItem = { ...$event };
    this.isButtonHidden = false;
  }

  onDelete($event: string) {
    this.shoppingService.deleteItem($event);
    this.onReset();
  }

  onSaveList() {
      this.shoppingService.saveListToStorage();
  }

  onRestoreFromLocalStorage() {
    const restoredList = localStorage.getItem('shoppingList');
    if (restoredList && restoredList.length) {
      this.shoppingService.restoreList(JSON.parse(restoredList));
    }
    this.initLists();
  }
}
