import { NextResponse } from "next/server"
import { products } from "../../data/products"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "9")
  const search = searchParams.get("search") || ""

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()),
  )

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  return NextResponse.json({
    products: paginatedProducts,
    totalProducts: filteredProducts.length,
    currentPage: page,
    totalPages: Math.ceil(filteredProducts.length / limit),
  })
}

