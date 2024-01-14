import { TGoods, TUser } from "./types";

export const mockGoods: TGoods[] = [
  {
    name: "Ноутбук ASUS",
    price: 12000,
  },
  {
    name: "Смартфон Samsung",
    price: 14000,
  },
  {
    name: "Телевизор LG",
    price: 13000,
  },
  {
    name: "Планшет Apple iPad",
    price: 15000,
  },
  {
    name: "Наушники Sony",
    price: 11000,
  },
  {
    name: "Кофемашина Bosch",
    price: 12500,
  },
  {
    name: "Холодильник Panasonic",
    price: 13500,
  },
  {
    name: "Утюг Philips",
    price: 10500,
  },
  {
    name: "Микроволновая печь Samsung",
    price: 11500,
  },
  {
    name: "Пылесос Dyson",
    price: 14500,
  },
];

export const mockUser: TUser = {
  fullname: "Алексей Смирнов",
  login: "alex777",
  password: "пароль3",
  country: "Беларусь",
  city: "Минск",
  age: 35,
  id: "uid03",
};
