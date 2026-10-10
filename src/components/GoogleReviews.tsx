import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Star, ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';

export const GoogleReviews: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="reviews" className="py-20 md:py-24 bg-[#FAF6F0] border-y border-[#EFE7DA] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{t('reviewsBadge')}</span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
          {t('reviewsTitle')}
        </h2>

        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />

        <p className="text-base sm:text-lg text-[#5C5248] max-w-2xl mx-auto leading-relaxed mb-10">
          {t('reviewsDesc')}
        </p>

        {/* Dignified Google Review Presentation Card */}
        <div className="bg-[#FDFBF7] rounded-3xl border border-[#EFE7DA] p-8 sm:p-12 shadow-sm max-w-2xl mx-auto space-y-6">
          {/* Rating Stars Visual */}
          <div className="flex items-center justify-center gap-1.5 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#D4AF37] stroke-[#B08D22]" />
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Fiche Officielle Google My Business
            </h3>
            <p className="text-sm text-[#5C5248]">
              Consultez les retours d'expérience, photos de réalisations et notes de notre clientèle casablancaise directement sur Google Maps.
            </p>
          </div>

          {/* Primary CTA opening official Google Maps link */}
          <div className="pt-4">
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#43281C] hover:bg-[#6D4C3D] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('reviewsCta')}</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </a>
          </div>

          <p className="text-[11px] text-[#5C5248]/80">
            Avis vérifiés et transparents • Solam Beauty Casablanca Palmier
          </p>
        </div>
      </div>
    </section>
  );
};
