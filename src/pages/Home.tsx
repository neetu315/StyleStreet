import { ArrowRight, Truck, Undo, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Home({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="flex flex-col gap-24 animate-in fade-in duration-700">
      <Helmet>
        <title>StyleStreet – Style Meets Comfort</title>
        <meta name="description" content="Discover fashion that matches your personality. Trendy, comfortable, and affordable clothing." />
      </Helmet>
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-8">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-stone-900 leading-tight">
            Discover fashion<br />that matches your <span className="text-stone-500">personality.</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
            Welcome to Style Street. At Style Street, we bring trendy, comfortable, and affordable clothing for every occasion.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={() => navigate('products')}
              className="bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center gap-2"
            >
              Shop Latest Styles
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => navigate('about')}
              className="bg-stone-200 text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-300 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 w-full bg-stone-200 aspect-[4/5] md:aspect-square lg:aspect-[4/5] object-cover rounded-3xl overflow-hidden relative group">
           <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" 
              alt="Fashion Model"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-900 text-stone-50 rounded-3xl p-10 md:p-16 flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Why Choose Our Fashion Store?</h2>
          <p className="text-stone-400">We prioritize quality clothing and customer satisfaction above everything else when you buy clothes online with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-4 p-6 bg-stone-800/50 rounded-2xl">
            <div className="w-14 h-14 rounded-full bg-stone-800 flex items-center justify-center text-white ring-1 ring-stone-700">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Premium Quality Apparel</h3>
            <p className="text-stone-400 text-sm">High-quality trendy fabrics designed to last and keep you comfortable all day.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6 bg-stone-800/50 rounded-2xl">
            <div className="w-14 h-14 rounded-full bg-stone-800 flex items-center justify-center text-white ring-1 ring-stone-700">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Fast Clothing Delivery</h3>
            <p className="text-stone-400 text-sm">Get your favorite stylish outfits delivered to your doorstep quickly and safely.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6 bg-stone-800/50 rounded-2xl">
            <div className="w-14 h-14 rounded-full bg-stone-800 flex items-center justify-center text-white ring-1 ring-stone-700">
              <Undo className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Easy Returns on Apparel</h3>
            <p className="text-stone-400 text-sm">Not the right fit? Exchange or return fashion items easily within 30 days.</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl font-bold">Featured Online Clothing Collection</h2>
            <p className="text-stone-500">Upgrade your wardrobe today with our trendy fashion pieces.</p>
          </div>
          <button 
            onClick={() => navigate('products')}
            className="text-stone-900 font-medium hover:underline hidden md:block"
          >
            View All Fashion Products
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Casual Wear", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80" },
            { name: "Streetwear", image: "https://images.unsplash.com/photo-1523398002811-999aa8e95707?w=800&q=80" },
            { name: "Formal Outfits", image: "https://images.unsplash.com/photo-1594938298596-afbb4f59fcb0?w=800&q=80" },
            { name: "Seasonal", image: "https://images.unsplash.com/photo-1434389678219-158fb7e0ce37?w=800&q=80" }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => navigate('products')}>
              <div className="aspect-[3/4] bg-stone-200 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-lg">{item.name}</h3>
              <p className="text-stone-500 text-sm">Shop Now &rarr;</p>
            </div>
          ))}
        </div>
        <button 
          onClick={() => navigate('products')}
          className="text-stone-900 font-medium hover:underline md:hidden mt-4 text-center"
        >
          View All Products
        </button>
      </section>

      {/* Social Proof / Instagram Grid */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-display text-3xl font-bold">@StyleStreet</h2>
          <p className="text-stone-500 max-w-xl">
            Follow us on Instagram for daily style inspiration. Tag us to be featured!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027c028b?w=600&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80"
          ].map((img, i) => (
            <div key={i} className="group relative aspect-square bg-stone-200 overflow-hidden rounded-2xl cursor-pointer">
              <img 
                src={img} 
                alt="Instagram post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-medium">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  <span>{120 + i * 35}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 fill-current"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  <span>{12 + i * 4}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
