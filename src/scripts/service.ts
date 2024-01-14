import { Order } from "../models/Order";
import { TGoods, TUser } from "./types";


// ----------- user processing -------------

const getUserArrayFromLink = async () => {
  const userArray = fetch(
    "https://run.mocky.io/v3/b1bd6eba-759d-4e61-9d45-0816794d2d0b"
  );

  return (await (await userArray).json()) as TUser[];
};

export const getSpecificUser = async () => {
  let users: TUser[] = await getUserArrayFromLink();
  let specificUser: TUser;

  users.forEach((user) => {
    if (user.login === "alex777") {
      specificUser = user;
    }
  });

  return specificUser;
};

// ----------- goods processing -------------

const getGoodsArrayFromLink = async () => {
  const goodsArray = fetch(
    "https://run.mocky.io/v3/de2f0069-2896-4b67-99cc-fbd0ff242ccf"
  );

  return (await (await goodsArray).json()) as TGoods[];
};

export const getGoods = async () => {
  let goods: TGoods[] = await getGoodsArrayFromLink();
  let goodsList: TGoods[] = goods.splice(0, 4);

  return goodsList;
};

// ----------- create a new order -------------

let products: TGoods[] = [];
let registeredUser: TUser;

export const makeOrder = async () => {
  products = await getGoods();
  registeredUser = await getSpecificUser();

  let newOrder = new Order(products, registeredUser);
  newOrder.order();
};