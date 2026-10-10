import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SOLAM_IMAGES, GalleryImageItem } from '../data/images';
import { Sparkles, X, Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('filterAll') },
    { id: 'Onglerie', label: t('filterNails') },
    { id: 'Architecture', label: t('filterArch') },
    { id: 'Coiffure', label: t('filterHair') },
    { id: 'Pédicure', label: t('filterPedicure') },
  ];

  const filteredGallery = activeCategory === 'all'
    ? SOLAM_IMAGES.gallery
    : SOLAM_IMAGES.gallery.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('galleryBadge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            {t('galleryTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed">
            {t('galleryDesc')}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#43281C] text-white shadow-xs'
                  : 'bg-[#FAF6F0] text-[#5C5248] border border-[#EFE7DA] hover:border-[#D4AF37]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item) => {
            const title = language === 'ar' ? item.titleAr : language === 'en' ? item.titleEn : item.titleFr;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] overflow-hidden cursor-pointer hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#1C1917]">
                  <img
                    src={item.src}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Elegant Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
                    <span className="bg-[#1C1917]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#F3E5AB] border border-[#D4AF37]/40 shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#43281C] flex items-center justify-center shadow-md">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <span className="text-[10px] uppercase tracking-wider text-[#F3E5AB] font-bold block mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug drop-shadow-sm">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Caption Card */}
                <div className="p-4 sm:p-5 text-left rtl:text-right bg-[#FAF6F0] flex items-center justify-between text-xs">
                  <span className="font-medium text-[#5C5248]">Solam Beauty Casablanca</span>
                  <span className="font-semibold text-[#B08D22] group-hover:underline flex items-center gap-1">
                    <span>Agrandir</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-[#FAF6F0] rounded-3xl border border-[#D4AF37] max-w-3xl w-full p-4 sm:p-6 relative shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-white/90 text-[#43281C] hover:bg-white transition-colors border border-[#EFE7DA] shadow-md z-10"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-black relative">
                <img
                  src={selectedImage.src}
                  alt={language === 'ar' ? selectedImage.titleAr : language === 'en' ? selectedImage.titleEn : selectedImage.titleFr}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
                <div>
                  <span className="text-xs font-bold text-[#8A6D1C] uppercase tracking-wider block mb-1">
                    {selectedImage.category} • {selectedImage.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {language === 'ar' ? selectedImage.titleAr : language === 'en' ? selectedImage.titleEn : selectedImage.titleFr}
                  </h3>
                </div>

                <div className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="px-6 py-2.5 rounded-full bg-[#43281C] text-white text-xs font-semibold hover:bg-[#6D4C3D] transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
