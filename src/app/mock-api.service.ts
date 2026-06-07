import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface NavItem { label: string; icon: string; }
export interface Banner { tag: string; title: string; subtitle: string; cta: string; ctaSecondary: string; image: string; }
export interface Category { id: number; name: string; icon: string; count: string; color: string; }
export interface Product { id: number; name: string; brand: string; price: number; originalPrice?: number; unit: string; rating: number; reviews: number; badge?: string; badgeType?: string; icon: string; }
export interface HealthTip { id: number; title: string; summary: string; category: string; readTime: string; icon: string; }
export interface Pharmacy { name: string; address: string; city: string; hours: string; phone: string; open: boolean; }
export interface Testimonial { id: number; name: string; location: string; text: string; rating: number; avatar: string; }
export interface PromoCard { title: string; description: string; cta: string; color: string; icon: string; }

@Injectable({ providedIn: 'root' })
export class MockApiService {

  getNavItems(): Observable<NavItem[]> {
    return of([
      { label: 'Producten', icon: '💊' },
      { label: 'Apotheek', icon: '🏥' },
      { label: 'Gezondheid', icon: '❤️' },
      { label: 'Huidverzorging', icon: '✨' },
      { label: 'Baby & Kind', icon: '👶' },
      { label: 'Aanbiedingen', icon: '🏷️' },
    ]).pipe(delay(100));
  }

  getBanner(): Observable<Banner> {
    return of({
      tag: 'Nieuw bij nonu',
      title: 'Jouw gezondheid,\nonze zorg',
      subtitle: 'Bestel medicijnen, verzorgingsproducten en gezondheidsadvies eenvoudig online. Snelle levering, persoonlijk advies.',
      cta: 'Ontdek producten',
      ctaSecondary: 'Vind een apotheek',
      image: '🏥',
    }).pipe(delay(150));
  }

