import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-700 max-w-5xl mx-auto">
      <Helmet>
        <title>Contact Us - Style Street</title>
        <meta name="description" content="Get in touch with Style Street. We're here to help with any questions or styling advice." />
      </Helmet>
      <div className="text-center flex flex-col gap-4 pt-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Contact Style Street Fashion</h1>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto">We'd love to hear from you. Please reach out with any questions or inquiries about our trendy apparel and online clothing store.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-stone-200">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold font-display mb-8">Get in Touch</h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-800 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Email</p>
                  <p className="text-stone-600">hello@stylestreet.com</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-800 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Phone</p>
                  <p className="text-stone-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-800 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Address</p>
                  <p className="text-stone-600">123 Fashion Ave, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-100">
            <h3 className="font-bold mb-4 font-display text-lg">Follow Us</h3>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-stone-600">
              <a href="#" className="hover:text-stone-900 bg-stone-100 px-4 py-2 rounded-full transition-colors">Instagram: @StyleStreet</a>
              <a href="#" className="hover:text-stone-900 bg-stone-100 px-4 py-2 rounded-full transition-colors">Facebook</a>
              <a href="#" className="hover:text-stone-900 bg-stone-100 px-4 py-2 rounded-full transition-colors">X: @StyleStreet</a>
            </div>
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-stone-800 pl-1">Name</label>
              <input 
                type="text" 
                placeholder="Jane Doe"
                className="px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 transition-shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-stone-800 pl-1">Email</label>
              <input 
                type="email" 
                placeholder="jane@example.com"
                className="px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 transition-shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-stone-800 pl-1">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help?"
                className="px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 transition-shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-stone-800 pl-1">Message</label>
              <textarea 
                rows={5}
                placeholder="Write your message here..."
                className="px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 resize-none transition-shadow"
              ></textarea>
            </div>
            <button className="bg-stone-900 text-white font-bold py-3.5 rounded-xl hover:bg-stone-800 transition-colors mt-2 shadow-lg shadow-stone-900/10">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
