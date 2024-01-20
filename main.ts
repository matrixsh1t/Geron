import { Products } from "./src/models/Products";

// class randomNumber {
//     static getRandomNum() {
//         return Math.floor(Math.random()*100)
//     }
// }

// console.log(randomNumber.getRandomNum());

const newStore = new Products();
console.log(newStore.allStorages);

const newProduct = {
  product_name: "Кофемашина",
  seller_company: "Sulpak",
  quantity: 10,
  unit_price: 450000,
  supply_id: 211,
  warehouse_id: 101,
};

// add product
console.log(newStore.addProduct(101, newProduct));
// sort ascending
console.log(newStore.sortByPrice(101, "asc"));
// sort descending
console.log(newStore.sortByPrice(102, "desc"));