  getCategories(): Observable<Category[]> {
    return of([
      { id: 1, name: 'Medicijnen',       icon: '💊', count: '2.400+ producten', color: '#E8F5EE' },
      { id: 2, name: 'Huidverzorging',   icon: '🧴', count: '1.800+ producten', color: '#FFF3E0' },
      { id: 3, name: 'Vitaminen',        icon: '🌿', count: '900+ producten',   color: '#E8F0FE' },
      { id: 4, name: 'Baby & Kind',      icon: '👶', count: '600+ producten',   color: '#FCE4EC' },
      { id: 5, name: 'Mondverzorging',   icon: '🦷', count: '450+ producten',   color: '#E3F2FD' },
      { id: 6, name: 'Sport & Voeding',  icon: '💪', count: '750+ producten',   color: '#F3E5F5' },
      { id: 7, name: 'Ogen & Oren',      icon: '👁️', count: '320+ producten',   color: '#E0F7FA' },
      { id: 8, name: 'Eerste Hulp',      icon: '🩹', count: '280+ producten',   color: '#FFF8E1' },
    ]).pipe(delay(200));
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Paracetamol 500mg',       brand: 'Nonu Pharma',  price: 2.49,  unit: '50 tabletten',  rating: 4.8, reviews: 1240, badge: 'Bestseller',  badgeType: 'green', icon: '💊' },
      { id: 2, name: 'Vitamine D3 1000 IE',      brand: 'HealthPlus',   price: 8.99,  originalPrice: 12.50, unit: '90 capsules',   rating: 4.9, reviews: 890,  badge: '28% korting', badgeType: 'orange', icon: '☀️' },
      { id: 3, name: 'Neutrogena Hydro Boost',   brand: 'Neutrogena',   price: 14.95, unit: '50ml',          rating: 4.7, reviews: 560,  badge: 'Nieuw',       badgeType: 'green', icon: '🧴' },
      { id: 4, name: 'Ibuprofen 400mg',          brand: 'Nonu Pharma',  price: 3.29,  unit: '30 tabletten',  rating: 4.6, reviews: 780,  icon: '💊' },
      { id: 5, name: 'Omega-3 Visolie',          brand: 'PureHealth',   price: 11.49, originalPrice: 14.99, unit: '60 capsules',   rating: 4.8, reviews: 430,  badge: '23% korting', badgeType: 'orange', icon: '🐟' },
      { id: 6, name: 'Cetaphil Moisturizing',    brand: 'Cetaphil',     price: 9.99,  unit: '250ml',         rating: 4.9, reviews: 1100, badge: 'Bestseller',  badgeType: 'green', icon: '🧴' },
      { id: 7, name: 'Magnesium 400mg',          brand: 'HealthPlus',   price: 7.49,  unit: '60 tabletten',  rating: 4.5, reviews: 320,  icon: '⚡' },
      { id: 8, name: 'Bepanthen Wondcrème',      brand: 'Bepanthen',    price: 6.79,  unit: '30g',           rating: 4.8, reviews: 950,  badge: 'Favoriet',    badgeType: 'green', icon: '🩹' },
    ]).pipe(delay(300));
  }

  getHealthTips(): Observable<HealthTip[]> {
    return of([
      { id: 1, title: 'Waarom vitamine D zo belangrijk is in de winter', summary: 'In de donkere maanden maken we minder vitamine D aan. Ontdek hoe je dit kunt aanvullen met voeding en supplementen.', category: 'Voeding', readTime: '3 min', icon: '☀️' },
      { id: 2, title: 'Gezond slapen: tips voor een betere nachtrust',    summary: 'Een goede nachtrust is essentieel voor je gezondheid. Lees onze praktische tips voor betere slaap.',              category: 'Leefstijl', readTime: '4 min', icon: '😴' },
      { id: 3, title: 'Huidverzorging in de winter: zo houd je je huid',  summary: 'Kou en wind trekken de vochtbalans uit je huid. Ontdek de beste producten en routines voor de wintermaanden.',    category: 'Huidverzorging', readTime: '5 min', icon: '❄️' },
    ]).pipe(delay(250));
  }

  getPharmacies(): Observable<Pharmacy[]> {
    return of([
      { name: 'nonu Amsterdam Centrum', address: 'Damrak 42',         city: 'Amsterdam', hours: 'Ma–Vr 08:00–18:00', phone: '020-1234567', open: true  },
      { name: 'nonu Rotterdam Zuid',    address: 'Zuidplein 88',      city: 'Rotterdam', hours: 'Ma–Za 08:30–17:30', phone: '010-9876543', open: true  },
      { name: 'nonu Utrecht Hoog Catharijne', address: 'Catharijnesingel 1', city: 'Utrecht', hours: 'Ma–Vr 08:00–17:00', phone: '030-3456789', open: false },
    ]).pipe(delay(180));
  }

  getTestimonials(): Observable<Testimonial[]> {
    return of([
      { id: 1, name: 'Lisa van den Berg',   location: 'Amsterdam', text: 'Geweldige service! Mijn medicijnen worden altijd snel bezorgd en het personeel is enorm behulpzaam. Echt een aanrader.',        rating: 5, avatar: '👩' },
      { id: 2, name: 'Mark de Vries',       location: 'Rotterdam', text: 'Ik ben al jaren klant bij nonu. Het gemak van online bestellen gecombineerd met persoonlijk advies is gewoon perfect.',          rating: 5, avatar: '👨' },
      { id: 3, name: 'Sophie Janssen',      location: 'Utrecht',   text: 'Super handig de app en website. Mijn herhalingsmedicatie kan ik eenvoudig nabestellen. De levering is altijd op tijd.',           rating: 5, avatar: '👩‍💼' },
    ]).pipe(delay(220));
  }

  getPromoCards(): Observable<PromoCard[]> {
    return of([
      { title: 'Gratis bezorging',        description: 'Bij bestellingen vanaf €25 bezorgen wij gratis aan huis.',            cta: 'Meer info', color: '#00843D', icon: '🚚' },
      { title: 'Persoonlijk advies',      description: 'Onze apothekers staan voor je klaar, online en in de apotheek.',       cta: 'Stel een vraag', color: '#0066CC', icon: '💬' },
      { title: 'Loyaliteitsprogramma',    description: 'Spaar punten bij elke aankoop en krijg exclusieve kortingen.',          cta: 'Meer info', color: '#FF6B2B', icon: '⭐' },
    ]).pipe(delay(130));
  }
}
