import { Injectable } from '@angular/core';
import { shoppinglistMaster, ShoppingItem } from '../shoppinglist-master';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  apiList = [...shoppinglistMaster];

  categories = this.apiList.map((shoppingItem) => shoppingItem.category);

  generateNeedList(purchased: boolean, category?: string) {
    let list: ShoppingItem[] = [];
    let shoppingApiItems = this.apiList;
    for (let i in shoppingApiItems) {
      if (
        shoppingApiItems[i].category === category &&
        shoppingApiItems[i].purchased === purchased
      ) {
        list.push(shoppingApiItems[i]);
      }
    }
    return list;
  }

  getPurchasedList() {
    let list: ShoppingItem[] = [];
    let shoppingApiItems = this.apiList;
    for (let i in shoppingApiItems) {
      if (shoppingApiItems[i].purchased) {
        list.push(shoppingApiItems[i]);
      }
    }
    return list;
  }

  getList(purchased: boolean, category?: string) {
    if (purchased) {
      return this.getPurchasedList();
    }
    return this.generateNeedList(purchased, category);
  }

  addItem(item: ShoppingItem) {
    this.apiList = [...this.apiList, item];
  }

  editItem(shoppingItem: ShoppingItem) {
    this.apiList = [...this.apiList.map((item: ShoppingItem) => item.title === shoppingItem.title ? shoppingItem : item)]
  }
}
