import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Sparkles, Instagram, ArrowUpRight, Share2 } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const { t } = useLanguage();

  const socialChannels = [
    {
      name: 'Instagram',
      handle: '@solam_beauty',
      descFr: 'Nail art, inspirations & photos de nos réalisations',
      descEn: 'Nail art, inspirations & authentic salon captures',
      descAr: 'تصاميم الأظافر، إلهام وصور حصرية لأعمالنا',
      url: BUSINESS_INFO.instagramUrl,
      icon: Instagram,
      cta: 'Instagram',
    },
    {
      name: 'TikTok',
      handle: '@solam_beauty',
      descFr: 'Vidéos de transformations et techniques onglerie',
      descEn: 'Short clips, nail transformations & spa moments',
      descAr: 'فيديوهات لتحولات الأظافر وتقنيات العمل',
      url: BUSINESS_INFO.tiktokUrl,
      icon: Share2,
      cta: 'TikTok',
    },
    {
      name: 'Facebook',
      handle: 'Solam Beauty Casablanca',
      descFr: 'Actualités officielles et communauté Solam',
      descEn: 'Official salon updates & client community',
      descAr: 'المستجدات الرسمية ومجتمع صولام بيوتي',
      url: BUSINESS_INFO.facebookUrl,
      icon: Share2,
      cta: 'Facebook',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#EFE7DA] text-xs font-semibold text-[#8A6D1C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('socialBadge')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            {t('socialTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed">
            {t('socialDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialChannels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <a
                key={idx}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF6F0] rounded-2xl border border-[#EFE7DA] p-7 hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#EFE7DA] flex items-center justify-center text-[#B08D22] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#8A6D1C] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <span className="text-xs font-bold text-[#8A6D1C] uppercase tracking-wider block mb-1">
                    {ch.name}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
                    {ch.handle}
                  </h3>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-6">
                    {ch.descFr}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE7DA] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#43281C] group-hover:text-[#B08D22] transition-colors">
                    Rejoindre sur {ch.cta}
                  </span>
                  <span className="text-xs text-[#D4AF37]">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
