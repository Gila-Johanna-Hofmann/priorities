import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingItem } from '../shoppinglist-master';

@Component({
    selector: 'app-shopping-item-list',
    templateUrl: './shopping-item-list.component.html',
    styleUrls: ['./shopping-item-list.component.scss']
})
export class ShoppingItemListComponent {
    isPurchasedThVisible = true;

    @Input()
    listTitle = '';

    @Output()
    purchased: EventEmitter<ShoppingItem> = new EventEmitter();

    @Output()
    shoppingItem: EventEmitter<ShoppingItem> = new EventEmitter<ShoppingItem>();

    @Output()
    deleteShoppingItem: EventEmitter<string> = new EventEmitter<string>();

    _shoppingList: ShoppingItem[] = [];

    get shoppingList(): ShoppingItem[] {
        return this._shoppingList;
    }

    @Input() set shoppingList(shoppingItems: ShoppingItem[]) {
        this.isPurchasedThVisible = shoppingItems.some((shoppingItem: ShoppingItem) => !shoppingItem.purchased);
        this._shoppingList = [...shoppingItems];
    }

    onPurchased(shoppingItem: ShoppingItem) {
        this.purchased.emit(shoppingItem);
    }

    onEdit(shoppingItem: ShoppingItem) {
        this.shoppingItem.emit(shoppingItem);
    }

    onDelete(shoppingItem: ShoppingItem) {
        this.deleteShoppingItem.emit(shoppingItem.guid);
    }

}
