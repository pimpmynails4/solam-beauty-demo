import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Sparkle, Scissors, Heart, Footprints } from 'lucide-react';
import { SOLAM_IMAGES } from '../data/images';

export const FindYourService: React.FC = () => {
  const { t, language } = useLanguage();

  const categories = [
    {
      id: 'onglerie',
      icon: Sparkle,
      image: SOLAM_IMAGES.services.nails,
      titleFr: 'Onglerie & Manucure',
      titleEn: 'Nails & Manicure',
      titleAr: 'العناية بالأظافر والمانيكير',
      count: '25 soins',
      examples: 'Pose Gel, Biab Semilac, Slim Tips, Nail Art, Baby Boomer...',
      startPrice: 'Dès 20 DH',
    },
    {
      id: 'pedicure',
      icon: Footprints,
      image: SOLAM_IMAGES.services.pedicure,
      titleFr: 'Pédicure & Pédicure Médicale',
      titleEn: 'Pedicure & Footlogix Medical',
      titleAr: 'الباديكير والباديكير الطبي',
      count: '3 soins',
      examples: 'Pédicure normale, Pédicure SPA, Pédicure Médicale Footlogix...',
      startPrice: 'Dès 120 DH',
    },
    {
      id: 'coiffure',
      icon: Scissors,
      image: SOLAM_IMAGES.services.hair,
      titleFr: 'Coiffure & Soins Cheveux',
      titleEn: 'Hair Styling & Treatments',
      titleAr: 'تصفيف وعلاجات الشعر',
      count: '6 soins',
      examples: 'Brushing, Babyliss, Coloration, Soin, Lissage Protéine...',
      startPrice: 'Dès 50 DH',
    },
    {
      id: 'esthetique',
      icon: Heart,
      image: SOLAM_IMAGES.services.aesthetics,
      titleFr: 'Esthétique & Épilation',
      titleEn: 'Aesthetics & Waxing',
      titleAr: 'التجميل وإزالة الشعر',
      count: '14 soins',
      examples: 'Visage au fil/cire, Sourcils, Cire complète, Pose Cils...',
      startPrice: 'Dès 20 DH',
    },
  ];

  const handleSelect = (categoryId: string) => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="find-service" className="py-16 md:py-20 bg-[#FAF6F0] border-t border-[#EFE7DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('findServiceBadge')}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mb-3">
            {t('findServiceTitle')}
          </h2>
          <p className="text-sm sm:text-base text-[#5C5248]">
            {t('findServiceDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const title = language === 'ar' ? cat.titleAr : language === 'en' ? cat.titleEn : cat.titleFr;
            const alt = language === 'ar' ? cat.image.altAr : language === 'en' ? cat.image.altEn : cat.image.altFr;

            return (
              <div
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className="bg-[#FDFBF7] rounded-2xl border border-[#EFE7DA] overflow-hidden hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                {/* Visual Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1917]">
                  <img
                    src={cat.image.src}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                    <span className="text-[11px] font-bold text-[#43281C] bg-[#FDFBF7]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4AF37]/50 shadow-xs">
                      {cat.startPrice}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#1C1917] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{cat.count}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-1.5 group-hover:text-[#B08D22] transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-[#5C5248] leading-relaxed mb-4">
                      {cat.examples}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EFE7DA]/50 flex items-center justify-between text-xs font-semibold text-[#43281C] group-hover:text-[#B08D22]">
                    <span>Consulter les tarifs</span>
                    <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
