import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES_DATA, PARISHES_JAMAICA } from '../data/mockData';
import { ServiceCategory, ConstructionService } from '../types';
import { 
  Building2, Hammer, Wrench, Paintbrush, Palette, Grid, Layers, 
  HardHat, Shield, Zap, Droplet, CheckCircle2, Clock, ArrowRight, 
  Search, HelpCircle, ChevronDown, Sparkles, CheckSquare, ShieldCheck,
  FileSpreadsheet, Award
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-red-500" />,
  Hammer: <Hammer className="w-6 h-6 text-red-500" />,
  Wrench: <Wrench className="w-6 h-6 text-red-500" />,
  Paintbrush: <Paintbrush className="w-6 h-6 text-red-500" />,
  Palette: <Palette className="w-6 h-6 text-red-500" />,
  Grid: <Grid className="w-6 h-6 text-red-500" />,
  Layers: <Layers className="w-6 h-6 text-red-500" />,
  HardHat: <HardHat className="w-6 h-6 text-red-500" />,
  Shield: <Shield className="w-6 h-6 text-red-500" />,
  Zap: <Zap className="w-6 h-6 text-red-500" />,
  Droplet: <Droplet className="w-6 h-6 text-red-500" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-red-500" />,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ConstructionService | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All 12 Services' },
    { id: 'construction', label: 'General & Building' },
    { id: 'finishing', label: 'Interior & Finishing' },
    { id: 'renovation', label: 'Renovation & Remodel' },
    { id: 'specialized', label: 'Specialized Systems' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const faqs = [
    {
      q: 'Do you provide full turnkey solutions (materials & labor)?',
      a: 'Yes. E.I.T.S provides both full turnkey management (supplying certified materials, transport, equipment, and master labor) as well as labor-only specialist contracts depending on client preference.',
    },
    {
      q: 'Do you work in parishes outside of Kingston and St. Andrew?',
      a: 'Absolutely. We operate islandwide across all 14 Jamaican parishes including Montego Bay (St. James), Ocho Rios (St. Ann), Mandeville (Manchester), Portmore (St. Catherine), and Negril (Westmoreland).',
    },
    {
      q: 'How do project milestone payments work with E.I.T.S?',
      a: 'We adhere to transparent, milestone-staged billing. Typical contracts operate on an initial mobilization deposit, followed by milestone disbursements tied to verified completion stages (e.g. foundation, framing, skim coating, final snagging handover).',
    },
    {
      q: 'Are your structural works compliant with the Jamaican Building Code?',
      a: 'All our structural concrete, steel reinforcement, hurricane-tied roofing, and electrical rough-ins comply strictly with the Jamaica National Building Code, Parish Municipal Corporation regulations, and structural engineering specifications.',
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* Dedicated Page Header */}
      <PageHeader
        badge="Full Service Catalog"
        title="Construction &amp; Finishing"
        highlightedWord="Services"
        description="Explore all 12 specialized residential, commercial, structural, and luxury interior finishing services executed with master Jamaican craftsmanship."
        currentPage="Services"
        onNavigate={onNavigate}
        ctaText="Request a Custom Quote"
        onCtaClick={() => onOpenQuote()}
      />

      <section className="py-12 lg:py-20 relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'red-gloss text-white shadow-lg shadow-red-600/30'
                      : 'gloss-block text-gray-300 hover:text-white hover:border-red-500/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services (e.g., tiling, roof)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="neomorph-input w-full pl-9 pr-4 py-2.5 text-xs text-white rounded-xl outline-none"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="clay-card p-6 rounded-3xl flex flex-col justify-between group hover:border-red-500/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Image Banner */}
                <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-3xl border-b border-white/10">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-black/40 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 gloss-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {service.category}
                  </div>

                  {/* Turnaround Badge */}
                  <div className="absolute bottom-3 right-3 gloss-block px-2.5 py-1 rounded-lg text-[10px] font-bold text-red-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.estimatedTurnaround}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-2xl stat-icon-3d text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                      {iconMap[service.iconName] || <Building2 className="w-6 h-6 text-red-500" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-red-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs font-semibold text-gray-400 mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckSquare className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuote(service.name)}
                    className="red-gloss w-full py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="clay-card p-12 text-center my-8">
              <p className="text-gray-400 text-sm">No services found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 red-gloss px-6 py-2.5 rounded-full text-xs font-bold text-white uppercase"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Jamaican Standards & Engineering Guarantee Strip */}
          <div className="mt-16 clay-card p-8 sm:p-12 rounded-[32px] border border-white/10 bg-gradient-to-r from-[#121216] via-[#0E0E11] to-[#121216]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase text-white">Tropical Durability</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Formulated specifically for Caribbean climate resistance: UV elastomeric coatings, anti-mildew primers, and rust-inhibiting hardware.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase text-white">Laser-Level Precision</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Zero lippage porcelain tiling, plumb structural block-laying, and Level-5 drywall skim coating verified with optical leveling devices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 shrink-0">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase text-white">Transparent Itemized BOQ</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Clear Bills of Quantities itemizing material volume, unit labor pricing, and milestone sign-offs. No unexpected cost inflations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Service Inquiries</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Frequently Asked <span className="text-red-600">Questions</span>
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="clay-card rounded-2xl overflow-hidden border border-white/5"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-bold text-white uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-red-500 shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
