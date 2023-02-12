import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { ShoppingCart } from './shopping-cart';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio...');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()}R$ foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
