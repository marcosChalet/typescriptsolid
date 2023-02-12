import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { Persistency } from './services/persistency';
import {
  NoDiscount,
  TenPercentDiscount,
  FiftyPercentDiscount,
} from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('camiseta', 49.99));
shoppingCart.addItem(new Product('caderno', 29.99));
shoppingCart.addItem(new Product('lápis', 1.84));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
