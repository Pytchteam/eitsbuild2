import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/mockData';

interface BeforeAfterSliderProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuote }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_DATA[activeIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-16 lg:py-24 relative bg-[#08080A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Transformations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            Before &amp; <span className="text-red-600">After</span> Showcase
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Drag the slider horizontally to reveal how E.I.T.S turns unfinished, aging Jamaican properties into high-end architectural masterpieces.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeIdx === idx
                  ? 'red-gloss text-white shadow-lg shadow-red-600/30'
                  : 'gloss-block text-gray-400 hover:text-white'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="clay-card p-4 sm:p-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Slider (7 cols) */}
            <div className="lg:col-span-8">
              <div
                ref={containerRef}
                className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/15 shadow-2xl"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER Image (Full background) */}
                <img
                  src={activeItem.afterImage}
                  alt={`After: ${activeItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* AFTER Label Tag */}
                <div className="absolute top-4 right-4 z-20 red-gloss px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                  AFTER: E.I.T.S Finish
                </div>

                {/* BEFORE Image (Clipped by slider position) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeItem.beforeImage}
                    alt={`Before: ${activeItem.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%',
                    }}
                  />
                  {/* BEFORE Label Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider text-gray-300 shadow-md">
                    BEFORE: Original State
                  </div>
                </div>

                {/* Draggable Divider Line */}
                <div
                  className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Center Drag Handle Bulb */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full red-gloss flex items-center justify-center text-white shadow-2xl border-2 border-white cursor-ew-resize">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Slider Hint */}
              <div className="flex items-center justify-between text-xs text-gray-500 mt-3 px-2">
                <span>◀ Slide left to view AFTER</span>
                <span className="font-semibold text-gray-400">Drag center handle</span>
                <span>Slide right to view BEFORE ▶</span>
              </div>
            </div>

            {/* Right Information Panel (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-red-500 font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeItem.location}</span>
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Execution Scope:
                  </span>
                  {activeItem.workDone.map((work, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{work}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => onOpenQuote(activeItem.category)}
                  className="red-gloss w-full py-4 rounded-2xl font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Similar Transformation</span>
                </button>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <button
                    onClick={() => {
                      setActiveIdx((prev) => (prev > 0 ? prev - 1 : BEFORE_AFTER_DATA.length - 1));
                      setSliderPosition(50);
                    }}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>
                  <span>{activeIdx + 1} of {BEFORE_AFTER_DATA.length}</span>
                  <button
                    onClick={() => {
                      setActiveIdx((prev) => (prev < BEFORE_AFTER_DATA.length - 1 ? prev + 1 : 0));
                      setSliderPosition(50);
                    }}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
