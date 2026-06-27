import { Link } from 'react-router-dom';

export default function Footer({ navigate }: { navigate?: (page: string) => void }) {
  return (
    <footer className="bg-white border-t border-stone-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <Link 
          to="/"
          className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-stone-900 text-white rounded flex items-center justify-center text-sm">
            SS
          </div>
          Style Street
        </Link>
        <p className="text-stone-500 font-medium italic text-lg text-center">
          "Where Fashion Meets Confidence."
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
          <Link to="/" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Home</Link>
          <Link to="/products" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Products</Link>
          <Link to="/blog" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Blog</Link>
          <Link to="/contact" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Contact</Link>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-100 w-full text-center text-sm text-stone-400">
          &copy; {new Date().getFullYear()} Style Street. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
