import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { QuoteModal } from './components/QuoteModal';
import { LoadingScreen } from './components/LoadingScreen';

// Dedicated Page Views
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { LocationPage } from './pages/LocationPage';
import { QuotePage } from './pages/QuotePage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Interior Finishing & Drywall');

  // Sync hash routing on initial load and window popstate/hashchange
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (['services', 'projects', 'before-after', 'why-us', 'about', 'reviews', 'location', 'quote'].includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === 'contact') {
        setCurrentPage('quote');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  // Navigation dispatcher
  const navigateTo = (pageId: string) => {
    const normalized = pageId.toLowerCase().replace(/^#\/?/, '');
    setCurrentPage(normalized);
    window.location.hash = `#/${normalized}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    // If already on quote page, smooth scroll to contact element; otherwise navigate or open modal
    if (currentPage === 'quote') {
      const quoteElement = document.getElementById('contact');
      if (quoteElement) {
        quoteElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleQuickModalQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setQuoteModalOpen(true);
  };

  // Render the requested dedicated page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <ServicesPage
            onOpenQuote={(service) => {
              setSelectedServiceForQuote(service || 'Interior Finishing & Drywall');
              handleOpenQuote(service);
            }}
            onNavigate={navigateTo}
          />
        );

      case 'projects':
        return (
          <ProjectsPage
            onOpenQuote={(service) => {
              setSelectedServiceForQuote(service || 'Building Construction');
              handleOpenQuote(service);
            }}
            onNavigate={navigateTo}
          />
        );

      case 'before-after':
        return (
          <BeforeAfterPage
            onOpenQuote={(service) => {
              setSelectedServiceForQuote(service || 'Interior Finishing & Drywall');
              handleOpenQuote(service);
            }}
            onNavigate={navigateTo}
          />
        );

      case 'why-us':
        return (
          <WhyUsPage
            onOpenQuote={(service) => {
              setSelectedServiceForQuote(service || 'Building Construction');
              handleOpenQuote(service);
            }}
            onNavigate={navigateTo}
          />
        );

      case 'about':
        return (
          <AboutPage
            onOpenQuote={(service) => {
              setSelectedServiceForQuote(service || 'General Construction');
              handleOpenQuote(service);
            }}
            onNavigate={navigateTo}
          />
        );

      case 'reviews':
        return (
          <ReviewsPage
            onOpenQuote={(service) => {
              setSelectedServiceForQuote(service || 'Interior Finishing & Drywall');
              handleOpenQuote(service);
            }}
            onNavigate={navigateTo}
          />
        );

      case 'location':
        return (
          <LocationPage
            onOpenQuote={(service) => {
              setSelectedServiceForQuote(service || 'Site Visit Consultation');
              handleOpenQuote(service);
            }}
            onNavigate={navigateTo}
          />
        );

      case 'quote':
      case 'contact':
        return (
          <QuotePage
            initialService={selectedServiceForQuote}
            onNavigate={navigateTo}
          />
        );

      case 'home':
      default:
        return (
          <HomePage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-gray-100 flex flex-col relative selection:bg-red-600 selection:text-white bg-mesh-dark">
      
      {/* Background Architectural Dot Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(#DC2626 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Main App Container */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Sticky Header Navigation with active page indicators */}
        <Navbar
          activePage={currentPage}
          onNavigate={navigateTo}
          onOpenQuote={handleOpenQuote}
        />

        {/* Dynamic Dedicated Page View */}
        <main className="flex-1 flex flex-col">
          {renderCurrentPage()}
        </main>

        {/* Global Footer */}
        <Footer
          onNavigate={navigateTo}
          onOpenQuote={handleOpenQuote}
        />

        {/* Mobile Fixed Quick Bar */}
        <MobileQuickBar
          activePage={currentPage}
          onNavigate={navigateTo}
          onOpenQuote={() => handleQuickModalQuote()}
        />

        {/* Global Quick Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialService={selectedServiceForQuote}
        />
      </div>

      {/* Entrance Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

    </div>
  );
}
