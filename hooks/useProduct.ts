import useSWR from "swr";
import { Produk } from "@/types/product";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useProducts() {
  const { data, error, isLoading } = useSWR<Produk[]>('/api/produk-doran', fetcher);
  return { products: data || [], isLoading, error };
}
