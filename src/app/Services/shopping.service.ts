import { Injectable } from '@angular/core';
import { ShoppingItem, shoppinglistMaster } from '../shoppinglist-master';

@Injectable({
    providedIn: 'root',
})
export class ShoppingService {
    apiList = [...shoppinglistMaster];

    categories = this.getUniqueCategories();

    generateNeedList(purchased: boolean, category?: string) {
        return this.apiList.filter((shoppingItem: ShoppingItem) => {
            return shoppingItem.category === category && shoppingItem.purchased === purchased;
        });
    }

    getPurchasedList() {
        const shoppingApiItems = this.apiList;
        return shoppingApiItems.filter((shoppingItem: ShoppingItem) => shoppingItem.purchased);
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
        this.apiList = [...this.apiList.map((item: ShoppingItem) => item.guid === shoppingItem.guid ? shoppingItem : item)];
    }

    deleteItem(shoppingItemGuid: string) {
        this.apiList = [...this.apiList.filter((item: ShoppingItem) => item.guid !== shoppingItemGuid)];
    }

    getUniqueCategories() {
        let unfiltered = this.apiList.map((shoppingItem) => shoppingItem.category);
        return unfiltered.filter((value, index) => unfiltered.indexOf(value) === index);
    }

    saveListToStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(this.apiList));
    }

    restoreList(shoppingItemList: ShoppingItem[]) {
        this.apiList = [...shoppingItemList];
    }
}
