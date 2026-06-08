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
export interface PharmacyService { icon: string; title: string; description: string; cta: string; }
export interface HealthCategory { id: number; icon: string; title: string; count: string; color: string; }
export interface HealthArticle { id: number; icon: string; title: string; summary: string; category: string; readTime: string; author: string; }
export interface SkincareCategory { id: number; icon: string; name: string; tip: string; color: string; }
export interface SkincareBrand { name: string; logo: string; tag: string; }
export interface BabyAgeGroup { id: number; label: string; age: string; icon: string; color: string; }
export interface BabyCategory { icon: string; name: string; description: string; }
export interface Deal { id: number; title: string; brand: string; originalPrice: number; salePrice: number; discount: number; icon: string; endsIn: string; badge: string; }
export interface DealBundle { icon: string; title: string; items: string[]; price: number; originalPrice: number; }
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
        bgFrom: '#C0392B',
        bgTo: '#922B21',
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
        bgFrom: '#1565C0',
        bgTo: '#0D47A1',
        accent: '#FFC107',
      },
      {
        id: 3,
        tag: '💊 Pharmacy service',
        title: 'Repeat Prescriptions\nDelivered to Your Door',
        description: 'Upload your prescription in seconds. We handle the rest — fast and securely.',
        cta: 'Upload prescription',
        ctaLink: '/',
        emoji: '📋',
        bgFrom: '#6A1B9A',
        bgTo: '#4A148C',
        accent: '#E0F7FA',
      },
      {
        id: 4,
        tag: '👶 Baby essentials',
        title: 'Everything Your\nBaby Needs',
        description: 'Trusted brands for newborns to toddlers. Gentle, safe and affordable.',
        cta: 'Shop baby range',
        ctaLink: '/products',
        emoji: '👶',
        bgFrom: '#E65100',
        bgTo: '#BF360C',
        accent: '#FFFFFF',
      },
    ]).pipe(delay(120));
  }

  getNavItems(): Observable<NavItem[]> {
    return of([
      { label: 'Products',     icon: '💊', route: '/products' },
      { label: 'Pharmacy',     icon: '🏥', route: '/pharmacy' },
      { label: 'Health',       icon: '❤️', route: '/health' },
      { label: 'Skincare',     icon: '✨', route: '/skincare' },
      { label: 'Baby & Child', icon: '👶', route: '/baby' },
      { label: 'Deals',        icon: '🏷️', route: '/deals' },
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

  /* ===== PHARMACY PAGE ===== */
  getPharmacyServices(): Observable<PharmacyService[]> {
    return of([
      { icon: '📋', title: 'Prescription Dispensing',  description: 'Upload or bring your prescription. We dispense quickly and accurately with full pharmacist review.', cta: 'Upload prescription' },
      { icon: '💉', title: 'Vaccinations',             description: 'Flu jabs, travel vaccines, COVID boosters and more — walk in or book an appointment online.',         cta: 'Book appointment' },
      { icon: '💬', title: 'Pharmacist Consultation',  description: 'Free one-to-one advice with our qualified pharmacists. In-store, by phone or via live chat.',         cta: 'Chat now' },
      { icon: '🩺', title: 'Health Checks',            description: 'Blood pressure, cholesterol, diabetes screening and BMI checks available at all locations.',           cta: 'Book a check' },
      { icon: '🔄', title: 'Repeat Prescriptions',     description: 'We make managing your repeat medication simple. Order online and collect or get home delivery.',       cta: 'Order repeat' },
      { icon: '🏠', title: 'Home Delivery',            description: 'Can\'t visit us? We deliver your medication straight to your door — free on orders over €25.',        cta: 'Learn more' },
    ]).pipe(delay(160));
  }

  getAllPharmacies(): Observable<Pharmacy[]> {
    return of([
      { name: 'mypharmacy Amsterdam Centre', address: 'Damrak 42',            city: 'Amsterdam', hours: 'Mon–Fri 08:00–18:00', phone: '020-1234567', open: true  },
      { name: 'mypharmacy Amsterdam South',  address: 'Parnassusweg 819',     city: 'Amsterdam', hours: 'Mon–Sat 08:30–18:00', phone: '020-5678901', open: true  },
      { name: 'mypharmacy Rotterdam South',  address: 'Zuidplein 88',         city: 'Rotterdam', hours: 'Mon–Sat 08:30–17:30', phone: '010-9876543', open: true  },
      { name: 'mypharmacy Rotterdam North',  address: 'Bergse Dorpsstraat 1', city: 'Rotterdam', hours: 'Mon–Fri 08:00–17:00', phone: '010-1122334', open: false },
      { name: 'mypharmacy Utrecht Central',  address: 'Catharijnesingel 1',   city: 'Utrecht',   hours: 'Mon–Fri 08:00–17:00', phone: '030-3456789', open: false },
      { name: 'mypharmacy The Hague',        address: 'Spuistraat 20',        city: 'The Hague', hours: 'Mon–Fri 08:30–18:00', phone: '070-7654321', open: true  },
    ]).pipe(delay(200));
  }

  /* ===== HEALTH PAGE ===== */
  getHealthCategories(): Observable<HealthCategory[]> {
    return of([
      { id: 1, icon: '😴', title: 'Sleep',          count: '48 articles', color: '#E8EAF6' },
      { id: 2, icon: '🥗', title: 'Nutrition',      count: '64 articles', color: '#E8F5EE' },
      { id: 3, icon: '🧠', title: 'Mental Health',  count: '37 articles', color: '#FFF3E0' },
      { id: 4, icon: '💪', title: 'Fitness',        count: '52 articles', color: '#FCE4EC' },
      { id: 5, icon: '❤️', title: 'Heart Health',   count: '29 articles', color: '#FFEBEE' },
      { id: 6, icon: '🦴', title: 'Bone Health',    count: '21 articles', color: '#F3E5F5' },
      { id: 7, icon: '🩺', title: 'Chronic Illness',count: '44 articles', color: '#E3F2FD' },
      { id: 8, icon: '🌿', title: 'Natural Remedies',count: '33 articles',color: '#E0F7FA' },
    ]).pipe(delay(150));
  }

  getHealthArticles(): Observable<HealthArticle[]> {
    return of([
      { id: 1, icon: '☀️', title: 'Why vitamin D is so important in winter',       summary: 'During the darker months we produce less vitamin D. Discover how to supplement it through diet and vitamins.',          category: 'Nutrition',      readTime: '3 min', author: 'Dr. Emma Clarke' },
      { id: 2, icon: '😴', title: 'Healthy sleep: tips for a better night\'s rest',summary: 'A good night\'s sleep is essential for your health. Read our practical tips for better, deeper sleep.',               category: 'Sleep',          readTime: '4 min', author: 'Pharmacist Jan Bakker' },
      { id: 3, icon: '❄️', title: 'Winter skincare: how to keep your skin healthy', summary: 'Cold weather strips moisture from your skin. Discover the best products and routines for winter.',                     category: 'Skincare',       readTime: '5 min', author: 'Dr. Sophie van Dijk' },
      { id: 4, icon: '🧠', title: 'Simple habits to improve your mental wellbeing', summary: 'Small daily changes can have a big impact on your mental health. Our pharmacists share their top evidence-based tips.', category: 'Mental Health',  readTime: '6 min', author: 'Dr. Mark Janssen' },
      { id: 5, icon: '❤️', title: 'Understanding your blood pressure numbers',      summary: 'Know your numbers. We explain what systolic and diastolic pressure mean and what a healthy range looks like.',         category: 'Heart Health',   readTime: '4 min', author: 'Dr. Lisa Smit' },
      { id: 6, icon: '🥗', title: 'Eating for energy: foods that really work',     summary: 'Feel tired all the time? Your diet could be the culprit. Discover the best energy-boosting foods backed by science.',  category: 'Nutrition',      readTime: '5 min', author: 'Nutritionist Anna Muller' },
    ]).pipe(delay(200));
  }

  /* ===== SKINCARE PAGE ===== */
  getSkincareCategories(): Observable<SkincareCategory[]> {
    return of([
      { id: 1, icon: '🧼', name: 'Cleansers',    tip: 'Cleanse twice daily',       color: '#E3F2FD' },
      { id: 2, icon: '💧', name: 'Moisturisers', tip: 'Apply while skin is damp',  color: '#E8F5EE' },
      { id: 3, icon: '✨', name: 'Serums',        tip: 'Use after cleansing',       color: '#F3E5F5' },
      { id: 4, icon: '☀️', name: 'Sun Protection',tip: 'SPF 30+ every day',        color: '#FFF8E1' },
      { id: 5, icon: '👁️', name: 'Eye Creams',    tip: 'Gentle tapping motion',    color: '#FCE4EC' },
      { id: 6, icon: '💆', name: 'Face Masks',    tip: '2–3 times per week',        color: '#FFF3E0' },
      { id: 7, icon: '🌿', name: 'Natural & Organic', tip: 'Free from harsh chemicals', color: '#E8F5EE' },
      { id: 8, icon: '💊', name: 'Supplements',  tip: 'Skin health from within',   color: '#E8EAF6' },
    ]).pipe(delay(150));
  }

  getSkincareBrands(): Observable<SkincareBrand[]> {
    return of([
      { name: 'Neutrogena',  logo: '🔵', tag: 'Dermatologist Recommended' },
      { name: 'Cetaphil',    logo: '🟢', tag: 'Sensitive Skin Specialist'  },
      { name: 'La Roche-Posay', logo: '🔴', tag: 'Pharmacy Exclusive'     },
      { name: 'Eucerin',     logo: '🟡', tag: 'Medical Skincare'           },
      { name: 'Vichy',       logo: '🟣', tag: 'Mineral Rich Formula'       },
      { name: 'Bioderma',    logo: '🟠', tag: 'Gentle & Effective'         },
    ]).pipe(delay(130));
  }

  getSkincareProducts(): Observable<Product[]> {
    return of([
      { id: 101, name: 'Hydro Boost Water Gel',     brand: 'Neutrogena',   price: 14.95, unit: '50ml',  rating: 4.7, reviews: 560, badge: 'New',       badgeType: 'green',  icon: '🧴' },
      { id: 102, name: 'Moisturizing Cream',         brand: 'Cetaphil',     price: 9.99,  unit: '250ml', rating: 4.9, reviews: 1100,badge: 'Bestseller', badgeType: 'green',  icon: '🧴' },
      { id: 103, name: 'Effaclar Purifying Gel',     brand: 'La Roche-Posay',price: 12.50,unit: '200ml', rating: 4.6, reviews: 430, icon: '🧼' },
      { id: 104, name: 'Micellar Water 3-in-1',      brand: 'Bioderma',     price: 11.99, unit: '500ml', rating: 4.8, reviews: 820, badge: 'Bestseller', badgeType: 'green',  icon: '💧' },
      { id: 105, name: 'SPF 50+ Sunscreen',          brand: 'Eucerin',      price: 16.49, originalPrice: 19.99, unit: '50ml', rating: 4.8, reviews: 390, badge: '18% off', badgeType: 'orange', icon: '☀️' },
      { id: 106, name: 'Mineral 89 Booster',         brand: 'Vichy',        price: 18.99, unit: '50ml',  rating: 4.7, reviews: 670, badge: 'Editor\'s pick', badgeType: 'green', icon: '✨' },
      { id: 107, name: 'Retinol Eye Cream',          brand: 'Neutrogena',   price: 13.49, unit: '15ml',  rating: 4.5, reviews: 280, icon: '👁️' },
      { id: 108, name: 'Aloe Soothing Face Mask',    brand: 'Nature\'s Best',price: 7.99, unit: '75ml',  rating: 4.6, reviews: 350, badge: 'New',        badgeType: 'green',  icon: '💆' },
    ]).pipe(delay(250));
  }

  /* ===== BABY & CHILD PAGE ===== */
  getBabyAgeGroups(): Observable<BabyAgeGroup[]> {
    return of([
      { id: 1, label: 'Newborn',    age: '0–3 months', icon: '🍼', color: '#FCE4EC' },
      { id: 2, label: 'Baby',       age: '3–6 months', icon: '🧸', color: '#E3F2FD' },
      { id: 3, label: 'Baby',       age: '6–12 months',icon: '🦆', color: '#E8F5EE' },
      { id: 4, label: 'Toddler',    age: '1–2 years',  icon: '🚶', color: '#FFF8E1' },
      { id: 5, label: 'Toddler',    age: '2–4 years',  icon: '🎨', color: '#F3E5F5' },
      { id: 6, label: 'Child',      age: '4+ years',   icon: '🏃', color: '#E0F7FA' },
    ]).pipe(delay(130));
  }

  getBabyCategories(): Observable<BabyCategory[]> {
    return of([
      { icon: '🍼', name: 'Feeding',        description: 'Bottles, formula, breast pumps and nursing accessories' },
      { icon: '🧷', name: 'Nappies & Wipes',description: 'Disposable and reusable nappies, sensitive wipes and nappy creams' },
      { icon: '🛁', name: 'Bath & Skincare',description: 'Gentle washes, lotions and sunscreen formulated for delicate skin' },
      { icon: '😴', name: 'Sleep',          description: 'Sleep aids, monitors, soothers and safe sleep accessories' },
      { icon: '💊', name: 'Baby Health',    description: 'Teething gels, vitamin drops, thermometers and first aid' },
      { icon: '🎭', name: 'Toys & Play',    description: 'Developmental toys, rattles and sensory play products' },
    ]).pipe(delay(150));
  }

  getBabyProducts(): Observable<Product[]> {
    return of([
      { id: 201, name: 'Baby Lotion Sensitive',   brand: 'SoftCare Baby',  price: 8.49,  unit: '300ml',       rating: 4.8, reviews: 430, badge: 'Bestseller', badgeType: 'green',  icon: '👶' },
      { id: 202, name: 'Vitamin D Drops Infant',  brand: 'HealthPlus',     price: 7.99,  unit: '25ml',         rating: 4.9, reviews: 620, badge: 'Recommended',badgeType: 'green',  icon: '☀️' },
      { id: 203, name: 'Nappy Rash Cream',         brand: 'Bepanthen',      price: 6.79,  unit: '30g',          rating: 4.8, reviews: 950, badge: 'Favourite',  badgeType: 'green',  icon: '🩹' },
      { id: 204, name: 'Baby Shampoo Gentle',      brand: 'SoftCare Baby',  price: 5.49,  unit: '200ml',        rating: 4.7, reviews: 340, icon: '🍼' },
      { id: 205, name: 'Baby Paracetamol Drops',   brand: 'NurseAid',       price: 4.99,  unit: '100ml',        rating: 4.6, reviews: 510, badge: 'New formula',badgeType: 'green',  icon: '💊' },
      { id: 206, name: 'Organic Baby Wipes',       brand: 'PureNature',     price: 3.49,  originalPrice: 4.99, unit: '64 pack', rating: 4.8, reviews: 780, badge: '30% off', badgeType: 'orange', icon: '🧻' },
      { id: 207, name: 'Teething Gel',             brand: 'DentoSoft',      price: 4.29,  unit: '10g',          rating: 4.5, reviews: 290, icon: '🦷' },
      { id: 208, name: 'Infant Probiotic Drops',   brand: 'GutHealth Baby', price: 12.99, unit: '8ml',          rating: 4.7, reviews: 195, badge: 'New',        badgeType: 'green',  icon: '🌿' },
    ]).pipe(delay(250));
  }

  /* ===== DEALS PAGE ===== */
  getDeals(): Observable<Deal[]> {
    return of([
      { id: 1, title: 'Vitamin D3 1000 IU',       brand: 'HealthPlus',     originalPrice: 12.50, salePrice: 8.99,  discount: 28, icon: '☀️', endsIn: '02:14:33', badge: 'Flash Deal' },
      { id: 2, title: 'Omega-3 Fish Oil 60 caps',  brand: 'PureHealth',     originalPrice: 14.99, salePrice: 11.49, discount: 23, icon: '🐟', endsIn: '05:42:10', badge: 'Flash Deal' },
      { id: 3, title: 'SPF 50+ Sunscreen 50ml',    brand: 'Eucerin',        originalPrice: 19.99, salePrice: 16.49, discount: 18, icon: '☀️', endsIn: '01:08:55', badge: 'Flash Deal' },
      { id: 4, title: 'Organic Baby Wipes 64pk',   brand: 'PureNature',     originalPrice: 4.99,  salePrice: 3.49,  discount: 30, icon: '🧻', endsIn: '03:27:08', badge: 'Flash Deal' },
      { id: 5, title: 'Multivitamin Daily 90 tabs', brand: 'VitaBoost',     originalPrice: 17.99, salePrice: 13.49, discount: 25, icon: '💊', endsIn: '06:00:00', badge: 'Flash Deal' },
      { id: 6, title: 'Collagen Supplements',       brand: 'BeautyHealth',  originalPrice: 24.99, salePrice: 18.99, discount: 24, icon: '✨', endsIn: '04:15:22', badge: 'Flash Deal' },
    ]).pipe(delay(180));
  }

  getDealBundles(): Observable<DealBundle[]> {
    return of([
      { icon: '🌿', title: 'Wellness Bundle',     items: ['Vitamin D3', 'Omega-3 Fish Oil', 'Magnesium 400mg'],        price: 22.99, originalPrice: 31.97 },
      { icon: '🧴', title: 'Skincare Starter Kit', items: ['Neutrogena Hydro Boost', 'Cetaphil Cleanser', 'SPF 50+'], price: 29.99, originalPrice: 41.44 },
      { icon: '👶', title: 'Baby Essentials Pack', items: ['Baby Lotion', 'Nappy Cream', 'Vitamin D Drops'],           price: 18.99, originalPrice: 23.27 },
    ]).pipe(delay(160));
  }
}
