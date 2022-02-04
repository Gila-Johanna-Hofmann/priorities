import { Injectable } from '@angular/core';
import { shoppinglistMaster } from '../shoppinglist-master';

@Injectable({
  providedIn: 'root'
})
export class WantListService {

  shoppingList;
  wantList;

  constructor() { 
    this.shoppingList = shoppinglistMaster;
    this.wantList = this.generateWantList()
  }

  generateWantList() {
    let list: object[] = [];
    for (let i in this.shoppingList) {
      if(this.shoppingList[i].category === 'want' && this.shoppingList[i].purchased === false) {
        list.push(this.shoppingList[i]);
      }
    }
    return list;
  }

  getList() {
    return this.wantList;
  }
}
