import useSWR from "swr";
import { Product } from "@/types/product";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useProducts() {
  const { data, error, isLoading } = useSWR<Product[]>('/api/produk-doran', fetcher);
  return { products: data || [], isLoading, error };
}
