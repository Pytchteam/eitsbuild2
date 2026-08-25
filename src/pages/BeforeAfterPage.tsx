import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { BEFORE_AFTER_DATA } from '../data/mockData';
import { Sparkles, MapPin, CheckCircle2, ArrowRight, Layers, Sliders } from 'lucide-react';

interface BeforeAfterPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const BeforeAfterPage: React.FC<BeforeAfterPageProps> = ({ onOpenQuote, onNavigate }) => {
  const [selectedTransformation, setSelectedTransformation] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const currentItem = BEFORE_AFTER_DATA[selectedTransformation] || BEFORE_AFTER_DATA[0];

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader
        badge="Real Client Transformations"
        title="Before &amp; After"
        highlightedWord="Showcase"
        description="Experience the visual contrast and structural quality of our Jamaican renovations. Drag the interactive sliders to reveal the craftsmanship."
        currentPage="Before & After"
        onNavigate={onNavigate}
        ctaText="Plan Your Transformation"
        onCtaClick={() => onOpenQuote()}
      />

      <section className="py-12 lg:py-20 relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transformation Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {BEFORE_AFTER_DATA.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedTransformation(index);
                  setSliderPos(50);
                }}
                className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  selectedTransformation === index
                    ? 'red-gloss text-white shadow-xl shadow-red-600/30'
                    : 'gloss-block text-gray-300 hover:text-white hover:border-red-500/40'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{item.category}</span>
              </button>
            ))}
          </div>

          {/* Interactive Split View Card */}
          <div className="clay-card p-6 sm:p-10 rounded-[36px] overflow-hidden border border-white/15 shadow-2xl">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
              <div>
                <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block">
                  Interactive Comparison
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  {currentItem.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-amber-400 mt-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{currentItem.location}</span>
                </div>
              </div>

              {/* Quick Percentage Presets */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-bold uppercase mr-1 hidden sm:inline">View:</span>
                {[0, 25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setSliderPos(pct)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      sliderPos === pct
                        ? 'red-gloss text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {pct === 0 ? 'Before' : pct === 100 ? 'After' : `${pct}%`}
                  </button>
                ))}
              </div>
            </div>

            {/* Draggable Slider Canvas */}
            <div className="relative w-full h-80 sm:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/15 select-none touch-none">
              
              {/* After Image (Full background) */}
              <img
                src={currentItem.afterImage}
                alt="After E.I.T.S Finish"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={currentItem.beforeImage}
                  alt="Before E.I.T.S Work"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: '100%',
                    minWidth: '100%',
                    objectPosition: 'left center',
                  }}
                />
                {/* Vintage/Rough Filter on Before for realistic effect */}
                <div className="absolute inset-0 bg-amber-950/20 backdrop-contrast-125" />
              </div>

              {/* Vertical Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none z-10"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full red-gloss border-2 border-white flex items-center justify-center text-white shadow-xl shadow-red-600/50">
                  <Sliders className="w-4 h-4" />
                </div>
              </div>

              {/* Floating Status Badges */}
              <div className="absolute top-4 left-4 gloss-block px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-lg pointer-events-none z-10">
                BEFORE (Initial Condition)
              </div>
              <div className="absolute top-4 right-4 red-gloss px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-lg pointer-events-none z-10">
                AFTER (E.I.T.S Finished)
              </div>

              {/* Invisible Range Input for Draggable Scrubbing */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={handleSliderMove}
                aria-label="Drag before and after slider"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>

            {/* Transformation Narrative & Work Done Specs */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6 border-t border-white/10">
              <div className="lg:col-span-8">
                <h4 className="text-xs font-black uppercase tracking-wider text-red-500 mb-1">
                  Scope of Renovation &amp; Structural Execution:
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {currentItem.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentItem.workDone.map((work, idx) => (
                    <div key={idx} className="gloss-block p-3 rounded-2xl flex items-center gap-2.5 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{work}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="gloss-block p-6 rounded-3xl text-center flex flex-col items-center">
                  <Sparkles className="w-8 h-8 text-red-500 mb-2" />
                  <span className="text-xs font-bold text-gray-300">Inspired by this transformation?</span>
                  <button
                    onClick={() => onOpenQuote(`Renovation Inquiry: ${currentItem.title}`)}
                    className="mt-3 red-gloss w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <span>Request Similar Remodel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* All 3 Transformation Case Studies Grid */}
          <div className="mt-16">
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-8 text-center">
              Explore All <span className="text-red-600">Case Studies</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BEFORE_AFTER_DATA.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedTransformation(index);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`clay-card p-5 rounded-3xl cursor-pointer transition-all duration-300 hover:border-red-500/60 ${
                    selectedTransformation === index ? 'border-red-500/80 shadow-lg shadow-red-600/20' : ''
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2 h-36 rounded-2xl overflow-hidden mb-4 border border-white/10">
                    <div className="relative h-full">
                      <img src={item.beforeImage} alt="Before" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-gray-300 uppercase">
                        Before
                      </span>
                    </div>
                    <div className="relative h-full">
                      <img src={item.afterImage} alt="After" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 red-gloss px-1.5 py-0.5 rounded text-[9px] font-bold text-white uppercase">
                        After
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-black uppercase text-white mt-1 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
