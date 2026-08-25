import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, ShieldCheck, Compass } from 'lucide-react';
import { PARISHES_JAMAICA } from '../data/mockData';

export const LocationMapSection: React.FC = () => {
  const [selectedParish, setSelectedParish] = useState('Kingston');

  return (
    <section id="location" className="py-16 lg:py-24 relative bg-[#09090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Kingston HQ &amp; Islandwide Coverage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Our Location &amp; <span className="text-red-600">Service Reach</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Headquartered in Kingston, our specialized construction, renovation, and finishing crews operate across all 14 Jamaican parishes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Jamaican Service Territory & Interactive Map View (7 cols) */}
          <div className="lg:col-span-7 clay-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block">
                  Service Territory
                </span>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">
                  Jamaica Islandwide Coverage
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                Active Crews
              </span>
            </div>

            {/* Stylized Interactive Map Graphic */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0C0E] h-72 sm:h-80 p-4 flex flex-col justify-between">
              
              {/* Map background grid */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{
                  backgroundImage: 'radial-gradient(#FF2E2E 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Map Pins on Jamaica */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="gloss-block px-3 py-1.5 rounded-xl text-[11px] font-bold text-gray-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>Selected: {selectedParish}</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Kingston,Jamaica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="red-gloss px-3 py-1.5 rounded-xl text-[10px] font-black uppercase text-white flex items-center gap-1 hover:scale-105 transition-transform"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Parish Interactive Chips */}
                <div className="my-auto">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-2 text-center">
                    Select a Parish to check mobilization:
                  </span>
                  <div className="flex flex-wrap justify-center gap-1.5 max-h-36 overflow-y-auto p-1">
                    {PARISHES_JAMAICA.map((p) => (
                      <button
                        key={p}
                        onClick={() => setSelectedParish(p)}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                          selectedParish === p
                            ? 'red-gloss text-white shadow-md'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobilization Status Footer */}
                <div className="gloss-block p-3 rounded-xl flex items-center justify-between text-xs text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-red-500" />
                    <span>Direct mobilization available to <strong>{selectedParish}</strong></span>
                  </span>
                  <span className="text-red-400 font-bold text-[11px]">Free Site Quote</span>
                </div>
              </div>

            </div>

            {/* Bottom Quick Links */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400 pt-4 border-t border-white/5">
              <span>Main Office: Kingston, Jamaica (Business listing registered)</span>
              <a
                href="https://maps.google.com/?q=Kingston,Jamaica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 font-bold flex items-center gap-1"
              >
                <span>Get Directions</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Business Contact & Hours Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Card */}
            <div className="clay-card p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-1">
                  Direct Office
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-6">
                  E.I.T.S / Construction &amp; Finishing
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href="tel:+18765550199"
                    className="gloss-block p-4 rounded-2xl flex items-center gap-4 hover:border-red-500/50 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Phone / WhatsApp</span>
                      <span className="text-sm sm:text-base font-black text-white group-hover:text-red-400 transition-colors">
                        +1 (876) 555-0199
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@eitsconstruction.com"
                    className="gloss-block p-4 rounded-2xl flex items-center gap-4 hover:border-red-500/50 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Email Address</span>
                      <span className="text-sm sm:text-base font-black text-white group-hover:text-red-400 transition-colors">
                        contact@eitsconstruction.com
                      </span>
                    </div>
                  </a>

                  {/* Location Address */}
                  <div className="gloss-block p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl stat-icon-3d flex items-center justify-center text-red-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Headquarters</span>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        Kingston &amp; St. Andrew, Jamaica
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="gloss-block p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl stat-icon-3d flex items-center justify-center text-red-500">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Operating Hours</span>
                      <span className="text-xs sm:text-sm font-bold text-white block">
                        Mon – Sat: 7:30 AM – 6:00 PM
                      </span>
                      <span className="text-[11px] text-red-400 font-semibold">
                        Sun: Emergency Repairs On-Call
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Call to Action Button */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href="tel:+18765550199"
                  className="red-gloss w-full py-4 rounded-2xl font-black uppercase text-xs sm:text-sm tracking-wider text-white text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us Now: +1 (876) 555-0199</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
