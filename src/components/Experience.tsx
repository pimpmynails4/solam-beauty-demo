import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SALON_SPACES } from '../data/salonData';
import { SOLAM_IMAGES } from '../data/images';
import { Sparkles, Eye } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  const featuredSpaces = SALON_SPACES.slice(0, 4);

  // Map each space to its corresponding centralized image
  const spaceImages = [
    SOLAM_IMAGES.experience.mezzanine,
    SOLAM_IMAGES.experience.lounge,
    SOLAM_IMAGES.experience.nailBar,
    SOLAM_IMAGES.experience.pedicureSpa,
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('expBadge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            {t('expTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed">
            {t('expDesc')}
          </p>
        </div>

        {/* Editorial Feature: Asymmetric Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Architectural Hero Card (Mezzanine & Chandelier) */}
          <div className="lg:col-span-7 bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#8A6D1C] uppercase tracking-wider mb-4">
                <span>{featuredSpaces[0].category}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#EFE7DA]">
                  {featuredSpaces[0].tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mb-3">
                {language === 'ar' ? featuredSpaces[0].titleAr : language === 'en' ? featuredSpaces[0].titleEn : featuredSpaces[0].titleFr}
              </h3>
              <p className="text-[#5C5248] leading-relaxed text-sm sm:text-base mb-6">
                {language === 'ar' ? featuredSpaces[0].descAr : language === 'en' ? featuredSpaces[0].descEn : featuredSpaces[0].descFr}
              </p>
            </div>

            {/* Visual Frame with Image */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#1C1917] border border-[#EFE7DA]">
              <img
                src={spaceImages[0].src}
                alt={language === 'ar' ? spaceImages[0].altAr : language === 'en' ? spaceImages[0].altEn : spaceImages[0].altFr}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-center text-xs">
                <span className="font-serif italic text-[#F3E5AB]">Solam Beauty • Mezzanine</span>
                <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded">Palmier Casablanca</span>
              </div>
            </div>
          </div>

          {/* Secondary Card (Lounge & Relaxation) */}
          <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#8A6D1C] uppercase tracking-wider mb-4">
                <span>{featuredSpaces[1].category}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#EFE7DA]">
                  {featuredSpaces[1].tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-3">
                {language === 'ar' ? featuredSpaces[1].titleAr : language === 'en' ? featuredSpaces[1].titleEn : featuredSpaces[1].titleFr}
              </h3>
              <p className="text-[#5C5248] leading-relaxed text-sm mb-6">
                {language === 'ar' ? featuredSpaces[1].descAr : language === 'en' ? featuredSpaces[1].descEn : featuredSpaces[1].descFr}
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1C1917] border border-[#EFE7DA]">
              <img
                src={spaceImages[1].src}
                alt={language === 'ar' ? spaceImages[1].altAr : language === 'en' ? spaceImages[1].altEn : spaceImages[1].altFr}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-center text-xs">
                <span className="font-serif italic text-[#F3E5AB]">Lounge & Bouclé Crème</span>
                <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded">Confort Absolu</span>
              </div>
            </div>
          </div>

          {/* Third Card (Nail Bar Signature) */}
          <div className="lg:col-span-6 bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#8A6D1C] uppercase tracking-wider mb-4">
                <span>{featuredSpaces[2].category}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#EFE7DA]">
                  {featuredSpaces[2].tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-3">
                {language === 'ar' ? featuredSpaces[2].titleAr : language === 'en' ? featuredSpaces[2].titleEn : featuredSpaces[2].titleFr}
              </h3>
              <p className="text-[#5C5248] leading-relaxed text-sm mb-6">
                {language === 'ar' ? featuredSpaces[2].descAr : language === 'en' ? featuredSpaces[2].descEn : featuredSpaces[2].descFr}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#1C1917] border border-[#EFE7DA]">
              <img
                src={spaceImages[2].src}
                alt={language === 'ar' ? spaceImages[2].altAr : language === 'en' ? spaceImages[2].altEn : spaceImages[2].altFr}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-center text-xs">
                <span className="font-serif italic text-[#F3E5AB]">Bar à Ongles Haute Précision</span>
                <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded">Biab & Gel</span>
              </div>
            </div>
          </div>

          {/* Fourth Card (Pedicure Spa Thrones) */}
          <div className="lg:col-span-6 bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#8A6D1C] uppercase tracking-wider mb-4">
                <span>{featuredSpaces[3].category}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#EFE7DA]">
                  {featuredSpaces[3].tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-3">
                {language === 'ar' ? featuredSpaces[3].titleAr : language === 'en' ? featuredSpaces[3].titleEn : featuredSpaces[3].titleFr}
              </h3>
              <p className="text-[#5C5248] leading-relaxed text-sm mb-6">
                {language === 'ar' ? featuredSpaces[3].descAr : language === 'en' ? featuredSpaces[3].descEn : featuredSpaces[3].descFr}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#1C1917] border border-[#EFE7DA]">
              <img
                src={spaceImages[3].src}
                alt={language === 'ar' ? spaceImages[3].altAr : language === 'en' ? spaceImages[3].altEn : spaceImages[3].altFr}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-center text-xs">
                <span className="font-serif italic text-[#F3E5AB]">Pédicure Médicale & Spa</span>
                <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded">Footlogix</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
