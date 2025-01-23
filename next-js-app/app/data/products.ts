export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Product ${i + 1}`,
  description: `Description for Product ${i + 1}`,
  price: Math.round(Math.random() * 1000) / 100 + 10,
  image: `/placeholder.svg?height=200&width=200&text=Product${i + 1}`,
}))

