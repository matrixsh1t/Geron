import { TGoods, TUser } from "../scripts/types";


export class Order {
  private fullname: string;
  private country: string;
  private city: string;
  private orderProductList: TGoods[];
  private createDate: Date;
  private deliveryDate: Date;

  constructor(product: TGoods[], user: TUser) {
    this.orderProductList = [];
    this.createDate = new Date();
    this.deliveryDate = this.getDeliveryDate();
    this.getProducts(product);
    this.fullname = user.fullname;
    this.country = user.country;
    this.city = user.city;
  }

  private getProducts(products: TGoods[]) {
    products.forEach((prod) => {
      this.orderProductList.push(prod);
    });
  }

  private getDeliveryDate() {
    const deliveryDate = new Date(this.createDate);

    deliveryDate.setDate(deliveryDate.getDate() + 10);
    return deliveryDate;
  }

  order() {
    let date = `${this.deliveryDate.getDate()}.${this.deliveryDate.getMonth()}.${this.deliveryDate.getFullYear()}`;
    let totalSum: number = 0;

    console.log(`Уважаемый ${this.fullname}, вы заказали:`);
    this.orderProductList.forEach((prod) => {
      totalSum = totalSum + prod.price;
      console.log(`-${prod.name} по цене ${prod.price}`);
    });
    console.log(
      `\nОбщая сумма заказа: ${totalSum} \nДата доставки: ${date} \nАдрес доставки: ${this.country}, ${this.city} \nСпасибо за покупку!`
    );
  }
}
