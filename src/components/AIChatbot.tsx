import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO, OFFICIAL_SERVICES } from '../data/salonData';
import { MessageCircle, X, Send, Sparkles, Calendar, ExternalLink, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionUrl?: string;
  actionLabel?: string;
  timestamp: string;
}

export const AIChatbot: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'bot',
      text:
        language === 'ar'
          ? 'مرحباً بكم في صولام بيوتي. كيف يمكنني مساعدتكم اليوم؟'
          : language === 'en'
          ? 'Hello and welcome to Solam Beauty. How may I help you today?'
          : 'Bonjour et bienvenue chez Solam Beauty. Comment puis-je vous aider ?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickActions = [
    { label: 'Services', query: 'Quels sont vos services ?' },
    { label: 'Prix', query: 'Quels sont vos tarifs ?' },
    { label: 'Horaires', query: 'Quels sont vos horaires ?' },
    { label: 'Prendre rendez-vous', query: 'Je souhaite prendre rendez-vous' },
    { label: 'Adresse', query: 'Où se trouve le salon ?' },
    { label: 'WhatsApp', query: 'Numéro WhatsApp' },
  ];

  // Verified deterministic Solam responder (Strictly non-hallucinatory)
  const generateSolamResponse = (query: string): { text: string; actionUrl?: string; actionLabel?: string } => {
    const q = query.toLowerCase().trim();

    // 1. Booking / Rendez-vous / Appointment / حجز / موعد
    if (
      q.includes('rendez-vous') ||
      q.includes('reserver') ||
      q.includes('réserver') ||
      q.includes('booking') ||
      q.includes('book') ||
      q.includes('appointment') ||
      q.includes('حجز') ||
      q.includes('موعد') ||
      q.includes('rendez vous') ||
      q.includes('rdv')
    ) {
      return {
        text:
          language === 'ar'
            ? 'يمكنكِ حجز موعدكِ مباشرة عبر تقويم جوجل الرسمي لصالون صولام بيوتي، أو التواصل معنا عبر واتساب على الرقم 0661253300.'
            : language === 'en'
            ? 'You can easily schedule your appointment through our official Google Calendar page, or reach out to us directly on WhatsApp at +212 6 61 25 33 00.'
            : 'Vous pouvez planifier votre rendez-vous en ligne directement via notre page officielle Google Calendar, ou nous contacter sur WhatsApp au 06 61 25 33 00.',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Accéder à Google Calendar',
      };
    }

    // 2. Address / Location / Où / Fin / فين / الموقع
    if (
      q.includes('adresse') ||
      q.includes('où') ||
      q.includes('ou se trouve') ||
      q.includes('fin') ||
      q.includes('localisation') ||
      q.includes('location') ||
      q.includes('where') ||
      q.includes('عنوان') ||
      q.includes('مكان') ||
      q.includes('فين كاينين') ||
      q.includes('palmier') ||
      q.includes('maps')
    ) {
      return {
        text:
          language === 'ar'
            ? 'عنوان الصالون: 29 زنقة بيت لحم، إقامة واشنطونيا، حي بلميي، الدار البيضاء 20340، المغرب.'
            : language === 'en'
            ? 'Our salon address: 29 Rue de Bethléem, Résidence Washingtonia, Palmier district, Casablanca 20340, Morocco.'
            : 'Notre salon est situé au 29 Rue de Bethléem, Résidence Washingtonia, Quartier Palmier, Casablanca 20340, Maroc.',
        actionUrl: BUSINESS_INFO.mapsUrl,
        actionLabel: 'Ouvrir sur Google Maps',
      };
    }

    // 3. Opening hours / Horaires / Waqtash / أوقات العمل
    if (
      q.includes('horaire') ||
      q.includes('heure') ||
      q.includes('ouvert') ||
      q.includes('ferme') ||
      q.includes('waqtach') ||
      q.includes('hours') ||
      q.includes('open') ||
      q.includes('ساعات') ||
      q.includes('أوقات') ||
      q.includes('مفتوح')
    ) {
      return {
        text:
          language === 'ar'
            ? 'مواعيد العمل الرسمية:\n• الأحد والاثنين: 12:00 – 19:00\n• من الثلاثاء إلى السبت: 10:30 – 19:30'
            : language === 'en'
            ? 'Our official opening hours are:\n• Sunday & Monday: 12:00 – 19:00\n• Tuesday to Saturday: 10:30 – 19:30'
            : 'Nos horaires d’ouverture officiels :\n• Dimanche et lundi : 12h00 – 19h00\n• Du mardi au samedi : 10h30 – 19h30',
      };
    }

    // 4. WhatsApp / Phone / Contact / Téléphone / نمرة
    if (
      q.includes('whatsapp') ||
      q.includes('contact') ||
      q.includes('telephone') ||
      q.includes('téléphone') ||
      q.includes('numero') ||
      q.includes('numéro') ||
      q.includes('phone') ||
      q.includes('هاتف') ||
      q.includes('واتساب') ||
      q.includes('تواصل') ||
      q.includes('nmra')
    ) {
      return {
        text:
          language === 'ar'
            ? `رقم الواتساب الرسمي لصالون صولام بيوتي هو: ${BUSINESS_INFO.whatsappDisplay} (+212 6 61 25 33 00).`
            : language === 'en'
            ? `Our official WhatsApp contact is: ${BUSINESS_INFO.whatsappDisplay} (+212 6 61 25 33 00).`
            : `Notre numéro WhatsApp officiel est le : ${BUSINESS_INFO.whatsappDisplay} (+212 6 61 25 33 00).`,
        actionUrl: BUSINESS_INFO.whatsappUrl,
        actionLabel: 'Discuter sur WhatsApp',
      };
    }

    // 5. Check specific services & prices (Biab, Footlogix, Gel, Brushing, etc.)
    if (q.includes('biab')) {
      return {
        text: 'Tarifs officiels Biab chez Solam Beauty :\n• Biab Semilac : 250 DH\n• Biab Gel Bottle : 300 DH\n• Biab avec Chablon : 500 DH\n• Dépose Biab ou Gel avec manucure : 100 DH',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Réserver un Biab',
      };
    }

    if (q.includes('footlogix') || q.includes('pedicure') || q.includes('pédicure')) {
      return {
        text: 'Tarifs officiels Pédicure chez Solam Beauty :\n• Pédicure (avec vernis normal) : 120 DH\n• Pédicure SPA : 150 DH\n• Pédicure Médicale Footlogix : 200 DH',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Réserver une Pédicure',
      };
    }

    if (q.includes('manucure') || q.includes('ongle')) {
      return {
        text: 'Exemples de prestations Onglerie chez Solam Beauty :\n• Manucure classique : 80 DH\n• Manucure SPA : 100 DH\n• Manucure Japonaise : 150 DH\n• Manucure Sèche + Vernis permanent : 150 DH\n• Pose Gel : 300 DH (Remplissage : 250 DH)\n• Nail Art par Ongle : à partir de 20 DH',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Voir la carte complète',
      };
    }

    if (q.includes('brushing') || q.includes('cheveux') || q.includes('coiffure') || q.includes('lissage')) {
      return {
        text: 'Tarifs officiels Coiffure chez Solam Beauty :\n• Brushing : 60 – 80 DH\n• Brushing + Babyliss : 100 DH\n• Pose Coloration : 100 DH\n• Coloration Sourcils : 50 DH\n• Soin de cheveux : 200 DH\n• Soin Lissage Protéine : à partir de 600 DH',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Prendre rendez-vous coiffure',
      };
    }

    if (q.includes('cire') || q.includes('epilation') || q.includes('épilation') || q.includes('esthetique') || q.includes('esthétique') || q.includes('fil')) {
      return {
        text: 'Tarifs officiels Esthétique chez Solam Beauty :\n• Duvet : 20 DH\n• Narine : 20 DH\n• Sourcils : 30 DH\n• Visage avec fil : 100 – 120 DH\n• Visage avec Cire : 80 – 100 DH\n• Aisselles : 40 DH\n• Demi Bras : 60 DH / Bras entier : 80 DH\n• Demi Jambes : 70 DH / Jambes Complètes : 120 DH\n• Cire complète (sans Bras) : 250 DH\n• Pose Cils : 100 DH',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Réserver un soin esthétique',
      };
    }

    // 6. General Prices / Prix / Tarifs / Taman / أثمنة / أسعار
    if (q.includes('prix') || q.includes('tarif') || q.includes('taman') || q.includes('combien') || q.includes('chhal') || q.includes('price') || q.includes('أسعار') || q.includes('ثمن')) {
      return {
        text: 'Nos prestations débutent à partir de 20 DH (Nail Art, duvet, narine). Vous pouvez consulter l’intégralité de notre carte officielle directement dans la section « Services & Carte » du site.',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Consulter la carte & Réserver',
      };
    }

    // 7. General Services / Prestations / خدمات
    if (q.includes('service') || q.includes('prestation') || q.includes('proposez') || q.includes('khadamat') || q.includes('خدمات')) {
      return {
        text: 'Solam Beauty propose 3 univers officiels :\n1. Onglerie (Manucures, Pédicures SPA & Footlogix, Gel, Biab, Nail art)\n2. Coiffure (Brushing, Babyliss, Colorations, Soins, Lissage Protéine)\n3. Esthétique (Épilation cire & fil, Pose de cils)',
        actionUrl: BUSINESS_INFO.bookingUrl,
        actionLabel: 'Découvrir nos soins',
      };
    }

    // 8. Strict fallback: Do NOT invent information!
    return {
      text:
        language === 'ar'
          ? 'المعلومة المطلوبة غير متوفرة في البيانات الرسمية المعتمدة للصالون. أدعوكم للتواصل مباشرة مع فريقنا عبر واتساب على الرقم 0661253300 لمساعدتكم.'
          : language === 'en'
          ? 'This specific information is not listed in our verified salon records. Please contact us directly on WhatsApp at +212 6 61 25 33 00 so our team can assist you.'
          : 'Je ne dispose pas de cette information spécifique dans notre documentation officielle. Je vous invite à nous contacter directement sur WhatsApp au 06 61 25 33 00 pour vous renseigner précisément.',
      actionUrl: BUSINESS_INFO.whatsappUrl,
      actionLabel: 'Contacter sur WhatsApp',
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const resp = generateSolamResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: resp.text,
        actionUrl: resp.actionUrl,
        actionLabel: resp.actionLabel,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[380px] max-h-[560px] h-[520px] bg-[#FDFBF7] rounded-3xl border border-[#D4AF37] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#43281C] text-white p-4 flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#D4AF37] flex items-center justify-center text-[#B08D22]">
                <Bot className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#F3E5AB] leading-tight">
                  Conseillère Solam AI
                </h3>
                <span className="text-[10px] text-white/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>En ligne • Palmier, Casablanca</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Chips */}
          <div className="bg-[#FAF6F0] px-3 py-2 border-b border-[#EFE7DA] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickActions.map((action, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(action.query)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-[#EFE7DA] text-[11px] font-semibold text-[#6D4C3D] hover:border-[#D4AF37] hover:text-[#B08D22] transition-colors shrink-0"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FDFBF7]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#43281C] text-[#D4AF37] flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#43281C] text-white rounded-br-xs rtl:rounded-br-2xl rtl:rounded-bl-xs'
                      : 'bg-[#FAF6F0] text-[#1C1917] border border-[#EFE7DA] rounded-bl-xs rtl:rounded-bl-2xl rtl:rounded-br-xs shadow-2xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Optional Action Button */}
                  {msg.actionUrl && (
                    <div className="mt-3 pt-2 border-t border-black/10">
                      <a
                        href={msg.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#43281C] text-[#F3E5AB] font-semibold text-[11px] hover:bg-[#6D4C3D] transition-colors"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{msg.actionLabel}</span>
                        <ExternalLink className="w-3 h-3 text-white/70" />
                      </a>
                    </div>
                  )}

                  <span
                    className={`block mt-1 text-[9px] text-right rtl:text-left ${
                      msg.sender === 'user' ? 'text-white/60' : 'text-[#5C5248]/60'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#5C5248] italic">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px]">Solam AI rédige une réponse...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#FAF6F0] border-t border-[#EFE7DA] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Posez une question sur nos soins, prix, horaires..."
              className="flex-1 bg-white border border-[#EFE7DA] focus:border-[#D4AF37] rounded-full py-2 px-4 text-xs text-[#1C1917] outline-none"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-full bg-[#43281C] text-white hover:bg-[#6D4C3D] disabled:opacity-40 transition-colors"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4 rtl:rotate-180" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#43281C] text-white shadow-xl hover:bg-[#6D4C3D] border-2 border-[#D4AF37] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer relative"
        aria-label="Ouvrir le chat avec Solam AI"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#F3E5AB]" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-[#F3E5AB]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-white animate-pulse" />
          </>
        )}
      </button>
    </div>
  );
};
