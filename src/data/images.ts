/**
 * Centralized Image Architecture for Solam Beauty — Pimp My Nails
 * 
 * NOTE: These are TEMPORARY DEVELOPMENT IMAGES to support layout, responsiveness,
 * and aesthetic verification. They represent a luxury beauty editorial style
 * (warm cream, wood, champagne, manicure close-ups).
 * 
 * When official Solam photographs are exported to the project:
 * Simply replace the files in /public/images/ or update the paths below.
 * Replacing solam-hero-temp.jpg with solam-hero.jpg requires NO layout or code redesign.
 */

export interface SolamImage {
  src: string;
  altFr: string;
  altEn: string;
  altAr: string;
  caption?: string;
  isTemporary: boolean;
}

export interface GalleryImageItem {
  id: string;
  src: string;
  titleFr: string;
  titleEn: string;
  titleAr: string;
  category: string;
  tag: string;
  isTemporary: boolean;
}

export const SOLAM_IMAGES = {
  // Hero Section
  hero: {
    src: '/images/solam-hero-temp.jpg',
    altFr: 'Manucure d’exception et détails précieux chez Solam Beauty',
    altEn: 'High-precision luxury manicure and jewelry details at Solam Beauty',
    altAr: 'مانيكير فاخر وتفاصيل راقية لدى صولام بيوتي',
    isTemporary: true,
  },

  // The Solam Experience Section
  experience: {
    mezzanine: {
      src: '/images/solam-experience-temp-01.jpg',
      altFr: 'Espace architectural raffiné avec lustre et boiseries chaudes',
      altEn: 'Refined architectural salon interior with chandelier and warm wood',
      altAr: 'مساحة معمارية أنيقة بثريا فخمة ولمسات خشبية دافئة',
      isTemporary: true,
    },
    lounge: {
      src: '/images/solam-experience-temp-02.jpg',
      altFr: 'Lounge de détente aux formes organiques et mobilier bouclé',
      altEn: 'Relaxation lounge with organic furniture and warm aesthetic',
      altAr: 'صالون استرخاء بتصاميم انسيابية وأثاث مريح دافئ',
      isTemporary: true,
    },
    nailBar: {
      src: '/images/solam-experience-temp-03.jpg',
      altFr: 'Poste de manucure et bar à ongles de haute précision',
      altEn: 'Precision manicure station and nail bar care',
      altAr: 'طاولة مانيكير دقيقة وركن أظافر عصري',
      isTemporary: true,
    },
    pedicureSpa: {
      src: '/images/solam-experience-temp-04.jpg',
      altFr: 'Sanctuaire de bien-être et pédicure spa',
      altEn: 'Pedicure spa and wellness sanctuary',
      altAr: 'جناح الباديكير سبا والعناية الفائقة بالقدمين',
      isTemporary: true,
    },
  },

  // Find Your Service & Service Categories
  services: {
    nails: {
      src: '/images/solam-service-nails.jpg',
      altFr: 'Prestation d’onglerie sur mesure, gel et nail art',
      altEn: 'Bespoke nails, gel, Biab and nail art',
      altAr: 'خدمات الأظافر، جل، بياب وفن الأظافر المبتكر',
      isTemporary: true,
    },
    pedicure: {
      src: '/images/solam-service-pedicure.jpg',
      altFr: 'Pédicure médicale Footlogix et rituel de soin',
      altEn: 'Footlogix medical pedicure and spa treatment',
      altAr: 'باديكير طبي فوتلوجيكس وجلسات العناية المنعشة',
      isTemporary: true,
    },
    hair: {
      src: '/images/solam-service-hair.jpg',
      altFr: 'Coiffage professionnel, brushing et soins capillaires',
      altEn: 'Hair styling, blow-dry and nourishing care',
      altAr: 'تصفيف احترافي، بروشينغ وعلاجات مغذية للشعر',
      isTemporary: true,
    },
    aesthetics: {
      src: '/images/solam-service-aesthetics.jpg',
      altFr: 'Cabine d’esthétique, épilation au fil/cire et regard',
      altEn: 'Private aesthetic cabin, facial care and lashes',
      altAr: 'غرفة العناية التجميلية، إزالة الشعر والرموش',
      isTemporary: true,
    },
  },

  // Gallery Section (Editorial Masonry)
  gallery: [
    {
      id: 'gal-1',
      src: '/images/solam-gallery-temp-01.jpg',
      titleFr: 'Nail Art & Manucure Haute Précision',
      titleEn: 'Precision Nail Art & Manicure',
      titleAr: 'فن الأظافر والمانيكير عالي الدقة',
      category: 'Onglerie',
      tag: 'Nail Art Minimaliste',
      isTemporary: true,
    },
    {
      id: 'gal-2',
      src: '/images/solam-gallery-temp-02.jpg',
      titleFr: 'Atmosphère Chaleureuse & Boiseries',
      titleEn: 'Warm Salon Ambiance & Woodwork',
      titleAr: 'أجواء دافئة وتصاميم خشبية متناسقة',
      category: 'Architecture',
      tag: 'Écrin Lumineux',
      isTemporary: true,
    },
    {
      id: 'gal-3',
      src: '/images/solam-gallery-temp-03.jpg',
      titleFr: 'Espace Coiffure & Bac Shampoing',
      titleEn: 'Hair Styling & Shampoo Area',
      titleAr: 'ركن تصفيف وغسيل الشعر',
      category: 'Coiffure',
      tag: 'Soins Capillaires',
      isTemporary: true,
    },
    {
      id: 'gal-4',
      src: '/images/solam-gallery-temp-04.jpg',
      titleFr: 'Cabine Privée & Rituels Beauté',
      titleEn: 'Private Aesthetics Suite',
      titleAr: 'غرفة التجميل والعناية الخاصة',
      category: 'Esthétique',
      tag: 'Sérénité & Intimité',
      isTemporary: true,
    },
    {
      id: 'gal-5',
      src: '/images/solam-gallery-temp-05.jpg',
      titleFr: 'Pédicure Spa & Détente Absolue',
      titleEn: 'Pedicure Spa & Deep Relaxation',
      titleAr: 'باديكير سبا واسترخاء تام',
      category: 'Pédicure',
      tag: 'Soin Pieds & Spa',
      isTemporary: true,
    },
    {
      id: 'gal-6',
      src: '/images/solam-gallery-temp-06.jpg',
      titleFr: 'Détails & Mobilier d’Exposition',
      titleEn: 'Interior Details & Custom Joinery',
      titleAr: 'تفاصيل الديكور والأرفف الفنية',
      category: 'Design',
      tag: 'Finitions de Luxe',
      isTemporary: true,
    },
  ] as GalleryImageItem[],
};
