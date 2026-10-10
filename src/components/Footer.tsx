import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Logo } from './Logo';
import { MapPin, Clock, Phone, Calendar, Instagram, Share2, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const currentHours =
    language === 'ar'
      ? BUSINESS_INFO.hours.displayAr
      : language === 'en'
      ? BUSINESS_INFO.hours.displayEn
      : BUSINESS_INFO.hours.displayFr;

  return (
    <footer className="bg-[#1C1917] text-[#FAF6F0] pt-16 pb-24 sm:pb-16 border-t border-[#43281C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
            </div>

            <p className="font-serif italic text-lg text-[#F3E5AB]">
              « {BUSINESS_INFO.tagline[language]} »
            </p>

            <p className="text-xs text-[#FAF6F0]/75 max-w-sm leading-relaxed">
              Maison de beauté et onglerie haute précision à Casablanca. Manucures d’exception, soins capillaires et rituels esthétiques dans un cadre architectural raffiné.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1C1917] flex items-center justify-center transition-colors"
                aria-label="Instagram Solam Beauty"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1C1917] flex items-center justify-center transition-colors"
                aria-label="TikTok Solam Beauty"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1C1917] flex items-center justify-center transition-colors"
                aria-label="Facebook Solam Beauty"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/80">
              <li>
                <a href="#experience" className="hover:text-[#F3E5AB] transition-colors">
                  {t('theExperience')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3E5AB] transition-colors">
                  {t('services')}
                </a>
              </li>
              <li>
                <a href="#find-service" className="hover:text-[#F3E5AB] transition-colors">
                  {t('findService')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F3E5AB] transition-colors">
                  {t('gallery')}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F3E5AB] transition-colors">
                  {t('location')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F3E5AB] transition-colors">
                  {t('faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Coordonnées Officielles
            </h4>

            <div className="space-y-2 text-xs text-[#FAF6F0]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>29 Rue de Bethléem, Résidence Washingtonia, Palmier, Casablanca 20340, Maroc</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  {currentHours.map((h, i) => (
                    <div key={i}>
                      {h.days} : <strong className="text-white">{h.time}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>WhatsApp : {BUSINESS_INFO.whatsappDisplay}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#FFE89E] text-[#1C1917] font-bold text-xs transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agenda Google Calendar</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF6F0]/60 gap-4">
          <p>© {new Date().getFullYear()} SOLAM BEAUTY — PIMP MY NAILS. {t('footerLegal')}</p>
          <p>{t('footerNote')}</p>
        </div>
      </div>
    </footer>
  );
};
