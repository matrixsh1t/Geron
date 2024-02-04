export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IShop {
  id: string;
  name: string;
  city: string;
  address: string;
  products: IProduct[];
}

export interface IClient {
  id: string;
  firstname: string;
  lastname: string;
}

export type TDeliveryType =
  | {
      street: string;
      house: string;
      entrance?: string;
      floor?: string;
      appartment: number;
      comment?: string;
    }
  | {
      pointName: string;
      address: string;
    };

export interface IDelivery {
  dateTime: Date;
  type: TDeliveryType;
}

export type TBasketProduct = {
  shopId: string;
} & IProduct;

export interface IBasket {
  products: TBasketProduct[];
  total: number;
}

export interface IOrder {
  client: IClient;
  delivery: IDelivery;
  basket: IBasket;
}
