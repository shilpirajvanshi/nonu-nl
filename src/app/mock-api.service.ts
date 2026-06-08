import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface NavItem { label: string; icon: string; route?: string; }
export interface Banner { tag: string; title: string; subtitle: string; cta: string; ctaSecondary: string; image: string; }
export interface Category { id: number; name: string; icon: string; count: string; color: string; }
export interface Product { id: number; name: string; brand: string; price: number; originalPrice?: number; unit: string; rating: number; reviews: number; badge?: string; badgeType?: string; icon: string; }
export interface HealthTip { id: number; title: string; summary: string; category: string; readTime: string; icon: string; }
export interface Pharmacy { name: string; address: string; city: string; hours: string; phone: string; open: boolean; }
export interface Testimonial { id: number; name: string; location: string; text: string; rating: number; avatar: string; }
export interface PromoCard { title: string; description: string; cta: string; color: string; icon: string; }
export interface TopBannerSlide {
  id: number;
  tag: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  emoji: string;
  bgFrom: string;
  bgTo: string;
  accent: string;
}

@Injectable({ providedIn: 'root' })
export class MockApiService {

  getTopBannerSlides(): Observable<TopBannerSlide[]> {
    return of([
      {
        id: 1,
        tag: '🔥 Limited time offer',
        title: 'Up to 40% off\nVitamins & Supplements',
        description: 'Stock up on your daily essentials. Free delivery on orders over €25.',
        cta: 'Shop the sale',
        ctaLink: '/products',
        emoji: '🌿',
        bgFrom: '#00843D',
        bgTo: '#005a2a',
        accent: '#FFD700',
      },
      {
        id: 2,
        tag: '✨ New arrivals',
        title: 'Premium Skincare\nNow In Stock',
        description: 'Discover our curated range of dermatologist-recommended skincare products.',
        cta: 'Explore skincare',
        ctaLink: '/products',
        emoji: '🧴',
        bgFrom: '#1a6fa8',
        bgTo: '#0d4d7a',
        accent: '#FFB347',
      },
      {
        id: 3,
        tag: '💊 Pharmacy service',
        title: 'Repeat Prescriptions\nDelivered to Your Door',
        description: 'Upload your prescription in seconds. We handle the rest — fast and securely.',
        cta: 'Upload prescription',
        ctaLink: '/',
        emoji: '📋',
        bgFrom: '#7B2D8B',
        bgTo: '#521d5e',
        accent: '#80FFDB',
      },
      {
        id: 4,
        tag: '👶 Baby essentials',
        title: 'Everything Your\nBaby Needs',
        description: 'Trusted brands for newborns to toddlers. Gentle, safe and affordable.',
        cta: 'Shop baby range',
        ctaLink: '/products',
        emoji: '👶',
        bgFrom: '#D4A017',
        bgTo: '#a37810',
        accent: '#FFFFFF',
      },
    ]).pipe(delay(120));
  }

  getNavItems(): Observable<NavItem[]> {
    return of([
      { label: 'Products',     icon: '💊', route: '/products' },
      { label: 'Pharmacy',     icon: '🏥' },
      { label: 'Health',       icon: '❤️' },
      { label: 'Skincare',     icon: '✨' },
      { label: 'Baby & Child', icon: '👶' },
      { label: 'Deals',        icon: '🏷️' },
    ]).pipe(delay(100));
  }

  getBanner(): Observable<Banner> {
    return of({
      tag: 'New at mypharmacy',
      title: 'Your health,\nour care',
      subtitle: 'Order medicines, personal care products and health advice easily online. Fast delivery, personalised guidance.',
      cta: 'Discover products',
      ctaSecondary: 'Find a pharmacy',
      image: '🏥',
    }).pipe(delay(150));
  }

