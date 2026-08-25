import React, { useState } from 'react';
import { 
  Building2, 
  Hammer, 
  Wrench, 
  Paintbrush, 
  Palette, 
  Grid, 
  Layers, 
  HardHat, 
  Shield, 
  Zap, 
  Droplet, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'Paintbrush': return <Paintbrush {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Grid': return <Grid {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'HardHat': return <HardHat {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Droplet': return <Droplet {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services (12)' },
    { id: 'construction', label: 'Building & Construction' },
    { id: 'finishing', label: 'Interior Finishing & Tiling' },
    { id: 'renovation', label: 'Renovations' },
    { id: 'specialized', label: 'Roofing, MEP & Repairs' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 relative bg-[#09090B] border-t border-white/5">
      {/* Ambient background red beam */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-red-500 font-extrabold">
                Comprehensive Contracting
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              Our Construction &amp; <span className="text-red-600">Finishing</span> Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              From reinforced structural concrete to high-end Italian porcelain tiling and bespoke drywall ceilings, 
              we handle complete residential and commercial projects across Jamaica.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="gloss-block px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-300 flex items-center gap-2">
              <span className="text-red-500 font-extrabold">12+</span> Core Disciplines Under One Roof
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'red-gloss text-white shadow-lg shadow-red-600/25'
                  : 'gloss-block text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="clay-card gloss-block-interactive flex flex-col justify-between overflow-hidden group"
            >
              {/* Image & Overlay Header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/40 to-transparent" />
                
                {/* 3D Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 shadow-xl border border-white/20">
                  {getIcon(service.iconName)}
                </div>

                {/* Turnaround Badge */}
                <div className="absolute top-4 right-4 gloss-block px-3 py-1.5 rounded-full text-[11px] font-bold text-gray-300 flex items-center gap-1.5 backdrop-blur-md">
                  <Clock className="w-3.5 h-3.5 text-red-400" />
                  <span>{service.estimatedTurnaround}</span>
                </div>

                {/* Tagline over image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-wider text-red-400 font-extrabold block">
                    {service.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-black uppercase text-white tracking-tight drop-shadow-md">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full py-3.5 px-4 rounded-xl gloss-block text-xs font-black uppercase tracking-wider text-white hover:border-red-500/60 hover:text-red-400 transition-all flex items-center justify-center gap-2 group-hover:bg-red-600/10 cursor-pointer"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
