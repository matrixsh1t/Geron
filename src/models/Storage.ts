import storage from "../data/storage.json";
import { TProducts, TStorage } from "../scripts/types";

export class Storage {
  private _data: TStorage[];

  constructor() {
    this._data = storage;
  }

  get allStorages() {
    return this._data;
  }

  private set updateStorage(storage: TStorage) {
    this._data = this._data.map((item) => {
      if (item.warehouse_id !== storage.warehouse_id) return item;

      return storage;
    });
  }

  protected getStorage(id: number) {
    return this._data.find((item) => item.warehouse_id === id);
  }

  protected setProducts(id: number, products: TProducts) {
    const storage = this.getStorage(id);

    storage.products.push(products);
    this.updateStorage = storage;
  }

  addProduct(whId: number, product: TProducts) {
    const storage = this.getStorage(whId);

    storage.products.push(product);

    return storage;
  }
}
