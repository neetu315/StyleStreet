import React from 'react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CartItem } from '../data';

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  navigate: (page: string) => void;
}

export default function Cart({ cart, setCart, navigate }: CartProps) {
  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-700 max-w-5xl mx-auto">
      <Helmet>
        <title>Shopping Cart - Style Street</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col gap-2 border-b border-stone-200 pb-8">
        <h1 className="font-display text-4xl font-bold text-stone-900">Your Shopping Cart</h1>
        <p className="text-stone-600">
          {cart.length === 0 
            ? "Your clothing cart is currently empty." 
            : `You have ${cart.reduce((acc, item) => acc + item.quantity, 0)} fashion item(s) in your cart.`}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6 py-20 bg-white rounded-3xl border border-stone-200">
          <ShoppingBag className="w-16 h-16 text-stone-200" />
          <p className="text-stone-500 font-medium">Your cart is empty</p>
          <button 
            onClick={() => navigate('products')}
            className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors mt-2"
          >
            Start Shopping
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-6 p-4 bg-white rounded-2xl border border-stone-200">
                <div className="w-24 h-32 md:w-32 md:h-40 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => navigate('products')}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-500 uppercase font-medium tracking-wider">{item.category}</span>
                      <h3 className="font-bold text-lg text-stone-900">{item.name}</h3>
                      <span className="font-bold text-stone-900 mt-1">${item.price.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-stone-400 hover:text-red-500 transition-colors p-2 -mr-2"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-3 bg-stone-100 rounded-full px-3 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-stone-500 hover:text-stone-900 disabled:opacity-50 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-stone-500 hover:text-stone-900 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 sticky top-24 flex flex-col gap-6">
              <h2 className="font-display text-xl font-bold text-stone-900 border-b border-stone-200 pb-4">Order Summary</h2>
              
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4 flex justify-between items-center">
                <span className="font-bold text-stone-900">Total</span>
                <span className="font-bold text-xl text-stone-900">${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10 flex justify-center items-center gap-2 mt-2">
                Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="text-xs text-center text-stone-500 mt-2">
                Taxes are calculated at checkout.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
