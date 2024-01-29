import { IShop, TBasketProduct } from './../scripts/types';
import data from '../data/data.json'


export class Catalogue {
    private _data: IShop[] = []

    constructor() {
        this._data = data
    }

    get products() {
        const productList: TBasketProduct[] = []

        this._data.forEach(({products, id}) => {
            products.forEach((product) => {
                productList.push({shopId: id, ...product})
            })
        })
        return productList
    }
}

export const catalogue = new Catalogue()