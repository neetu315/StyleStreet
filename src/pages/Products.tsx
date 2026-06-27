import React, { useState } from 'react';
import { Filter, Heart, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { PRODUCTS, Product, CartItem } from '../data';

interface ProductsProps {
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function Products({ wishlist, setWishlist, cart, setCart }: ProductsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: "Men's Collection",
      items: ["Graphic T-Shirts", "Hoodies", "Jeans", "Jackets"]
    },
    {
      title: "Women's Collection",
      items: ["Dresses", "Tops", "Skirts", "Outerwear"]
    },
    {
      title: "Accessories",
      items: ["Caps", "Bags", "Sunglasses", "Belts"]
    }
  ];

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some(item => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const filteredProducts = PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-700">
      <Helmet>
        <title>Products - Style Street</title>
        <meta name="description" content="Shop our latest fashion collection including trendy men's and women's clothing." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/", 
              "@type": "Product", 
              "name": "Jacket",
              "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
              "description": "Premium-quality fabric for long-lasting wear",
              "brand": {
                "@type": "Brand",
                "name": "Stylestreet"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://stylestreet-08.netlify.app/products",
                "priceCurrency": "USD",
                "price": "89"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between border-b border-stone-200 pb-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-4xl font-bold text-stone-900">Our Fashion Products</h1>
          <p className="text-stone-600">Discover our latest collection of trendy clothing and apparel.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
          <div className="relative w-full sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
             <input
               type="text"
               placeholder="Search products..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-9 pr-4 py-2 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 text-sm transition-shadow"
             />
          </div>
          <button className="flex justify-center items-center w-full sm:w-auto gap-2 border border-stone-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter Ideas
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-56 flex-shrink-0 flex flex-col gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="font-bold text-stone-900 uppercase text-xs tracking-widest">{cat.title}</h3>
              <ul className="flex flex-col gap-3">
                {cat.items.map((item, j) => (
                  <li key={j}>
                    <button 
                      onClick={() => setSearchQuery(item)}
                      className="text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors text-left w-full flex justify-between items-center group"
                    >
                      {item}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 bg-stone-50 rounded-2xl border border-stone-200">
              <Search className="w-12 h-12 text-stone-300" />
              <p className="text-stone-500 font-medium">No products found matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-sm font-bold text-stone-900 hover:underline mt-2"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filteredProducts.map((product) => {
            const isWishlisted = wishlist.some(item => item.id === product.id);
            return (
              <div key={product.id} className="group cursor-pointer flex flex-col gap-3">
                <div className="aspect-[3/4] bg-stone-200 rounded-2xl overflow-hidden relative">
                  {product.isNew && (
                     <div className="absolute top-4 left-4 bg-white text-stone-900 shadow-sm border border-stone-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10">
                       New
                     </div>
                  )}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors z-10 shadow-sm"
                    aria-label="Toggle wishlist"
                  >
                    <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-400'}`} />
                  </button>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <span className="text-xs text-stone-500 uppercase font-medium tracking-wider">{product.category}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-stone-900 truncate pr-2">{product.name}</h3>
                    <span className="font-bold text-stone-900">${product.price.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="mt-2 w-full bg-stone-100 hover:bg-stone-200 text-stone-900 font-medium py-2 rounded-lg text-sm transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
