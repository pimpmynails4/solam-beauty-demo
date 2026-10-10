import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { MapPin, Clock, ArrowUpRight, Navigation, Phone } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const { t, language } = useLanguage();

  const currentHours =
    language === 'ar'
      ? BUSINESS_INFO.hours.displayAr
      : language === 'en'
      ? BUSINESS_INFO.hours.displayEn
      : BUSINESS_INFO.hours.displayFr;

  return (
    <section id="location" className="py-20 md:py-28 bg-[#FAF6F0] border-t border-[#EFE7DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('locationBadge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            {t('locationTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed">
            {t('locationDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* MAIN AREA: REAL VISIBLE INTERACTIVE GOOGLE MAP EMBED (CRITICAL) */}
          <div className="lg:col-span-8 bg-[#FDFBF7] rounded-3xl border border-[#EFE7DA] p-3 sm:p-4 shadow-sm flex flex-col min-h-[420px] lg:min-h-[480px]">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#EFE7DA]">
              <iframe
                title="Google Maps Location - Solam Beauty Casablanca"
                src={`https://maps.google.com/maps?q=${BUSINESS_INFO.mapsEmbedQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] lg:min-h-[460px] rounded-2xl filter saturate-[0.95]"
              />

              {/* Floating Map Overlay Badge */}
              <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#EFE7DA] shadow-md text-xs pointer-events-none flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                <span className="font-bold text-[#1C1917]">Solam Beauty • Palmier</span>
              </div>
            </div>
          </div>

          {/* SECONDARY AREA: Address, Opening Hours, CTA Button */}
          <div className="lg:col-span-4 bg-[#FDFBF7] rounded-3xl border border-[#EFE7DA] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-6">
              {/* Address Card */}
              <div className="space-y-3 pb-6 border-b border-[#EFE7DA]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8A6D1C] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t('addressTitle')}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                  29 Rue de Bethléem
                </h3>
                <p className="text-sm text-[#5C5248] leading-relaxed">
                  Résidence Washingtonia, Quartier Palmier, Casablanca 20340, Maroc
                </p>
                <div className="pt-1">
                  <span className="inline-block text-[11px] font-medium bg-[#FAF6F0] px-3 py-1 rounded-full text-[#6D4C3D] border border-[#EFE7DA]">
                    Face aux palmiers • Stationnement accessible
                  </span>
                </div>
              </div>

              {/* Exact Opening Hours */}
              <div className="space-y-3 pb-6 border-b border-[#EFE7DA]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8A6D1C] uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t('hours')}</span>
                </div>

                <div className="space-y-2.5">
                  {currentHours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#5C5248] font-medium">{h.days}</span>
                      <span className="font-bold text-[#1C1917] bg-[#FAF6F0] px-2.5 py-1 rounded-md border border-[#EFE7DA]">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8A6D1C] uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Contact & WhatsApp</span>
                </div>
                <p className="text-sm font-semibold text-[#1C1917]">
                  {BUSINESS_INFO.whatsappDisplay}
                </p>
              </div>
            </div>

            {/* Direct Official Google Maps CTA Button */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#43281C] hover:bg-[#6D4C3D] text-white font-semibold text-sm shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>{t('viewOnGoogleMaps')}</span>
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
