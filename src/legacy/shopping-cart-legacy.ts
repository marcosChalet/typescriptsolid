type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, curr) => total + curr.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio...');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()}R$ foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('O carrinho de compras foi limpo');
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'camiseta', price: 49.99 });
shoppingCartLegacy.addItem({ name: 'caderno', price: 29.99 });
shoppingCartLegacy.addItem({ name: 'lápis', price: 1.84 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
console.log(shoppingCartLegacy.orderStatus);
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
