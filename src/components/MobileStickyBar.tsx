import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Calendar, MessageCircle, MapPin } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Actions rapides mobiles"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#EFE7DA] p-3 shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp Quick Icon */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-emerald-600 text-white shrink-0 active:scale-95 shadow-sm"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Primary Booking Button to Google Calendar */}
        <a
          href={BUSINESS_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#43281C] text-white font-semibold text-xs shadow-md active:scale-95"
        >
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span>{t('bookAppointment')}</span>
        </a>

        {/* Map Direct Button */}
        <a
          href={BUSINESS_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#FAF6F0] border border-[#EFE7DA] text-[#43281C] shrink-0 active:scale-95"
          aria-label="Google Maps"
        >
          <MapPin className="w-5 h-5 text-[#D4AF37]" />
        </a>
      </div>
    </aside>
  );
};
