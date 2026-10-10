import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Calendar, Sparkles, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const FinalCTA: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF6F0] to-[#F3ECE0] border-t border-[#EFE7DA] relative overflow-hidden">
      {/* Background ambient gold lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="flex justify-center mb-4">
          <Logo size="lg" showText={false} />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Palmier, Casablanca</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight max-w-3xl mx-auto leading-tight">
          {t('finalCtaTitle')}
        </h2>

        <p className="font-serif italic text-xl sm:text-2xl text-[#6D4C3D]">
          « {BUSINESS_INFO.motto[language]} »
        </p>

        <p className="text-base sm:text-lg text-[#5C5248] max-w-2xl mx-auto leading-relaxed">
          {t('finalCtaDesc')}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#43281C] hover:bg-[#6D4C3D] text-white font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#D4AF37]" />
            <span>{t('bookAppointment')}</span>
            <ArrowUpRight className="w-4 h-4 text-[#F3E5AB]" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/80 hover:bg-white text-[#43281C] border border-[#EFE7DA] font-semibold text-sm sm:text-base transition-colors"
          >
            <span>{t('discoverServices')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
