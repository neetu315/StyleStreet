import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'about', path: '/about', label: 'About Us' },
  { id: 'products', path: '/products', label: 'Products' },
  { id: 'blog', path: '/blog', label: 'Blog' },
  { id: 'contact', path: '/contact', label: 'Contact' },
];

export default function Navigation({ currentPage, wishlistCount, cartCount }: { currentPage: string, navigate?: (page: string) => void, wishlistCount: number, cartCount: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/"
          className="font-display font-bold text-2xl tracking-tighter cursor-pointer flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-stone-900 text-white rounded flex items-center justify-center text-sm">
            SS
          </div>
          Style Street
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(link => (
            <Link
              key={link.id}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-stone-900 ${currentPage === link.id ? 'text-stone-900' : 'text-stone-500'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <Link 
              to="/wishlist"
              className="relative p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-stone-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link 
              to="/cart"
              className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link 
            to="/wishlist"
            className="relative text-stone-600 p-1"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-stone-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <button className="text-stone-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full top-16 left-0">
          {NAV_LINKS.map(link => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-left text-lg font-medium py-2 ${currentPage === link.id ? 'text-stone-900' : 'text-stone-500'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
