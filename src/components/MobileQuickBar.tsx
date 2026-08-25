import React from 'react';
import { Phone, MapPin, Send, Home, Grid, Sparkles } from 'lucide-react';

interface MobileQuickBarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ activePage, onNavigate, onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0C]/95 backdrop-blur-xl border-t border-white/10 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5">
        
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
            activePage === 'home'
              ? 'red-gloss text-white'
              : 'gloss-block text-gray-300'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] font-black uppercase tracking-wider">Home</span>
        </button>

        {/* Services */}
        <button
          onClick={() => onNavigate('services')}
          className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
            activePage === 'services'
              ? 'red-gloss text-white'
              : 'gloss-block text-gray-300'
          }`}
        >
          <Grid className="w-4 h-4 text-red-400 mb-0.5" />
          <span className="text-[9px] font-black uppercase tracking-wider">Services</span>
        </button>

        {/* Location / Areas */}
        <button
          onClick={() => onNavigate('location')}
          className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
            activePage === 'location'
              ? 'red-gloss text-white'
              : 'gloss-block text-gray-300'
          }`}
        >
          <MapPin className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[9px] font-black uppercase tracking-wider">Areas</span>
        </button>

        {/* Quote CTA */}
        <button
          onClick={() => onNavigate('quote')}
          className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer shadow-lg transition-transform ${
            activePage === 'quote'
              ? 'red-gloss text-white border-2 border-white'
              : 'red-gloss text-white shadow-red-600/30'
          }`}
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] font-black uppercase tracking-wider">Quote</span>
        </button>

      </div>
    </div>
  );
};
