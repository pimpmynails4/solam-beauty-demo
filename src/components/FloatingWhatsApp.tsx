import React from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  // Verified official number: 0661253300 (Morocco +212)
  const whatsappUrl = BUSINESS_INFO.whatsappUrl;

  if (!whatsappUrl || !BUSINESS_INFO.whatsappNumber) {
    return null;
  }

  return (
    <aside
      aria-label="Contact WhatsApp"
      className="fixed bottom-6 left-6 rtl:left-auto rtl:right-24 z-40 hidden sm:block"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 border border-white/20"
        aria-label="Contacter le salon sur WhatsApp (0661253300)"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-xs font-semibold tracking-wide hidden md:inline">
          WhatsApp • {BUSINESS_INFO.whatsappDisplay}
        </span>
      </a>
    </aside>
  );
};
