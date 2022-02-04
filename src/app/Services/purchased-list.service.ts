import { Injectable } from '@angular/core';
import { shoppinglistMaster } from '../shoppinglist-master';

@Injectable({
  providedIn: 'root'
})
export class PurchasedListService {

  shoppingList;
  purchasedList;

  constructor() { 
    this.shoppingList = shoppinglistMaster;
    this.purchasedList = this.generatePurchasedList()
  }

  generatePurchasedList() {
    let list: object[] = [];
    for (let i in this.shoppingList) {
      if(this.shoppingList[i].purchased === true) {
        list.push(this.shoppingList[i]);
      }
    }
    return list;
  }

  getList() {
    return this.purchasedList;
  }
}
