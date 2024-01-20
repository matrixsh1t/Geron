import { Products } from "./src/models/Products";

const newStore = new Products();
console.log(newStore.allStorages);

class randomNumber {
    static getRandomNum() {
        return Math.floor(Math.random()*100)
    }
}

console.log(randomNumber.getRandomNum());
