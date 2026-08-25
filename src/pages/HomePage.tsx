import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { AboutSection } from '../components/AboutSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { LocationMapSection } from '../components/LocationMapSection';
import { QuoteBookingSection } from '../components/QuoteBookingSection';
import { BottomCTA } from '../components/BottomCTA';
import { ArrowRight, Grid, Image, Sparkles, MapPin, Award, Star } from 'lucide-react';

interface HomePageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <Hero onOpenQuote={onOpenQuote} onNavigate={onNavigate} />

      {/* Quick Dedicated Page Navigator Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8 w-full">
        <div className="clay-card p-3 sm:p-4 rounded-2xl flex items-center justify-between gap-2 overflow-x-auto border border-white/10">
          <span className="text-[11px] font-black uppercase tracking-wider text-red-500 whitespace-nowrap pl-2 hidden sm:inline">
            Explore Dedicated Pages:
          </span>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => onNavigate('services')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold gloss-block text-gray-200 hover:text-white hover:border-red-500/50 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors"
            >
              <Grid className="w-3.5 h-3.5 text-red-500" />
              <span>Full Services Catalog</span>
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold gloss-block text-gray-200 hover:text-white hover:border-red-500/50 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors"
            >
              <Image className="w-3.5 h-3.5 text-red-500" />
              <span>Project Portfolio</span>
            </button>

            <button
              onClick={() => onNavigate('before-after')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold gloss-block text-gray-200 hover:text-white hover:border-red-500/50 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Before &amp; After</span>
            </button>

            <button
              onClick={() => onNavigate('why-us')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold gloss-block text-gray-200 hover:text-white hover:border-red-500/50 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors"
            >
              <Award className="w-3.5 h-3.5 text-red-500" />
              <span>Why E.I.T.S</span>
            </button>

            <button
              onClick={() => onNavigate('reviews')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold gloss-block text-gray-200 hover:text-white hover:border-red-500/50 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors"
            >
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>24 Reviews (5.0★)</span>
            </button>

            <button
              onClick={() => onNavigate('location')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold gloss-block text-gray-200 hover:text-white hover:border-red-500/50 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>14 Parishes</span>
            </button>
          </div>
        </div>
      </div>

      {/* 12 Detailed Services Section */}
      <div className="relative">
        <ServicesSection onSelectService={(s) => { onOpenQuote(s); }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="red-gloss px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-red-600/30"
          >
            <span>Open Dedicated Services Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Before & After Slider */}
      <div className="relative">
        <BeforeAfterSlider onOpenQuote={onOpenQuote} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 text-center">
          <button
            onClick={() => onNavigate('before-after')}
            className="red-gloss px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-red-600/30"
          >
            <span>Open Dedicated Before &amp; After Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Featured Projects Portfolio Gallery */}
      <div className="relative">
        <ProjectsGallery onOpenQuote={onOpenQuote} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 text-center">
          <button
            onClick={() => onNavigate('projects')}
            className="red-gloss px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-red-600/30"
          >
            <span>Open Dedicated Projects Portfolio Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Why Choose E.I.T.S & 4-Step Process */}
      <div className="relative">
        <WhyChooseUs onOpenQuote={onOpenQuote} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 text-center">
          <button
            onClick={() => onNavigate('why-us')}
            className="red-gloss px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-red-600/30"
          >
            <span>Open Dedicated Why Us Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* About Us & Standards */}
      <div className="relative">
        <AboutSection onOpenQuote={onOpenQuote} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 text-center">
          <button
            onClick={() => onNavigate('about')}
            className="red-gloss px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-red-600/30"
          >
            <span>Open Dedicated About Us Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5.0 Star Google Reviews & Testimonials */}
      <div className="relative">
        <ReviewsSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 text-center">
          <button
            onClick={() => onNavigate('reviews')}
            className="red-gloss px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-red-600/30"
          >
            <span>Open Dedicated Reviews &amp; Testimonials Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Quote Booking / Request Form */}
      <QuoteBookingSection prefilledService="Interior Finishing & Drywall" />

      {/* Location & Parish Coverage */}
      <div className="relative">
        <LocationMapSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 text-center">
          <button
            onClick={() => onNavigate('location')}
            className="red-gloss px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-red-600/30"
          >
            <span>Open Dedicated Location &amp; Parishes Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Call to Action Banner */}
      <BottomCTA onOpenQuote={onOpenQuote} />
    </div>
  );
};
