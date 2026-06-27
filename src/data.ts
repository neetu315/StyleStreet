export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Essential Tee",
    price: 29.99,
    category: "Men's Collection",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    isNew: true
  },
  {
    id: "p2",
    name: "Classic Jacket",
    price: 89.99,
    category: "Men's Collection",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    isNew: true
  },
  {
    id: "p3",
    name: "Vintage Denim",
    price: 59.99,
    category: "Women's Collection",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80",
    isNew: true
  },
  {
    id: "p4",
    name: "Comfort Hoodie",
    price: 49.99,
    category: "Women's Collection",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80"
  },
  {
    id: "p5",
    name: "Summer Skirt",
    price: 39.99,
    category: "Women's Collection",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80"
  },
  {
    id: "p6",
    name: "Graphic T-Shirt",
    price: 34.99,
    category: "Men's Collection",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80"
  },
  {
    id: "p7",
    name: "Leather Belt",
    price: 24.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80"
  },
  {
    id: "p8",
    name: "Aviator Sunglasses",
    price: 19.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80"
  },
  {
    id: "p9",
    name: "Canvas Bag",
    price: 44.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1554342872-034a06541bad?w=600&q=80"
  }
];
