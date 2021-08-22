export interface ProductData {
  title: string;
  items: ProductDataFields[]
}

export interface ProductDataFields {
  vendor: string;
  name: string;
  price: number | string;
  priceAmount?:number;
  is_hybrid?: boolean;
  system?: string;
}

// export interface Car extends ProductDataFields {
//   is_hybrid: boolean;
// }
//
// export interface Laptop extends ProductDataFields {
//   system: string;
// }
