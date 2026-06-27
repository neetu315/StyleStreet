import React from 'react';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Product } from '../data';

interface WishlistProps {
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
  navigate: (page: string) => void;
}

export default function Wishlist({ wishlist, setWishlist, navigate }: WishlistProps) {
  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-700">
      <Helmet>
        <title>Wishlist - Style Street</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col gap-2 border-b border-stone-200 pb-8">
        <h1 className="font-display text-4xl font-bold text-stone-900">Your Fashion Wishlist</h1>
        <p className="text-stone-600">
          {wishlist.length === 0 
            ? "You don't have any fashion items in your wishlist." 
            : `You have ${wishlist.length} trendy clothing item${wishlist.length === 1 ? '' : 's'} saved.`}
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6 py-20 bg-white rounded-3xl border border-stone-200">
          <Heart className="w-16 h-16 text-stone-200" />
          <p className="text-stone-500 font-medium">Your wishlist is empty</p>
          <button 
            onClick={() => navigate('products')}
            className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors mt-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {wishlist.map((product) => (
            <div key={product.id} className="group flex flex-col gap-3">
              <div className="aspect-[3/4] bg-stone-200 rounded-2xl overflow-hidden relative cursor-pointer" onClick={() => navigate('products')}>
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-white text-stone-900 shadow-sm border border-stone-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10">
                     New
                  </div>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                  }}
                  className="absolute top-4 right-4 bg-white/90 text-red-500 p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors z-10 shadow-sm"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
