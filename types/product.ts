export interface Produk { 
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  link: string;
  stok?: string | number;
  harga?: string;
  _embedded : any;
  harga_diskon: string;
  description?: string;
  short_description?: string;
}

