export let shoppinglistMaster: ShoppingItem[] = [
  {
    title: 'TEST_Backpack',
    url: 'https://www.pinqponq.com/de/collections/sale/products/blok-large-vivid-monochrome',
    price: 45.55,
    category: 'need',
    purchased: false,
  },
  {
    title: 'TEST_Shoe',
    url: 'https://www.alohas.io/products/habibi-black-leather?variant=32485317247054',
    price: 1045.55,
    category: 'want',
    purchased: false,
  },
  {
    title: 'TEST_Boot',
    url: 'https://www.drmartens.com/de/de/p/21045001',
    price: 90.55,
    category: 'need',
    purchased: false,
  },
  {
    title: 'TEST_Bag',
    url: 'https://www.esthe.co.uk/product/beige-crossbody-bag/',
    price: 19,
    category: 'want',
    purchased: true,
  },
  {
    title: 'TEST_Hoodie',
    url: 'https://www.esthe.co.uk/product/beige-crossbody-bag/',
    price: 19,
    category: 'need',
    purchased: true,
  },
];
 
export interface ShoppingItem {
  title: string;
  url: string;
  price: number;
  category: string;
  purchased: boolean;
}