  getCategories(): Observable<Category[]> {
    return of([
      { id: 1, name: 'Medicines',      icon: '💊', count: '2,400+ products', color: '#E8F5EE' },
      { id: 2, name: 'Skincare',       icon: '🧴', count: '1,800+ products', color: '#FFF3E0' },
      { id: 3, name: 'Vitamins',       icon: '🌿', count: '900+ products',   color: '#E8F0FE' },
      { id: 4, name: 'Baby & Child',   icon: '👶', count: '600+ products',   color: '#FCE4EC' },
      { id: 5, name: 'Oral Care',      icon: '🦷', count: '450+ products',   color: '#E3F2FD' },
      { id: 6, name: 'Sport & Nutrition', icon: '💪', count: '750+ products', color: '#F3E5F5' },
      { id: 7, name: 'Eyes & Ears',    icon: '👁️', count: '320+ products',   color: '#E0F7FA' },
      { id: 8, name: 'First Aid',      icon: '🩹', count: '280+ products',   color: '#FFF8E1' },
    ]).pipe(delay(200));
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Paracetamol 500mg',       brand: 'MyPharmacy Own Brand', price: 2.49,  unit: '50 tablets',   rating: 4.8, reviews: 1240, badge: 'Bestseller',   badgeType: 'green',  icon: '💊' },
      { id: 2, name: 'Vitamin D3 1000 IU',       brand: 'HealthPlus',           price: 8.99,  originalPrice: 12.50, unit: '90 capsules',  rating: 4.9, reviews: 890,  badge: '28% off',      badgeType: 'orange', icon: '☀️' },
      { id: 3, name: 'Neutrogena Hydro Boost',   brand: 'Neutrogena',           price: 14.95, unit: '50ml',          rating: 4.7, reviews: 560,  badge: 'New',          badgeType: 'green',  icon: '🧴' },
      { id: 4, name: 'Ibuprofen 400mg',          brand: 'MyPharmacy Own Brand', price: 3.29,  unit: '30 tablets',   rating: 4.6, reviews: 780,  icon: '💊' },
      { id: 5, name: 'Omega-3 Fish Oil',         brand: 'PureHealth',           price: 11.49, originalPrice: 14.99, unit: '60 capsules',  rating: 4.8, reviews: 430,  badge: '23% off',      badgeType: 'orange', icon: '🐟' },
      { id: 6, name: 'Cetaphil Moisturizing',    brand: 'Cetaphil',             price: 9.99,  unit: '250ml',         rating: 4.9, reviews: 1100, badge: 'Bestseller',   badgeType: 'green',  icon: '🧴' },
      { id: 7, name: 'Magnesium 400mg',          brand: 'HealthPlus',           price: 7.49,  unit: '60 tablets',   rating: 4.5, reviews: 320,  icon: '⚡' },
      { id: 8, name: 'Bepanthen Wound Cream',    brand: 'Bepanthen',            price: 6.79,  unit: '30g',           rating: 4.8, reviews: 950,  badge: 'Favourite',    badgeType: 'green',  icon: '🩹' },
    ]).pipe(delay(300));
  }

  getHealthTips(): Observable<HealthTip[]> {
    return of([
      { id: 1, title: 'Why vitamin D is so important in winter',      summary: 'During the darker months we produce less vitamin D. Find out how to supplement it through diet and vitamins.',                       category: 'Nutrition',  readTime: '3 min', icon: '☀️' },
      { id: 2, title: 'Healthy sleep: tips for a better night\'s rest', summary: 'A good night\'s sleep is essential for your health. Read our practical tips for better, deeper sleep every night.',              category: 'Lifestyle',  readTime: '4 min', icon: '😴' },
      { id: 3, title: 'Winter skincare: how to keep your skin healthy', summary: 'Cold weather and wind strip moisture from your skin. Discover the best products and routines for the winter months.',             category: 'Skincare',   readTime: '5 min', icon: '❄️' },
    ]).pipe(delay(250));
  }

  getPharmacies(): Observable<Pharmacy[]> {
    return of([
      { name: 'mypharmacy Amsterdam Centre', address: 'Damrak 42',          city: 'Amsterdam', hours: 'Mon–Fri 08:00–18:00', phone: '020-1234567', open: true  },
      { name: 'mypharmacy Rotterdam South',  address: 'Zuidplein 88',       city: 'Rotterdam', hours: 'Mon–Sat 08:30–17:30', phone: '010-9876543', open: true  },
      { name: 'mypharmacy Utrecht Central',  address: 'Catharijnesingel 1', city: 'Utrecht',   hours: 'Mon–Fri 08:00–17:00', phone: '030-3456789', open: false },
    ]).pipe(delay(180));
  }

  getTestimonials(): Observable<Testimonial[]> {
    return of([
      { id: 1, name: 'Lisa van den Berg', location: 'Amsterdam', text: 'Great service! My medicines always arrive quickly and the staff is incredibly helpful. Highly recommended.',               rating: 5, avatar: '👩' },
      { id: 2, name: 'Mark de Vries',     location: 'Rotterdam', text: 'I\'ve been a customer of mypharmacy for years. The convenience of ordering online combined with personal advice is simply perfect.', rating: 5, avatar: '👨' },
      { id: 3, name: 'Sophie Janssen',    location: 'Utrecht',   text: 'Super handy app and website. I can easily reorder my repeat medication. Delivery is always on time.',                         rating: 5, avatar: '👩‍💼' },
    ]).pipe(delay(220));
  }

  getPromoCards(): Observable<PromoCard[]> {
    return of([
      { title: 'Free delivery',        description: 'We deliver free to your door on orders over €25.',                    cta: 'Learn more',    color: '#00843D', icon: '🚚' },
      { title: 'Personal advice',      description: 'Our pharmacists are here for you, online and in the pharmacy.',       cta: 'Ask a question', color: '#0066CC', icon: '💬' },
      { title: 'Loyalty programme',    description: 'Earn points with every purchase and get exclusive discounts.',         cta: 'Learn more',    color: '#FF6B2B', icon: '⭐' },
    ]).pipe(delay(130));
  }
}
