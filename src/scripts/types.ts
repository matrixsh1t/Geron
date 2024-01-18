export type TProducts = {
    "product_name": string,
    "seller_company": string,
    "quantity": number,
    "unit_price": number,
    "supply_id": number,
    "warehouse_id": number
  }

  export type TStorage = {
    "city": string,
    "name": string,
    "address": string,
    "warehouse_id": number,
    "products":TProducts[]
  }