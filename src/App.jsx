import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ServicesBar from './components/ServicesBar';
import AboutSection from './components/AboutSection';
import StatsAndClients from './components/StatsAndClients';
import TestimonialQuote from './components/TestimonialQuote';
import Footer from './components/Footer';

import WatermarkOverlay from './components/WatermarkOverlay';

/* Modals */
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ClientsModal from './components/ClientsModal';

/* Pages */
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import WhatsNewPage from './pages/WhatsNewPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeServiceSubView, setActiveServiceSubView] = useState('overview');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleNavigate = (page, subview = 'overview') => {
    if (page === 'about') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      setActiveServiceSubView(subview);
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handleNavigate} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      {/* Main Content Area depending on Active Page */}
      <main>
        {activePage === 'home' && (
          <>
            <HeroSlider 
              onNavigate={handleNavigate} 
              onOpenQuote={() => setIsQuoteOpen(true)} 
            />
            <ServicesBar 
              onSelectService={(svc) => setSelectedService(svc)} 
            />
            <AboutSection 
              onNavigate={handleNavigate} 
              onOpenVideo={() => setIsVideoOpen(true)}
              onOpenQuote={() => setIsQuoteOpen(true)}
            />
            <StatsAndClients 
              onOpenClientsModal={() => setIsClientsOpen(true)} 
            />
            <TestimonialQuote />
          </>
        )}

        {activePage === 'services' && (
          <ServicesPage 
            key={activeServiceSubView}
            initialSubView={activeServiceSubView}
            onOpenQuote={() => setIsQuoteOpen(true)} 
            onSelectService={(svc) => setSelectedService(svc)} 
          />
        )}

        {activePage === 'solutions' && (
          <SolutionsPage onOpenQuote={() => setIsQuoteOpen(true)} />
        )}

        {activePage === 'clients' && (
          <div style={{ padding: '40px 0' }}>
            <StatsAndClients onOpenClientsModal={() => setIsClientsOpen(true)} />
            <TestimonialQuote />
          </div>
        )}

        {activePage === 'careers' && (
          <CareersPage />
        )}

        {activePage === 'whatsnew' && (
          <WhatsNewPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      {/* Modals */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />

      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      <ClientsModal 
        isOpen={isClientsOpen} 
        onClose={() => setIsClientsOpen(false)} 
      />

      {/* Watermark Overlay (Remove this line after payment received) */}
      <WatermarkOverlay />
    </div>
  );
}
