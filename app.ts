import { catalogue } from "./src/model/Catalogue";
import { user } from "./src/model/Client";
import { myAddress } from "./src/model/Delivery";
import { IOrder, TBasketProduct } from "./src/scripts/types";

const order: IOrder = {
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

const products: TBasketProduct[] = [];

for (let index = 0; index < Array(5).length; index++) {
  const random = Math.floor(Math.random() * 50);
  const selectProduct = catalogue.products[random];

  products.push(selectProduct);
}

order.basket = {
  products,
  total: products.reduce(
    (sum, currentProduct) => sum + currentProduct.price,
    0
  ),
};

console.log(order);
