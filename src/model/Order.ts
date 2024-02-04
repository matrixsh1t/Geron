import { IOrder, IProduct, TBasketProduct } from "../scripts/types";
import { catalogue } from "./Catalogue";
import { user } from "./Client";
import { myAddress } from "./Delivery";

export class Order {
  private _products: TBasketProduct[] = [];
  private _order: IOrder;

  constructor() {
    this.makeBasket();
    this._order = {
      client: user,
      delivery: {
        dateTime: new Date(),
        type: myAddress,
      },
      basket: {
        products: [],
        total: 0,
      },
    };
  }

  private randomize() {
    return Math.floor(Math.random() * 50);
  }

  private makeBasket() {
    for (let index = 0; index < Array(5).length; index++) {
      const selectProduct = catalogue.products[this.randomize()];

      this._products.push(selectProduct);
    }

    return this._products;
  }

  makeOrder() {
    this._order.basket.products = this._products;
    this._order.basket.total = this._products.reduce(
      (sum, currentProduct) => sum + currentProduct.price,
      0
    );

    const products = [];
    this._order.basket.products.forEach((prod) => {
      products.push(prod);
    });

    return {
      ...this._order,
      basket: {
        ...this._order.basket,
        products: JSON.stringify(products, null),
      },
    };
  }
}

export const order = new Order();
