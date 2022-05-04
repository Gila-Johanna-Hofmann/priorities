import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CATEGORIES_EXAMPLE, NEED_LIST_EXAMPLE, PURCHASED_LIST_EXAMPLE, WANT_LIST_EXAMPLE } from '../testing/mocks/shopping-lists.mock';
import { AppComponent } from './app.component';
import { ShoppingService } from './Services/shopping.service';
import { ShoppingItem } from './shoppinglist-master';

const LOCAL_STORAGE_SHOPPING_LIST: ShoppingItem[] = [{
    'guid': '374e36fd-5212-47a9-99e3-e479bad569a2',
    'title': 'TEST_Backpack',
    'url': 'https://www.pinqponq.com/de/collections/sale/products/blok-large-vivid-monochrome',
    'price': 45.55,
    'category': 'need',
    'purchased': false
}, {
    'guid': '75bd2588-683d-4bca-b4f2-76a25512ce85',
    'title': 'TEST_Shoe',
    'url': 'https://www.alohas.io/products/habibi-black-leather?variant=32485317247054',
    'price': 1045.55,
    'category': 'want',
    'purchased': false
}, {
    'guid': '5f8670f4-41ae-4353-980c-83ad87927465',
    'title': 'TEST_Boot',
    'url': 'https://www.drmartens.com/de/de/p/21045001',
    'price': 90.55,
    'category': 'need',
    'purchased': false
}, {
    'guid': '92629170-d778-46cc-8f38-c6f64cf4713c',
    'title': 'TEST_Bag',
    'url': 'https://www.esthe.co.uk/product/beige-crossbody-bag/',
    'price': 19,
    'category': 'want',
    'purchased': true
}, {
    'guid': 'b3a6ef65-5fd0-49ef-bb89-de255a9352f0',
    'title': 'TEST_Hoodie',
    'url': 'https://www.esthe.co.uk/product/beige-crossbody-bag/',
    'price': 19,
    'category': 'need',
    'purchased': true
}];

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let shoppingService: ShoppingService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        shoppingService = TestBed.inject(ShoppingService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });

    it('should init all shopping lists', () => {
        expect(component.needList).toEqual(NEED_LIST_EXAMPLE);
        expect(component.wantList).toEqual(WANT_LIST_EXAMPLE);
        expect(component.purchasedList).toEqual(PURCHASED_LIST_EXAMPLE);
        expect(component.categories).toEqual(CATEGORIES_EXAMPLE);
    });

    it('should restore local storage list', () => {
        localStorage.setItem('shoppingList', JSON.stringify(LOCAL_STORAGE_SHOPPING_LIST));
        component.onRestoreFromLocalStorage();
        expect(component.needList).toEqual(LOCAL_STORAGE_SHOPPING_LIST.filter((item: ShoppingItem) => item.category === 'need' && !item.purchased));
    });

    it('should change purchase status', () => {
        const shoppingItem = { ...NEED_LIST_EXAMPLE[0], purchased: true };
        component.onPurchasedChange(shoppingItem);

        expect(component.needList).toHaveLength(2);
    });

    it('should add new item to need list', () => {
        const shoppingItem = {title: 'Example', category: 'need'} as ShoppingItem
        component.onSubmit(shoppingItem);
        expect(component.needList).toHaveLength(3);
    });

    it('should update shopping item', () => {
        const shoppingItem = {...NEED_LIST_EXAMPLE[1], title: 'UPDATED'};
        component.onSubmit(shoppingItem);
        expect(component.needList).toContainEqual(shoppingItem);
    });

    it('should change add button visibility', () => {
        component.onShowAddButton(true);
        expect(component.isButtonHidden).toBeTruthy();
    });

    it('should call on edit function', () => {
        const shoppingItem = {...NEED_LIST_EXAMPLE[1], title: 'UPDATED'};
        component.onEdit(shoppingItem);
        expect(component.shoppingItem).toEqual(shoppingItem);
        expect(component.isButtonHidden).toBeFalsy();
    });

    it('should delete an shopping item', () => {
        component.onDelete(NEED_LIST_EXAMPLE[1].guid);
        expect(component.needList).toHaveLength(1);
    });

    it('should call on save list methode', () => {
        shoppingService.saveListToStorage = jest.fn();
        component.onSaveList();
        expect(shoppingService.saveListToStorage).toHaveBeenCalled();
    });
});
