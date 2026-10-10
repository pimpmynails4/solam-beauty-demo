import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OFFICIAL_FAQ } from '../data/salonData';
import { Sparkles, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#FAF6F0] border-t border-[#EFE7DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>FAQ Officielle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            {t('faq')}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base text-[#5C5248]">
            Réponses claires et vérifiées sur notre salon, nos tarifs et nos modalités de réservation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {OFFICIAL_FAQ.map((faq, index) => {
            const isOpen = openIndex === index;
            const question = language === 'ar' ? faq.qAr : language === 'en' ? faq.qEn : faq.qFr;
            const answer = language === 'ar' ? faq.aAr : language === 'en' ? faq.aEn : faq.aFr;

            return (
              <div
                key={faq.id}
                className="bg-[#FDFBF7] rounded-2xl border border-[#EFE7DA] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] leading-snug">
                    {question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#EFE7DA] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#43281C] text-white border-[#43281C]' : 'text-[#8A6D1C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5C5248] leading-relaxed border-t border-[#EFE7DA]/50 animate-in fade-in duration-150">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
