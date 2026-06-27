import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className="flex flex-col gap-20 animate-in fade-in duration-700">
      <Helmet>
        <title>About Us - Style Street</title>
        <meta name="description" content="Learn about Style Street's mission to make fashionable clothing accessible to everyone." />
      </Helmet>
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900">About Style Street</h1>
          <div className="text-stone-600 text-lg flex flex-col gap-4">
            <p>
              Style Street was founded with a simple mission: to make fashionable clothing and trendy apparel accessible to everyone looking to buy clothes online.
            </p>
            <p>
              We believe that style is a form of self-expression. Our fashion boutique team carefully selects designs that combine comfort, quality, and modern clothing trends, allowing you to build a wardrobe that reflects who you truly are in the modern fashion world.
            </p>
          </div>
          <div className="mt-4 p-6 bg-stone-100 rounded-2xl border-l-4 border-stone-900">
            <h3 className="font-bold text-xl mb-2">Our Fashion Mission</h3>
            <p className="text-stone-600 italic">"To inspire confidence through stylish, affordable, and comfortable clothing."</p>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" 
               alt="Store Interior"
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-stone-50 rounded-3xl p-12 md:p-16 text-center flex flex-col gap-12">
        <h2 className="font-display text-3xl font-bold">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
             <h3 className="font-bold text-xl text-white">Quality First</h3>
             <p className="text-stone-400">Exceptional materials and craftsmanship in every piece we offer.</p>
          </div>
          <div className="flex flex-col gap-3">
             <h3 className="font-bold text-xl text-white">Customer Satisfaction</h3>
             <p className="text-stone-400">Dedicated support to ensure you love what you wear.</p>
          </div>
          <div className="flex flex-col gap-3">
             <h3 className="font-bold text-xl text-white">Sustainable Practices</h3>
             <p className="text-stone-400">Committed to eco-friendly sourcing and sustainable manufacturing.</p>
          </div>
          <div className="flex flex-col gap-3">
             <h3 className="font-bold text-xl text-white">Affordable Fashion</h3>
             <p className="text-stone-400">Styles that elevate your look without breaking the bank.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
