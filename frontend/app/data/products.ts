export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with high-resolution camera",
    price: 699.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Powerful laptop for work and gaming",
    price: 1299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling wireless headphones",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Fitness tracker with heart rate monitor",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Tablet",
    description: "Lightweight tablet for reading and browsing",
    price: 399.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

