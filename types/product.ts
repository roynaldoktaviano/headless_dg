export interface Product {
  _embedded: any;
  id: string;
  image: string;
  title :{
    rendered: string;
  }
  harga: string;
  slug: string;
  stok: string;
}
