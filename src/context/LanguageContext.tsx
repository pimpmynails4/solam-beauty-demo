import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  fr: {
    // Nav & General
    brandName: 'Solam Beauty',
    subBrand: 'Pimp My Nails',
    bookAppointment: 'Prendre rendez-vous',
    discoverServices: 'Découvrir nos prestations',
    theExperience: 'L’Expérience',
    whySolam: 'Pourquoi Solam',
    services: 'Prestations & Carte',
    findService: 'Trouver un soin',
    gallery: 'Galerie du Salon',
    reviews: 'Avis Clientes',
    location: 'Accès & Plan',
    faq: 'Questions fréquentes',
    contact: 'Contact',
    reserve: 'Réserver',
    hours: 'Horaires d’ouverture',
    addressTitle: 'Adresse du Salon',
    viewOnGoogleMaps: 'Ouvrir sur Google Maps',
    viewGoogleReviews: 'Voir les avis Google',
    allServices: 'Toutes les prestations',
    filterNails: 'Onglerie',
    filterHair: 'Coiffure',
    filterAesthetics: 'Esthétique',
    searchPlaceholder: 'Rechercher un soin (ex: Biab, Pédicure, Brushing...)',
    resultsCount: 'soin(s) trouvé(s)',
    noServicesFound: 'Aucune prestation trouvée pour votre recherche.',
    resetFilter: 'Réinitialiser la recherche',
    // Sections
    heroBadge: 'Casablanca — Quartier Palmier',
    heroTagline: 'L’élégance jusqu’au bout des doigts',
    heroDesc: 'Maison de beauté et onglerie haute précision au cœur de Casablanca. Un écrin de sérénité dédié à la sublimation de vos mains, de votre chevelure et de votre bien-être.',
    expBadge: 'Architecture & Atmosphère',
    expTitle: 'L’Écrin Solam Beauty',
    expDesc: 'Poussez les portes d’un salon pensé comme un sanctuaire de lumière, d’arches chaleureuses et de design contemporain.',
    whyBadge: 'Nos Engagements',
    whyTitle: 'Pourquoi Choisir Solam Beauty ?',
    whySubtitle: 'Une exigence absolue de qualité, un savoir-faire méticuleux et une expérience pensée pour votre confort.',
    servicesBadge: 'Tarifs & Soins Officiels',
    servicesTitle: 'La Carte des Prestations',
    servicesSubtitle: 'Tarifs transparents en dirhams marocains (DH), sans frais cachés. Réservez votre créneau en un clic.',
    findServiceBadge: 'Navigation Rapide',
    findServiceTitle: 'Que recherchez-vous aujourd’hui ?',
    findServiceDesc: 'Explorez nos prestations officielles par catégorie et sélectionnez votre soin sur mesure.',
    galleryBadge: 'Visite Virtuelle',
    galleryTitle: 'Les Espaces du Salon en Images',
    galleryDesc: 'Découvrez les photographies réelles de notre salon : bar à ongles, pedicure spa, mezzanine et salon de coiffure.',
    filterAll: 'Tous les espaces',
    filterArch: 'Architecture',
    filterLounge: 'Lounge & Réception',
    filterPedicure: 'Pédicure Spa',
    reviewsBadge: 'Témoignages & Réputation',
    reviewsTitle: 'L’Avis de nos Clientes',
    reviewsDesc: 'Votre satisfaction et votre fidélité sont au cœur de chaque geste. Consultez les retours et évaluations authentiques déposés sur notre fiche officielle Google.',
    reviewsCta: 'Voir les avis sur Google Maps',
    bookingBadge: 'Réservation Instantanée',
    bookingTitle: 'Prendre Rendez-vous',
    bookingDesc: 'Choisissez votre prestation et planifiez votre visite en toute simplicité via notre page officielle Google Calendar.',
    bookingStepsTitle: 'Comment réserver votre moment ?',
    step1Title: '1. Choisissez votre prestation',
    step1Desc: 'Sélectionnez le soin de votre choix dans notre carte officielle.',
    step2Title: '2. Sélectionnez votre créneau',
    step2Desc: 'Accédez à notre agenda officiel Google Calendar et validez la date souhaitée.',
    step3Title: '3. Confirmation immédiate',
    step3Desc: 'Votre rendez-vous est bloqué et synchronisé avec votre agenda.',
    locationBadge: 'Situation Géographique',
    locationTitle: 'Venir au Salon',
    locationDesc: 'Situé au cœur du quartier résidentiel et prisé Palmier à Casablanca, dans un environnement calme et accessible.',
    socialBadge: 'Communauté',
    socialTitle: 'Suivez Solam Beauty',
    socialDesc: 'Retrouvez nos créations exclusives, conseils beauté et coulisses du salon sur nos réseaux sociaux officiels.',
    chatBadge: 'Conseillère Virtuelle',
    chatTitle: 'Une question ? Solam AI vous répond',
    chatDesc: 'Notre assistante intelligente répond à toutes vos questions sur nos prestations, tarifs officiels et accès.',
    finalCtaTitle: 'Sublimez vos ongles & votre beauté dès aujourd’hui',
    finalCtaDesc: 'Prenez place dans notre salon d’exception à Casablanca pour un moment de pure détente et de perfection.',
    footerLegal: 'Tous droits réservés.',
    footerNote: '29 Rue de Bethléem, Résidence Washingtonia, Palmier, Casablanca.',
  },
  en: {
    // Nav & General
    brandName: 'Solam Beauty',
    subBrand: 'Pimp My Nails',
    bookAppointment: 'Book Appointment',
    discoverServices: 'Discover Services',
    theExperience: 'The Experience',
    whySolam: 'Why Solam',
    services: 'Services & Menu',
    findService: 'Find a Treatment',
    gallery: 'Salon Gallery',
    reviews: 'Client Reviews',
    location: 'Location & Map',
    faq: 'FAQ',
    contact: 'Contact',
    reserve: 'Book Now',
    hours: 'Opening Hours',
    addressTitle: 'Salon Address',
    viewOnGoogleMaps: 'Open in Google Maps',
    viewGoogleReviews: 'View Google Reviews',
    allServices: 'All Treatments',
    filterNails: 'Nails & Manicure',
    filterHair: 'Hair Care & Styling',
    filterAesthetics: 'Aesthetics & Waxing',
    searchPlaceholder: 'Search a treatment (e.g., Biab, Pedicure, Blow-dry...)',
    resultsCount: 'treatment(s) found',
    noServicesFound: 'No services match your search.',
    resetFilter: 'Reset search',
    // Sections
    heroBadge: 'Casablanca — Palmier District',
    heroTagline: 'Elegance down to your fingertips',
    heroDesc: 'Luxury beauty sanctuary and high-precision nail salon in the heart of Casablanca. A serene haven crafted to elevate your hands, hair, and feminine well-being.',
    expBadge: 'Architecture & Ambiance',
    expTitle: 'The Solam Beauty Sanctuary',
    expDesc: 'Step inside a modern beauty haven illuminated by organic curves, warm architectural oak, and bespoke comfort.',
    whyBadge: 'Our Principles',
    whyTitle: 'Why Choose Solam Beauty?',
    whySubtitle: 'Uncompromising attention to detail, hygienic precision, and an ambiance tailored to supreme relaxation.',
    servicesBadge: 'Official Treatments & Prices',
    servicesTitle: 'Our Official Services Menu',
    servicesSubtitle: 'Transparent pricing in Moroccan Dirhams (DH), with no hidden costs. Book your preferred time in seconds.',
    findServiceBadge: 'Quick Finder',
    findServiceTitle: 'What are you looking for today?',
    findServiceDesc: 'Explore our authentic service categories and find your ideal beauty ritual.',
    galleryBadge: 'Virtual Tour',
    galleryTitle: 'Real Photographs of the Salon',
    galleryDesc: 'Authentic photos capturing our space: nail bar, luxury pedicure thrones, mezzanine chandelier, and styling stations.',
    filterAll: 'All Spaces',
    filterArch: 'Architecture',
    filterLounge: 'Lounge & Welcome',
    filterPedicure: 'Pedicure Spa',
    reviewsBadge: 'Client Trust',
    reviewsTitle: 'What Our Clients Say',
    reviewsDesc: 'Your satisfaction drives everything we do. Read real reviews and testimonials on our verified Google Maps business listing.',
    reviewsCta: 'View Reviews on Google Maps',
    bookingBadge: 'Instant Online Scheduling',
    bookingTitle: 'Book Your Appointment',
    bookingDesc: 'Schedule your appointment in a few clicks directly through our official Google Calendar appointment page.',
    bookingStepsTitle: 'How booking works',
    step1Title: '1. Choose your service',
    step1Desc: 'Pick your desired manicure, pedicure, or hair care ritual from our official menu.',
    step2Title: '2. Select your time slot',
    step2Desc: 'Open our official Google Calendar page and pick a convenient date and time.',
    step3Title: '3. Instant confirmation',
    step3Desc: 'Your booking is locked in and synced directly with your calendar.',
    locationBadge: 'Location & Access',
    locationTitle: 'Visit Our Salon',
    locationDesc: 'Located in the prestigious Palmier neighborhood of Casablanca, easily accessible with calm surrounding streets.',
    socialBadge: 'Community',
    socialTitle: 'Follow Solam Beauty',
    socialDesc: 'Stay updated with our latest nail art inspirations, hair treatments, and behind-the-scenes moments.',
    chatBadge: 'Virtual Beauty Advisor',
    chatTitle: 'Have a Question? Ask Solam AI',
    chatDesc: 'Our dedicated salon assistant answers your questions regarding official services, exact pricing, and directions.',
    finalCtaTitle: 'Elevate your nails & natural beauty today',
    finalCtaDesc: 'Treat yourself to an extraordinary moment of pampering at Casablanca’s premier nail & beauty destination.',
    footerLegal: 'All rights reserved.',
    footerNote: '29 Rue de Bethléem, Residence Washingtonia, Palmier, Casablanca.',
  },
  ar: {
    // Nav & General
    brandName: 'صولام بيوتي',
    subBrand: 'بيمب ماي نيلز',
    bookAppointment: 'حجز موعد',
    discoverServices: 'استكشاف الخدمات',
    theExperience: 'تجربة صولام',
    whySolam: 'لماذا صولام',
    services: 'قائمة الخدمات والأسعار',
    findService: 'البحث عن خدمة',
    gallery: 'معرض صور الصالون',
    reviews: 'آراء العميلات',
    location: 'الموقع والخريطة',
    faq: 'الأسئلة الشائعة',
    contact: 'تواصل معنا',
    reserve: 'احجزي الآن',
    hours: 'أوقات العمل',
    addressTitle: 'عنوان الصالون',
    viewOnGoogleMaps: 'فتح في خرائط جوجل',
    viewGoogleReviews: 'مشاهدة تقييمات جوجل',
    allServices: 'جميع الخدمات',
    filterNails: 'العناية بالأظافر',
    filterHair: 'تصفيف وعلاج الشعر',
    filterAesthetics: 'التجميل وإزالة الشعر',
    searchPlaceholder: 'ابحثي عن خدمة (مثال: بياب، باديكير، بروشينغ...)',
    resultsCount: 'خدمة متوفرة',
    noServicesFound: 'لم يتم العثور على خدمات مطابقة لبحثك.',
    resetFilter: 'إعادة تعيين البحث',
    // Sections
    heroBadge: 'الدار البيضاء — حي بلميي الراقي',
    heroTagline: 'الأناقة حتى أطراف الأصابع',
    heroDesc: 'ملاذ فاخر للعناية بالأظافر والجمال في قلب الدار البيضاء. أجواء هادئة وتصاميم معمارية فريدة مخصصة لإبراز جمال يديك وشعرك وأنوثتك بأعلى معايير الإتقان.',
    expBadge: 'الهندسة المعمارية والأجواء',
    expTitle: 'فخامة وأناقة صولام بيوتي',
    expDesc: 'استمتعي بأجواء مصممة بعناية تجمع بين الأقواس الخشبية الدافئة، الإضاءة الطبيعية والتصميم العصري المريح.',
    whyBadge: 'مميزاتنا',
    whyTitle: 'لماذا تختارين صولام بيوتي؟',
    whySubtitle: 'دقة واحترافية عالية، نظافة فائقة وتجربة متكاملة مصممة خصيصاً لراحتك وجمالك.',
    servicesBadge: 'الأسعار والخدمات الرسمية',
    servicesTitle: 'قائمة الأسعار والخدمات',
    servicesSubtitle: 'أسعار واضحة ودقيقة بالدرهم المغربي (DH) بدون أي تكاليف خفية. احجزي موعدك بضغطة زر واحدة.',
    findServiceBadge: 'تصفح سريع',
    findServiceTitle: 'ما هي الخدمة التي تبحثين عنها اليوم؟',
    findServiceDesc: 'تصفحي خدماتنا الرسمية حسب الفئة واختاري العناية المثالية التي تناسبك.',
    galleryBadge: 'جولة افتراضية',
    galleryTitle: 'صور حقيقية لصالون صولام',
    galleryDesc: 'شاهدي الصور الحقيقية لأرجاء الصالون: ركن المانيكير، كراسي الباديكير سبا الفخمة، الميزانين وركن تصفيف الشعر.',
    filterAll: 'جميع الأركان',
    filterArch: 'الهندسة والتصميم',
    filterLounge: 'الاستقبال والاستراحة',
    filterPedicure: 'الباديكير سبا',
    reviewsBadge: 'ثقة العميلات',
    reviewsTitle: 'آراء وتقييمات العميلات',
    reviewsDesc: 'رضاكِ وسعادتكِ هما غايتنا الأولى في كل لمسة. يمكنكِ الاطلاع على التقييمات الحقيقية لعميلاتنا على صفحتنا الرسمية في خرائط جوجل.',
    reviewsCta: 'مشاهدة التقييمات على خرائط جوجل',
    bookingBadge: 'حجز فوري ومباشر',
    bookingTitle: 'حجز موعدك بسهولة',
    bookingDesc: 'حددي الخدمة المطلوبة واختاري الموعد الذي يناسبك مباشرة عبر الرابط الرسمي لتقويم جوجل (Google Calendar).',
    bookingStepsTitle: 'خطوات الحجز البسيطة',
    step1Title: '١. اختاري الخدمة',
    step1Desc: 'حددي الخدمة المطلوبة من قائمتنا الرسمية للأظافر أو الشعر أو التجميل.',
    step2Title: '٢. حددي الوقت والتاريخ',
    step2Desc: 'افتحي رابط تقويم جوجل الرسمي واختاري التاريخ والوقت المناسب لك.',
    step3Title: '٣. تأكيد فوري للموعد',
    step3Desc: 'يتم حجز موعدك فوراً وتثبيته في جدول مواعيدك دون أي تعقيد.',
    locationBadge: 'الموقع والوصول',
    locationTitle: 'زيارة الصالون',
    locationDesc: 'يقع الصالون في موقع متميز وهادئ بحي بلميي في الدار البيضاء، مع سهولة الوصول ومواقف متاحة.',
    socialBadge: 'مجتمع صولام',
    socialTitle: 'تابعي صولام بيوتي',
    socialDesc: 'شاهدي أحدث إبداعاتنا في رسم الأظافر، عناية الشعر واللقطات الحصرية عبر حساباتنا الرسمية.',
    chatBadge: 'المستشارة الذكية',
    chatTitle: 'لديكِ سؤال؟ مستشارة صولام الذكية تجيبك',
    chatDesc: 'مساعدتك الذكية مستعدة للإجابة عن استفساراتك حول الخدمات، الأسعار الرسمية وطرق الوصول وحجز المواعيد.',
    finalCtaTitle: 'تألقي بأظافر مثالية وجمال لا يُضاهى اليوم',
    finalCtaDesc: 'احجزي جلستك الآن في أرقى صالونات الدار البيضاء واستمتعي بتجربة استرخاء وإتقان استثنائية.',
    footerLegal: 'جميع الحقوق محفوظة.',
    footerNote: '29 زنقة بيت لحم، إقامة واشنطونيا، حي بلميي، الدار البيضاء.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('solam_lang');
    if (saved === 'ar' || saved === 'en' || saved === 'fr') {
      return saved as Language;
    }
    return 'fr'; // French default
  });

  const dir: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('solam_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    if (language === 'ar') {
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.classList.remove('font-arabic');
    }
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS.fr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
