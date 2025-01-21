import type { Product } from "../data/products"
import { ProductCard } from "./product-card"

export function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <div className="text-center text-gray-500">No products found.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

