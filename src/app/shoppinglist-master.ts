export let shoppinglistMaster: ShoppingItem[] = [
    {
        guid: '374e36fd-5212-47a9-99e3-e479bad569a2',
        title: 'Backpack',
        url: 'https://www.pinqponq.com/de/collections/sale/products/blok-large-vivid-monochrome',
        price: 45.55,
        category: 'need',
        purchased: false,
    },
    {
        guid: '75bd2588-683d-4bca-b4f2-76a25512ce85',
        title: 'Shoe',
        url: 'https://www.alohas.io/products/habibi-black-leather?variant=32485317247054',
        price: 1045.55,
        category: 'want',
        purchased: false,
    },
    {
        guid: '5f8670f4-41ae-4353-980c-83ad87927465',
        title: 'Boot',
        url: 'https://www.drmartens.com/de/de/p/21045001',
        price: 90.55,
        category: 'need',
        purchased: false,
    },
    {
        guid: '92629170-d778-46cc-8f38-c6f64cf4713c',
        title: 'Bag',
        url: 'https://www.esthe.co.uk/product/beige-crossbody-bag/',
        price: 19,
        category: 'want',
        purchased: true,
    },
    {
        guid: 'b3a6ef65-5fd0-49ef-bb89-de255a9352f0',
        title: 'Hoodie',
        url: 'https://www.esthe.co.uk/product/beige-crossbody-bag/',
        price: 19,
        category: 'need',
        purchased: true,
    },
];

export interface ShoppingItem {
    guid: string;
    title: string;
    url: string;
    price: number;
    category: string;
    purchased: boolean;
}

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};