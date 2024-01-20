import { Storage } from "./Storage";
import { TProducts } from "../scripts/types";
import products from "../data/products.json";

export class Products extends Storage {
  constructor() {
    super();
    products.forEach((item) => {
      this.setProducts(item.warehouse_id, item);
    });
  }

  sortByPrice(whId: number, sortOrder: "asc" | "desc"): TProducts[] {
    const storage = this.getStorage(whId);
    let newOrder: TProducts[] = [];

    newOrder = storage.products.sort((a, b) => {
      switch (sortOrder) {
        case "asc":
          return a.unit_price - b.unit_price;
        case "desc":
          return b.unit_price - a.unit_price;
        default:
          return b.unit_price - a.unit_price;
      }
    });

    return newOrder;
  }
}
