import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import { Product, CartItem } from './data';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(`/${page === 'home' ? '' : page}`);
  };

  const { pathname } = useLocation();
  const currentPage = pathname === '/' ? 'home' : pathname.slice(1);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
      <ScrollToTop />
      <Navigation currentPage={currentPage} navigate={handleNavigate} wishlistCount={wishlist.length} cartCount={cartCount} />
      <main className="flex-grow pt-24 pb-16 px-6 md:px-12 xl:px-6 max-w-7xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Home navigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} navigate={handleNavigate} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} navigate={handleNavigate} />} />
          <Route path="*" element={<Home navigate={handleNavigate} />} />
        </Routes>
      </main>
      <Footer navigate={handleNavigate} />
    </div>
  );
}
