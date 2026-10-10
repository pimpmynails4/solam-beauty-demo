import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Sparkles, CalendarCheck, MapPin, Layers, Award } from 'lucide-react';

export const WhySolam: React.FC = () => {
  const { t, language } = useLanguage();

  const reasons = [
    {
      icon: Sparkles,
      titleFr: 'Signature Pimp My Nails',
      titleEn: 'Signature Pimp My Nails',
      titleAr: 'توقيع بيمب ماي نيلز المميز',
      descFr: 'Une véritable spécialisation dans la sublimation des ongles : gel, Biab, capsules fines, nail art créatif et manucures soignées.',
      descEn: 'A focused expertise dedicated to nail perfection: gel, Biab, slim tips, creative nail art, and meticulous manicure care.',
      descAr: 'تخصص حقيقي واحترافي في العناية بالأظافر: جل، بياب، كبسولات دقيقة، فن الأظافر المبتكر والمانيكير المتقن.',
    },
    {
      icon: Layers,
      titleFr: 'Trois Univers de Beauté Complémentaires',
      titleEn: 'Three Complementary Beauty Worlds',
      titleAr: 'ثلاثة عوالم متكاملة للجمال',
      descFr: 'Une offre officielle complète réunissant l’onglerie de précision, les soins et coiffages capillaires, ainsi que l’esthétique et l’épilation.',
      descEn: 'A complete official offering bringing together precision nails, hair treatments & styling, alongside waxing and aesthetic care.',
      descAr: 'خدمات شاملة تجمع بين دقة الأظافر، عناية وتصفيف الشعر، بالإضافة إلى إزالة الشعر والعناية التجميلية.',
    },
    {
      icon: MapPin,
      titleFr: 'Emplacement Central à Casablanca',
      titleEn: 'Central Casablanca Location',
      titleAr: 'موقع استراتيجي بالدار البيضاء',
      descFr: 'Situé au 29 Rue de Bethléem, Résidence Washingtonia, dans le quartier Palmier, réputé pour sa tranquillité et son accessibilité.',
      descEn: 'Located at 29 Rue de Bethléem, Residence Washingtonia, in the Palmier district, known for its calm and convenient setting.',
      descAr: 'يقع في 29 زنقة بيت لحم، إقامة واشنطونيا، بحي بلميي الراقي والهادئ وسهل الوصول.',
    },
    {
      icon: CalendarCheck,
      titleFr: 'Réservation Officielle en Ligne',
      titleEn: 'Direct Online Scheduling',
      titleAr: 'حجز رسمي مباشر عبر الإنترنت',
      descFr: 'Planification directe via notre page officielle Google Calendar pour choisir votre date et heure sans délai.',
      descEn: 'Instant appointment booking via our official Google Calendar page, letting you choose your preferred slot in seconds.',
      descAr: 'إمكانية حجز المواعيد مباشرة وبكل سهولة عبر رابط تقويم جوجل الرسمي لاختيار الوقت المناسب بدون انتظار.',
    },
  ];

  return (
    <section id="why-solam" className="py-20 md:py-24 bg-[#FAF6F0] border-y border-[#EFE7DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('whyBadge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            {t('whyTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed">
            {t('whySubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-[#EFE7DA] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#EFE7DA] flex items-center justify-center text-[#B08D22] mb-5">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2.5">
                    {language === 'ar' ? reason.titleAr : language === 'en' ? reason.titleEn : reason.titleFr}
                  </h3>
                  <p className="text-sm text-[#5C5248] leading-relaxed">
                    {language === 'ar' ? reason.descAr : language === 'en' ? reason.descEn : reason.descFr}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFE7DA]/50 text-[11px] font-semibold text-[#8A6D1C] tracking-wide uppercase">
                  Engagement Solam
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
