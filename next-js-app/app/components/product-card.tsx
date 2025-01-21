import Image from "next/image"
import type { Product } from "../data/products"
import { useCart } from "../contexts/cart-context"
import { Button } from "@/components/ui/button"

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
      <Button onClick={() => addToCart(product)} className="w-full">
        Add to Cart
      </Button>
    </div>
  )
}

