import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/salonData';
import { Language } from '../types';
import { Calendar, Menu, X, Globe, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, dir, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', label: t('theExperience') },
    { href: '#why-solam', label: t('whySolam') },
    { href: '#services', label: t('services') },
    { href: '#gallery', label: t('gallery') },
    { href: '#reviews', label: t('reviews') },
    { href: '#location', label: t('location') },
    { href: '#faq', label: t('faq') },
  ];

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#EFE7DA] py-3'
          : 'bg-[#FDFBF7]/85 backdrop-blur-sm border-b border-[#EFE7DA]/50 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform active:scale-95"
            aria-label="Solam Beauty - Pimp My Nails"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#5C5248]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#B08D22] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Language Switcher & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            {/* Language Switcher: FR | AR | EN */}
            <div className="inline-flex items-center rounded-full p-1 bg-[#FAF6F0] border border-[#EFE7DA] text-xs font-semibold">
              {(['fr', 'ar', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLangChange(lang)}
                  className={`px-2.5 py-1 rounded-full uppercase transition-all cursor-pointer ${
                    language === lang
                      ? 'bg-[#D4AF37] text-white shadow-xs font-bold'
                      : 'text-[#5C5248] hover:text-[#B08D22]'
                  }`}
                  aria-label={`Passer en ${lang}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Primary CTA Button: opens official Google Calendar */}
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#43281C] text-[#FDFBF7] hover:bg-[#6D4C3D] hover:shadow-md transition-all duration-200 text-xs sm:text-sm font-semibold tracking-wide cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('bookAppointment')}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Mini Lang + Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile mini language toggle */}
            <div className="inline-flex items-center rounded-full p-0.5 bg-[#FAF6F0] border border-[#EFE7DA] text-[11px] font-bold">
              {(['fr', 'ar', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLangChange(lang)}
                  className={`px-1.5 py-0.5 rounded-full uppercase ${
                    language === lang ? 'bg-[#D4AF37] text-white' : 'text-[#5C5248]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Menu Open/Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#43281C] hover:bg-[#FAF6F0] focus:outline-none transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FDFBF7] border-b border-[#EFE7DA] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#43281C] text-base font-medium py-1.5 border-b border-[#EFE7DA]/40 hover:text-[#B08D22] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            ))}
          </nav>

          {/* Mobile Booking CTA */}
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-[#43281C] text-white font-semibold text-sm shadow-sm hover:bg-[#6D4C3D] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('bookAppointment')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
