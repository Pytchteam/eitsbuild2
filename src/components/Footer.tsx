import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Star, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 text-gray-400 text-xs pt-16 pb-24 md:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-3.5 group text-left cursor-pointer"
            >
              <div className="w-12 h-12 red-gloss rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-red-600/30">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white flex items-center gap-1">
                  E.I.T.S <span className="text-red-500 font-light">/</span>
                </span>
                <span className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase">
                  Construction &amp; Finishing Company
                </span>
              </div>
            </button>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
              Premier construction and finishing company in Jamaica delivering reliable building construction, luxury interior renovations, custom tiling, and precision structural work.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <button
                onClick={() => handleNavigate('reviews')}
                className="text-xs font-bold text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
              >
                5.0 Rating • 24 Google Reviews
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-2">
              {['fb', 'ig', 'in', 'wa'].map((social) => (
                <a
                  key={social}
                  href="tel:+18765550199"
                  className="w-9 h-9 gloss-block rounded-xl flex items-center justify-center font-extrabold text-[11px] text-gray-300 hover:text-red-500 hover:border-red-500/50 transition-colors uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">
              Dedicated Pages
            </h4>
            <button onClick={() => handleNavigate('home')} className="text-left hover:text-red-400 transition-colors cursor-pointer">Home</button>
            <button onClick={() => handleNavigate('services')} className="text-left hover:text-red-400 transition-colors cursor-pointer">Services Catalog</button>
            <button onClick={() => handleNavigate('projects')} className="text-left hover:text-red-400 transition-colors cursor-pointer">Projects Portfolio</button>
            <button onClick={() => handleNavigate('before-after')} className="text-left hover:text-red-400 transition-colors cursor-pointer">Before &amp; After</button>
            <button onClick={() => handleNavigate('why-us')} className="text-left hover:text-red-400 transition-colors cursor-pointer">Why Choose Us</button>
            <button onClick={() => handleNavigate('about')} className="text-left hover:text-red-400 transition-colors cursor-pointer">About E.I.T.S</button>
            <button onClick={() => handleNavigate('reviews')} className="text-left hover:text-red-400 transition-colors cursor-pointer">Client Reviews</button>
            <button onClick={() => handleNavigate('location')} className="text-left hover:text-red-400 transition-colors cursor-pointer">Location &amp; Parishes</button>
            <button onClick={() => handleNavigate('quote')} className="text-left hover:text-red-400 transition-colors font-bold text-red-400 cursor-pointer">Get a Quote</button>
          </div>

          {/* Services Offered (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">
              Core Services
            </h4>
            <button onClick={() => { onOpenQuote('General Construction'); handleNavigate('quote'); }} className="text-left hover:text-red-400 transition-colors cursor-pointer">General Construction</button>
            <button onClick={() => { onOpenQuote('Building Construction'); handleNavigate('quote'); }} className="text-left hover:text-red-400 transition-colors cursor-pointer">Building Construction</button>
            <button onClick={() => { onOpenQuote('Interior Finishing & Drywall'); handleNavigate('quote'); }} className="text-left hover:text-red-400 transition-colors cursor-pointer">Interior Finishing &amp; Drywall</button>
            <button onClick={() => { onOpenQuote('Custom Tiling & Slab Work'); handleNavigate('quote'); }} className="text-left hover:text-red-400 transition-colors cursor-pointer">Custom Porcelain Tiling</button>
            <button onClick={() => { onOpenQuote('Painting & Texturing'); handleNavigate('quote'); }} className="text-left hover:text-red-400 transition-colors cursor-pointer">Painting &amp; Weather Sealing</button>
            <button onClick={() => { onOpenQuote('Concrete Work & Driveways'); handleNavigate('quote'); }} className="text-left hover:text-red-400 transition-colors cursor-pointer">Concrete &amp; Driveways</button>
            <button onClick={() => { onOpenQuote('Roofing & Waterproofing'); handleNavigate('quote'); }} className="text-left hover:text-red-400 transition-colors cursor-pointer">Roofing &amp; Waterproofing</button>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">
              Kingston Headquarters
            </h4>
            
            <a href="tel:+18765550199" className="flex items-start gap-2.5 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>+1 (876) 555-0199</span>
            </a>

            <a href="mailto:contact@eitsconstruction.com" className="flex items-start gap-2.5 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>contact@eitsconstruction.com</span>
            </a>

            <button
              onClick={() => handleNavigate('location')}
              className="flex items-start gap-2.5 hover:text-white transition-colors text-left cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Kingston, Jamaica (Islandwide Coverage across all 14 Parishes)</span>
            </button>

            <div className="pt-2 text-[11px] text-gray-500">
              <span className="block text-gray-400 font-semibold">Hours:</span>
              <span>Mon – Sat: 7:30 AM – 6:00 PM</span>
              <span className="block text-red-400">Sun: Emergency On-Call</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} E.I.T.S / Construction &amp; Finishing Company. All Rights Reserved. • Kingston, Jamaica
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-400 font-semibold">Strength • Quality • Reliability • Craftsmanship</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl gloss-block flex items-center justify-center text-gray-300 hover:text-red-500 hover:border-red-500/50 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
