import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { SOLAM_IMAGES } from '../data/images';
import { Calendar, ChevronRight, Sparkles, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const { t, language, dir } = useLanguage();

  const heroAlt =
    language === 'ar'
      ? SOLAM_IMAGES.hero.altAr
      : language === 'en'
      ? SOLAM_IMAGES.hero.altEn
      : SOLAM_IMAGES.hero.altFr;

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-radial from-[#FAF6F0] via-[#FDFBF7] to-[#F7F2EA]">
      {/* Delicate background ambient decorative glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F3E5AB]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right rtl:items-start z-10">
            {/* Location & Excellence Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>{t('heroBadge')}</span>
              <span className="text-[#EFE7DA]">•</span>
              <span className="text-[#5C5248]">29 Rue de Bethléem</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.08] mb-4">
              SOLAM BEAUTY
              <span className="block mt-1 font-normal italic font-serif text-[#B08D22] text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                Pimp My Nails
              </span>
            </h1>

            {/* Tagline / Motto */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#6D4C3D] mb-4 font-medium">
              « {BUSINESS_INFO.tagline[language]} »
            </p>

            {/* Concise Editorial Copy */}
            <p className="text-base sm:text-lg text-[#5C5248] max-w-xl leading-relaxed mb-8">
              {t('heroDesc')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#43281C] text-white hover:bg-[#6D4C3D] text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span>{t('bookAppointment')}</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/80 hover:bg-[#FAF6F0] text-[#43281C] border border-[#EFE7DA] text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>{t('discoverServices')}</span>
                <ChevronRight className={`w-4 h-4 text-[#B08D22] ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            {/* Verified Quick Information Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EFE7DA] w-full max-w-xl text-xs text-[#5C5248]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1917] block">Casablanca</span>
                  <span>Palmier (20340)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1917] block">Horaires</span>
                  <span>10:30–19:30 (Mar–Sam)</span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1917] block">Spécialité</span>
                  <span>Ongles, Cheveux & Soins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative architectural frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#D4AF37]/20 to-[#6D4C3D]/10 rounded-3xl blur-md -z-10" />

              <div className="bg-[#FAF6F0] border border-[#EFE7DA] rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
                {/* Hero Showcase Image Frame */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#1C1917] group">
                  {/* Centralized High-Quality Visual Image */}
                  <img
                    src={SOLAM_IMAGES.hero.src}
                    alt={heroAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Elegant Gradient Vignette Overlay for Luxury Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 pointer-events-none" />

                  {/* Floating Badges & Content */}
                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white pointer-events-none">
                    {/* Top Row: Salon Location Badge & Official Logo Emblem */}
                    <div className="flex justify-between items-start pointer-events-auto">
                      <div className="bg-[#1C1917]/80 backdrop-blur-md rounded-full px-3.5 py-1 text-[11px] font-semibold text-[#F3E5AB] border border-[#D4AF37]/40 flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Solam Beauty • Palmier</span>
                      </div>

                      <div className="w-12 h-12 rounded-full bg-[#1C1917]/85 backdrop-blur-md border border-[#D4AF37]/60 flex items-center justify-center p-1.5 shadow-xl">
                        <Logo size="sm" showText={false} />
                      </div>
                    </div>

                    {/* Bottom Caption Card */}
                    <div className="bg-[#1C1917]/85 backdrop-blur-md rounded-xl p-3.5 border border-[#D4AF37]/30 text-left rtl:text-right shadow-lg pointer-events-auto">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#F3E5AB] mb-1">
                        <span>Pimp My Nails by Solam Beauty</span>
                        <span className="text-[10px] text-white/70">Casablanca</span>
                      </div>
                      <p className="text-[11px] text-white/90 line-clamp-1">
                        29 Rue de Bethléem, Résidence Washingtonia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom mini highlight badges */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-medium text-[#5C5248]">
                  <div className="p-2 rounded-lg bg-white/70 border border-[#EFE7DA]">
                    <span className="block font-bold text-[#43281C]">Biab & Gel</span>
                    <span className="text-[10px] text-[#8A6D1C]">Techniques d'art</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/70 border border-[#EFE7DA]">
                    <span className="block font-bold text-[#43281C]">Footlogix</span>
                    <span className="text-[10px] text-[#8A6D1C]">Pédicure médicale</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/70 border border-[#EFE7DA]">
                    <span className="block font-bold text-[#43281C]">Sur-mesure</span>
                    <span className="text-[10px] text-[#8A6D1C]">Coiffure & Soins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
