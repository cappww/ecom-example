"use client"

import { useState } from "react"
import { ProductList } from "./components/product-list"
import { CartDisplay } from "./components/cart-display"
import { products } from "./data/products"
import { CartProvider } from "./contexts/cart-context"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <CartProvider>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Simple E-commerce</h1>
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
            <ProductList products={filteredProducts} />
          </div>
          <div>
            <CartDisplay />
          </div>
        </div>
      </main>
    </CartProvider>
  )
}

