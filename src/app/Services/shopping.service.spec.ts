import { TestBed } from '@angular/core/testing';
import { NEED_LIST_EXAMPLE, PURCHASED_LIST_EXAMPLE } from '../../testing/mocks/shopping-lists.mock';
import { ShoppingItem, uuidv4 } from '../shoppinglist-master';

import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
    let service: ShoppingService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ShoppingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should generate need list', () => {
        const list = service.getList(false, 'need');
        expect(list).toEqual(NEED_LIST_EXAMPLE);
    });

    it('should get purchased list', () => {
        expect(service.getPurchasedList()).toEqual(PURCHASED_LIST_EXAMPLE);
    });

    it.each([
        { purchased: false, category: 'need', expected: NEED_LIST_EXAMPLE, },
        { purchased: true, expected: PURCHASED_LIST_EXAMPLE, }
    ])('should return list via parameter', ({ purchased, category, expected }) => {
        expect(service.getList(purchased, category)).toEqual(expected);
    });

    it('should add shopping item', () => {
        const oldShoppingItemLength = service.apiList.length;
        const newItem = {...NEED_LIST_EXAMPLE[0], guid: uuidv4()}
        service.addItem(newItem);
        expect(service.apiList).toHaveLength(oldShoppingItemLength + 1);
    });

    it('should save list to local storage', () => {
        const localStorageSetItem = localStorage.setItem;
        localStorage.setItem = jest.fn();
        service.saveListToStorage();
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith('shoppingList', '[{"guid":"374e36fd-5212-47a9-99e3-e479bad569a2","title":"TEST_Backpack","url":"https://www.pinqponq.com/de/collections/sale/products/blok-large-vivid-monochrome","price":45.55,"category":"need","purchased":false},{"guid":"75bd2588-683d-4bca-b4f2-76a25512ce85","title":"TEST_Shoe","url":"https://www.alohas.io/products/habibi-black-leather?variant=32485317247054","price":1045.55,"category":"want","purchased":false},{"guid":"5f8670f4-41ae-4353-980c-83ad87927465","title":"TEST_Boot","url":"https://www.drmartens.com/de/de/p/21045001","price":90.55,"category":"need","purchased":false},{"guid":"92629170-d778-46cc-8f38-c6f64cf4713c","title":"TEST_Bag","url":"https://www.esthe.co.uk/product/beige-crossbody-bag/","price":19,"category":"want","purchased":true},{"guid":"b3a6ef65-5fd0-49ef-bb89-de255a9352f0","title":"TEST_Hoodie","url":"https://www.esthe.co.uk/product/beige-crossbody-bag/","price":19,"category":"need","purchased":true}]');
        localStorage.setItem = localStorageSetItem;
    });

    it('should edit a shopping item', () => {
        const item = { ...NEED_LIST_EXAMPLE[0], title: 'UPDATED' };
        service.editItem(item);
        expect(service.apiList.some((item:ShoppingItem) => item.title === 'UPDATED')).toBeTruthy();
    });

    it('should delete a shopping item', () => {
        const oldShoppingItemLength = service.apiList.length;
        service.deleteItem(NEED_LIST_EXAMPLE[0].guid);
        expect(service.apiList).toHaveLength(oldShoppingItemLength - 1);
    });

    it('should restore list', () => {
        const newList: ShoppingItem[] = [{ ...NEED_LIST_EXAMPLE[1] }];
        service.restoreList(newList);
        expect(service.apiList).toEqual(newList);
    });
});
