export interface ProductData {
  title: string;
  items: Phone[] | Car[] | Laptop[]
}

export interface DefaultDataFields {
  vendor: string;
  name: string;
  price: number | string;
  priceAmount?: number;
}

export interface Phone extends DefaultDataFields {
}

export interface Car extends DefaultDataFields {
  is_hybrid: boolean;
}

export interface Laptop extends DefaultDataFields {
  system: string;
}
