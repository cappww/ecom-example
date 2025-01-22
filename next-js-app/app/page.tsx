"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProductList } from "./components/product-list";
import { CartDisplay } from "./components/cart-display";
import { CartProvider } from "./contexts/cart-context";
import { Input } from "@/components/ui/input";
import type { Product } from "./data/products";

const PRODUCTS_PER_PAGE = 9;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchProducts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await fetch(
        `/api/products?page=${page}&limit=${PRODUCTS_PER_PAGE}&search=${searchTerm}`
      );
      const data = await response.json();
      setProducts((prevProducts) =>
        data.products ? [...prevProducts, ...data.products] : []
      );
      setHasMore(data.currentPage < data.totalPages);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
    fetchProducts();
  }, [searchTerm]);

  useEffect(() => {
    if (inView) {
      fetchProducts();
    }
  }, [inView]);

  return (
    <CartProvider>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Simple E-commerce
        </h1>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ProductList products={products} />
            {(loading || hasMore) && (
              <div ref={ref} className="flex justify-center items-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            )}
          </div>
          <div className="md:sticky md:top-4 h-fit">
            <CartDisplay />
          </div>
        </div>
      </main>
    </CartProvider>
  );
}
