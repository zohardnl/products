export interface ProductData {
  title: string;
  items: ProductDataFields[] | Car[] | Laptop[]
}

export interface ProductDataFields {
  vendor: string;
  name: string;
  price: number | string;
  priceAmount?:number;
}

export interface Car extends ProductDataFields {
  is_hybrid: boolean;
}

export interface Laptop extends ProductDataFields {
  system: string;
}
