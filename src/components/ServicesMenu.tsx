import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OFFICIAL_SERVICES, BUSINESS_INFO } from '../data/salonData';
import { Sparkles, Calendar, Search, ArrowUpRight, Scissors, Sparkle, Heart } from 'lucide-react';

export const ServicesMenu: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'onglerie' | 'coiffure' | 'esthetique'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = OFFICIAL_SERVICES.filter((service) => {
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesTab;

    const matchesName =
      service.nameFr.toLowerCase().includes(query) ||
      service.nameEn.toLowerCase().includes(query) ||
      service.nameAr.toLowerCase().includes(query);

    return matchesTab && matchesName;
  });

  const getServiceName = (item: (typeof OFFICIAL_SERVICES)[0]) => {
    if (language === 'ar') return item.nameAr;
    if (language === 'en') return item.nameEn;
    return item.nameFr;
  };

  const getCategoryLabel = (cat: 'onglerie' | 'coiffure' | 'esthetique') => {
    if (cat === 'onglerie') return t('filterNails');
    if (cat === 'coiffure') return t('filterHair');
    return t('filterAesthetics');
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('servicesBadge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#43281C] text-white shadow-sm'
                  : 'bg-[#FAF6F0] text-[#5C5248] border border-[#EFE7DA] hover:border-[#D4AF37]'
              }`}
            >
              {t('allServices')} ({OFFICIAL_SERVICES.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('onglerie')}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'onglerie'
                  ? 'bg-[#43281C] text-white shadow-sm'
                  : 'bg-[#FAF6F0] text-[#5C5248] border border-[#EFE7DA] hover:border-[#D4AF37]'
              }`}
            >
              <Sparkle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t('filterNails')} (25)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('coiffure')}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'coiffure'
                  ? 'bg-[#43281C] text-white shadow-sm'
                  : 'bg-[#FAF6F0] text-[#5C5248] border border-[#EFE7DA] hover:border-[#D4AF37]'
              }`}
            >
              <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t('filterHair')} (6)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('esthetique')}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'esthetique'
                  ? 'bg-[#43281C] text-white shadow-sm'
                  : 'bg-[#FAF6F0] text-[#5C5248] border border-[#EFE7DA] hover:border-[#D4AF37]'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t('filterAesthetics')} (14)</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-[#8A6D1C] absolute left-4 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-[#FAF6F0] border border-[#EFE7DA] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-full py-2.5 pl-11 pr-4 rtl:pl-4 rtl:pr-11 text-sm text-[#1C1917] placeholder:text-[#5C5248]/60 transition-all outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 rtl:right-auto rtl:left-4 text-xs font-semibold text-[#8A6D1C] hover:underline"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="text-center text-xs font-medium text-[#5C5248] mb-6">
            {filteredServices.length} {t('resultsCount')}
          </div>
        )}

        {/* Services List / Cards */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] max-w-xl mx-auto p-8">
            <p className="text-[#5C5248] mb-4">{t('noServicesFound')}</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="px-5 py-2 rounded-full bg-[#43281C] text-white text-xs font-semibold"
            >
              {t('resetFilter')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] p-5 sm:p-6 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-[#8A6D1C] bg-white border border-[#EFE7DA] px-2 py-0.5 rounded-md mb-2">
                      {getCategoryLabel(service.category)}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] leading-snug">
                      {getServiceName(service)}
                    </h3>
                  </div>

                  {/* Price Badge */}
                  <div className="shrink-0 text-right rtl:text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/40 text-[#43281C] font-bold text-sm sm:text-base whitespace-nowrap shadow-2xs">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Booking CTA Button */}
                <div className="pt-4 border-t border-[#EFE7DA]/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#5C5248]">Tarif officiel salon</span>
                  <a
                    href={BUSINESS_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#43281C] group-hover:bg-[#6D4C3D] text-white text-xs font-semibold transition-colors active:scale-95"
                    aria-label={`Réserver ${getServiceName(service)}`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{t('reserve')}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/80" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Menu Booking Banner */}
        <div className="mt-12 text-center bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left rtl:text-right">
            <h4 className="font-serif font-bold text-lg text-[#1C1917]">
              Besoin d’un conseil avant de choisir ?
            </h4>
            <p className="text-xs text-[#5C5248]">
              Consultez notre agenda officiel Google Calendar pour réserver votre créneau.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#43281C] text-white font-semibold text-xs sm:text-sm hover:bg-[#6D4C3D] transition-colors shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>{t('bookAppointment')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
