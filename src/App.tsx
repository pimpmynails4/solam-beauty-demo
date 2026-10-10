import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { WhySolam } from './components/WhySolam';
import { ServicesMenu } from './components/ServicesMenu';
import { FindYourService } from './components/FindYourService';
import { Gallery } from './components/Gallery';
import { GoogleReviews } from './components/GoogleReviews';
import { BookingSection } from './components/BookingSection';
import { LocationMap } from './components/LocationMap';
import { SocialSection } from './components/SocialSection';
import { FAQ } from './components/FAQ';
import { AIChatbot } from './components/AIChatbot';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] selection:bg-[#D4AF37]/30 selection:text-[#43281C] flex flex-col font-sans transition-colors duration-200">
        {/* 01 — NAVBAR */}
        <Navbar />

        <main className="flex-1">
          {/* 02 — HERO */}
          <Hero />

          {/* 03 — THE SOLAM EXPERIENCE */}
          <Experience />

          {/* 04 — WHY SOLAM */}
          <WhySolam />

          {/* 05 — SERVICES & MENU */}
          <ServicesMenu />

          {/* 06 — FIND YOUR SERVICE */}
          <FindYourService />

          {/* 07 — GALLERY */}
          <Gallery />

          {/* 08 — GOOGLE REVIEWS */}
          <GoogleReviews />

          {/* 09 — BOOKING */}
          <BookingSection />

          {/* 10 — LOCATION + REAL GOOGLE MAP */}
          <LocationMap />

          {/* 11 — INSTAGRAM / TIKTOK */}
          <SocialSection />

          {/* 12 — FAQ */}
          <FAQ />

          {/* 13 — FINAL CTA */}
          <FinalCTA />
        </main>

        {/* 14 — FOOTER */}
        <Footer />

        {/* AI CHATBOT (Floating & interactive) */}
        <AIChatbot />

        {/* FLOATING WHATSAPP BUTTON (Desktop & safe mobile) */}
        <FloatingWhatsApp />

        {/* MOBILE STICKY BOOKING BAR */}
        <MobileStickyBar />
      </div>
    </LanguageProvider>
  );
}
