export interface ProductData {
  title: string;
  items: DefaultDataFields[] | Car[] | Laptop[]
}

export interface DefaultDataFields {
  vendor: string;
  name: string;
  price: number | string;
}

export interface Car extends DefaultDataFields {
  is_hybrid: boolean;
}

export interface Laptop extends DefaultDataFields {
  system: string;
}
