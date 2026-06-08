export interface Offer {
  country: string;
  price: number;
  shipping: number;
  duty: number;
  gst: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  offers: Offer[];
}