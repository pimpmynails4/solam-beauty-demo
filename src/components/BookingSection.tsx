import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { SOLAM_IMAGES } from '../data/images';
import { Calendar, Clock, MapPin, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

export const BookingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6F0] rounded-3xl border border-[#EFE7DA] p-8 sm:p-12 lg:p-14 shadow-lg relative overflow-hidden">
          {/* Subtle decorative gold circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E5AB]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Column: Booking Content & Steps */}
            <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C]">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t('bookingBadge')}</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight">
                {t('bookingTitle')}
              </h2>

              <p className="text-base text-[#5C5248] leading-relaxed max-w-xl">
                {t('bookingDesc')}
              </p>

              {/* 3 Step Guidance */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#FDFBF7] p-4.5 rounded-2xl border border-[#EFE7DA]">
                  <div className="w-7 h-7 rounded-full bg-[#FAF6F0] border border-[#D4AF37] flex items-center justify-center text-[#B08D22] font-bold text-xs mb-2.5">
                    1
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                    {t('step1Title')}
                  </h3>
                  <p className="text-[11px] text-[#5C5248] leading-normal">
                    {t('step1Desc')}
                  </p>
                </div>

                <div className="bg-[#FDFBF7] p-4.5 rounded-2xl border border-[#EFE7DA]">
                  <div className="w-7 h-7 rounded-full bg-[#FAF6F0] border border-[#D4AF37] flex items-center justify-center text-[#B08D22] font-bold text-xs mb-2.5">
                    2
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                    {t('step2Title')}
                  </h3>
                  <p className="text-[11px] text-[#5C5248] leading-normal">
                    {t('step2Desc')}
                  </p>
                </div>

                <div className="bg-[#FDFBF7] p-4.5 rounded-2xl border border-[#EFE7DA]">
                  <div className="w-7 h-7 rounded-full bg-[#FAF6F0] border border-[#D4AF37] flex items-center justify-center text-[#B08D22] font-bold text-xs mb-2.5">
                    3
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                    {t('step3Title')}
                  </h3>
                  <p className="text-[11px] text-[#5C5248] leading-normal">
                    {t('step3Desc')}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href={BUSINESS_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#43281C] hover:bg-[#6D4C3D] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4.5 h-4.5 text-[#D4AF37]" />
                  <span>{t('bookAppointment')}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/80" />
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#FAF6F0] text-[#1C1917] border border-[#EFE7DA] font-semibold text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</span>
                </a>
              </div>

              {/* Verified Hours & Reminder */}
              <div className="pt-4 border-t border-[#EFE7DA] text-xs text-[#5C5248] flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Dim-Lun: 12h–19h • Mar-Sam: 10h30–19h30</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Palmier, Casablanca</span>
                </span>
              </div>
            </div>

            {/* Right Column: Visual Sanctuary Preview Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1C1917] border border-[#EFE7DA] shadow-lg group">
                <img
                  src="/images/solam-reception-temp.jpg"
                  alt="Atmosphère accueillante et élégante du salon Solam Beauty"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#F3E5AB] font-bold block mb-1">
                    Votre Rendez-vous Sérénité
                  </span>
                  <h4 className="font-serif text-xl font-bold mb-1">
                    L’Expérience Solam Beauty
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Accueil personnalisé, boissons chaudes et hygiène irréprochable au cœur de Casablanca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
