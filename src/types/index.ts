export type Language = 'fr' | 'ar' | 'en';

export interface ServiceItem {
  id: string;
  nameFr: string;
  nameEn: string;
  nameAr: string;
  price: string;
  category: 'onglerie' | 'coiffure' | 'esthetique';
  subCategory?: string;
}

export interface SalonSpace {
  id: string;
  assetFile: string;
  titleFr: string;
  titleEn: string;
  titleAr: string;
  descFr: string;
  descEn: string;
  descAr: string;
  category: string;
  tag: string;
  aspect: string;
}

export interface FAQItem {
  id: string;
  qFr: string;
  qEn: string;
  qAr: string;
  aFr: string;
  aEn: string;
  aAr: string;
}
