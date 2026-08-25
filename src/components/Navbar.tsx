import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Before & After', id: 'before-after' },
    { name: 'Projects', id: 'projects' },
    { name: 'Why E.I.T.S', id: 'why-us' },
    { name: 'About Us', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Location', id: 'location' },
    { name: 'Get a Quote', id: 'quote' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#111113] border-b border-white/5 py-2 px-4 text-xs text-gray-400 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('location')}
              className="flex items-center gap-1.5 text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Serving Kingston, St. Andrew &amp; Islandwide Jamaica</span>
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => onNavigate('reviews')}
              className="flex items-center gap-1.5 text-amber-400 font-medium hover:underline cursor-pointer"
            >
              ★ 5.0 Rating (24 Google Reviews)
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Licensed &amp; Quality Insured
            </span>
            <a 
              href="tel:+18765550199" 
              className="text-white hover:text-red-400 font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" /> +1 (876) 555-0199
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5'
            : 'bg-[#08080A]/80 backdrop-blur-md py-3.5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 red-gloss rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
                  E.I.T.S <span className="text-red-500 font-light">/</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 tracking-wider uppercase -mt-0.5">
                  Construction &amp; Finishing
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gloss-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider gap-1 text-gray-300">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'red-gloss text-white shadow-md shadow-red-600/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Medium screen navigation fallback (fewer links) */}
            <nav className="hidden lg:flex xl:hidden items-center gloss-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider gap-1 text-gray-300">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Before/After', id: 'before-after' },
                { name: 'Reviews', id: 'reviews' },
                { name: 'Location', id: 'location' },
              ].map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-2.5 py-1 rounded-full transition-all whitespace-nowrap cursor-pointer text-[11px] ${
                      isActive
                        ? 'red-gloss text-white shadow-md'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+18765550199"
                className="hidden 2xl:flex items-center gap-2 gloss-block px-3.5 py-2 rounded-full text-xs font-semibold text-gray-200 hover:border-red-500/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>+1 (876) 555-0199</span>
              </a>
              <button
                onClick={() => onNavigate('quote')}
                className="red-gloss px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg shadow-red-600/30 hover:scale-105 transition-transform cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onNavigate('quote')}
                className="red-gloss px-3 py-1.5 rounded-xl text-xs font-extrabold text-white cursor-pointer"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="gloss-block p-2 rounded-xl text-gray-200 hover:text-white cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl lg:hidden flex flex-col pt-20 px-6 pb-8 animate-fadeIn overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Navigation Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full gloss-block text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 my-auto py-6">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base sm:text-lg font-black uppercase tracking-tight py-3 px-4 rounded-2xl transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'red-gloss text-white shadow-lg shadow-red-600/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-white" />}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('quote');
              }}
              className="red-gloss w-full py-4 rounded-2xl font-extrabold text-sm uppercase tracking-wider text-white text-center shadow-xl shadow-red-600/30 cursor-pointer"
            >
              Request a Quote
            </button>
            <a
              href="tel:+18765550199"
              className="gloss-block w-full py-3.5 rounded-2xl font-bold text-sm text-white text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call +1 (876) 555-0199</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
