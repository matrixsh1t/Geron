import { Storage } from './Storage';
import { TProducts } from "../scripts/types";
import products from "../data/products.json"

export class Products extends Storage {
    constructor(){
        super();
        products.forEach(item => {
            this.setProducts(item.warehouse_id, item)
        })
    }
}