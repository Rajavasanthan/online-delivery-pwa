export interface Product {
  _id?: string;
  title: string;
  imageUrl: string;
  priceList:Price[];
  inStock: boolean;
  publish: string;
  discount?: string;
  description: string;
}

export interface Price {
  _id?: string;
  price: string;
  unit: string;
}
