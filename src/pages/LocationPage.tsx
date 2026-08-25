import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PARISHES_JAMAICA } from '../data/mockData';
import { 
  MapPin, Phone, Mail, Clock, Navigation, ExternalLink, 
  ShieldCheck, Compass, CheckCircle2, Truck, Calendar, ArrowRight 
} from 'lucide-react';

interface LocationPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

interface ParishDetail {
  name: string;
  region: string;
  mobilizationTime: string;
  status: 'High Active' | 'Active Daily' | 'Mobilized on Schedule';
  hub: string;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenQuote, onNavigate }) => {
  const [selectedParish, setSelectedParish] = useState('Kingston');

  const parishDetails: Record<string, ParishDetail> = {
    'Kingston': {
      name: 'Kingston',
      region: 'Corporate Area / HQ Hub',
      mobilizationTime: 'Immediate (Same Day / 24 hrs)',
      status: 'High Active',
      hub: 'Kingston HQ & Fabrication Center',
    },
    'St. Andrew': {
      name: 'St. Andrew',
      region: 'Corporate Area (Norbrook, Stony Hill, Barbican)',
      mobilizationTime: 'Immediate (Same Day / 24 hrs)',
      status: 'High Active',
      hub: 'Kingston HQ Dispatch',
    },
    'St. Catherine': {
      name: 'St. Catherine',
      region: 'Portmore, Spanish Town, Linstead',
      mobilizationTime: '24 Hours',
      status: 'Active Daily',
      hub: 'Portmore Corridor Unit',
    },
    'St. James (Montego Bay)': {
      name: 'St. James (Montego Bay)',
      region: 'Western Tourism & Commercial Corridor',
      mobilizationTime: '24 - 48 Hours',
      status: 'Active Daily',
      hub: 'Western Regional Dispatch',
    },
    'St. Ann (Ocho Rios)': {
      name: 'St. Ann (Ocho Rios)',
      region: 'North Coast (Ocho Rios, Runaway Bay)',
      mobilizationTime: '24 - 48 Hours',
      status: 'Active Daily',
      hub: 'North Coast Unit',
    },
    'Manchester': {
      name: 'Manchester',
      region: 'Central Jamaica (Mandeville, Christiana)',
      mobilizationTime: '24 - 48 Hours',
      status: 'Active Daily',
      hub: 'Central Jamaica Dispatch',
    },
  };

  const currentParishInfo = parishDetails[selectedParish] || {
    name: selectedParish,
    region: 'County Coverage Zone',
    mobilizationTime: '24 - 48 Hours',
    status: 'Mobilized on Schedule',
    hub: 'Islandwide Mobile Contractor Fleet',
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader
        badge="Islandwide Jamaican Coverage"
        title="Kingston HQ &amp;"
        highlightedWord="Parish Reach"
        description="Headquartered in Kingston, our master building and luxury finishing teams mobilize across all 14 Jamaican parishes with full logistics and equipment."
        currentPage="Location & Coverage"
        onNavigate={onNavigate}
        ctaText="Book a Site Visit"
        onCtaClick={() => onOpenQuote()}
      />

      <section className="py-12 lg:py-20 relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Left 7 Columns: Interactive Parish Map & Mobilization Engine */}
            <div className="lg:col-span-7 clay-card p-6 sm:p-8 rounded-[36px] flex flex-col justify-between relative overflow-hidden">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block">
                      Parish Mobilization Finder
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                      Jamaica 14-Parish Service Territory
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                    Active Islandwide
                  </span>
                </div>

                {/* Parish Selector Grid */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                    Click a parish to view mobilization speed &amp; status:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PARISHES_JAMAICA.map((parish) => (
                      <button
                        key={parish}
                        onClick={() => setSelectedParish(parish)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedParish === parish
                            ? 'red-gloss text-white shadow-lg shadow-red-600/30'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {parish}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Parish Detail Card */}
                <div className="gloss-block p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-500 block">
                        Selected Service Region
                      </span>
                      <h4 className="text-xl font-black uppercase text-white tracking-tight">
                        {currentParishInfo.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">{currentParishInfo.region}</p>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full red-gloss text-white">
                      {currentParishInfo.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Mobilization Speed</span>
                      <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                        <Truck className="w-4 h-4 text-red-500" />
                        {currentParishInfo.mobilizationTime}
                      </span>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl">
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Regional Hub</span>
                      <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                        <Compass className="w-4 h-4 text-red-500" />
                        {currentParishInfo.hub}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Free on-site consultation available in <strong>{selectedParish}</strong>
                    </span>
                    <button
                      onClick={() => onOpenQuote(`Site Visit in ${selectedParish}`)}
                      className="text-xs font-black uppercase text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book for {selectedParish}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Directions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400 pt-4 border-t border-white/5">
                <span>Official Business Registered Listing • Kingston, Jamaica</span>
                <a
                  href="https://maps.google.com/?q=Kingston,Jamaica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 font-bold flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Kingston HQ & Direct Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="clay-card p-6 sm:p-8 rounded-[36px] flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-1">
                    Direct Headquarters
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
                      <div className="w-12 h-12 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
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
                      <div className="w-12 h-12 rounded-xl stat-icon-3d flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block">Email Address</span>
                        <span className="text-sm sm:text-base font-black text-white group-hover:text-red-400 transition-colors">
                          contact@eitsconstruction.com
                        </span>
                      </div>
                    </a>

                    {/* Physical Address */}
                    <div className="gloss-block p-4 rounded-2xl flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl stat-icon-3d flex items-center justify-center text-red-500">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block">Headquarters Office</span>
                        <span className="text-xs sm:text-sm font-bold text-white">
                          Kingston &amp; St. Andrew, Jamaica
                        </span>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="gloss-block p-4 rounded-2xl flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl stat-icon-3d flex items-center justify-center text-red-500">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block">Working Hours</span>
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
    </div>
  );
};
