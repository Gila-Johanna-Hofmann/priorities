import { Injectable } from '@angular/core';
import { shoppinglistMaster } from '../shoppinglist-master';

@Injectable({
  providedIn: 'root'
})
export class NeedListService {

  shoppingList;
  needList;

  constructor() { 
    this.shoppingList = shoppinglistMaster;
    this.needList = this.generateNeedList()
  }

  generateNeedList() {
    let list: object[] = [];
    for (let i in this.shoppingList) {
      if(this.shoppingList[i].category === 'need' && this.shoppingList[i].purchased === false) {
        list.push(this.shoppingList[i]);
      }
    }
    return list;

  }
}
