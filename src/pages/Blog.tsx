import { Helmet } from 'react-helmet-async';

export default function Blog() {
  const articles = [
    {
      title: "Top Fashion Trends This Season",
      desc: "Discover the colors, styles, and outfits dominating this season.",
      date: "Oct 12, 2023",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
    },
    {
      title: "How to Build a Versatile Wardrobe",
      desc: "Learn how to create multiple looks with a few essential pieces.",
      date: "Sep 28, 2023",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
    },
    {
      title: "Streetwear Essentials for Beginners",
      desc: "A guide to creating a stylish streetwear wardrobe.",
      date: "Sep 15, 2023",
      category: "Style",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
    },
    {
      title: "Sustainable Fashion Tips",
      desc: "Simple ways to make eco-friendly fashion choices.",
      date: "Aug 30, 2023",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-700 max-w-5xl mx-auto">
      <Helmet>
        <title>Blog - Style Street</title>
        <meta name="description" content="Fashion tips, styles, and trends from Style Street's fashion blog." />
      </Helmet>
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Fashion & Style Blog</h1>
        <p className="text-lg text-stone-600 max-w-xl">
          Inspiring confidence and ideas through our latest articles, guides, and fashion news from our online clothing store.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {articles.map((article, i) => (
          <article key={i} className="flex flex-col gap-5 group cursor-pointer">
            <div className="aspect-[16/10] bg-stone-200 rounded-3xl overflow-hidden relative">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-stone-900 border border-white/20">
                {article.category}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">{article.date}</span>
              <h2 className="font-display text-2xl font-bold group-hover:text-stone-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {article.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
