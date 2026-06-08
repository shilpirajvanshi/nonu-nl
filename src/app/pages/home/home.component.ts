import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockApiService, Banner, Category, Product, HealthTip, Pharmacy, Testimonial, PromoCard, TopBannerSlide } from '../../mock-api.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private api = inject(MockApiService);
  cart = inject(CartService);

  bannerSlides = signal<TopBannerSlide[]>([]);
  currentSlide = signal(0);
  slideAnimating = signal(false);

  banner = signal<Banner | null>(null);
  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);
  healthTips = signal<HealthTip[]>([]);
  pharmacies = signal<Pharmacy[]>([]);
  testimonials = signal<Testimonial[]>([]);
  promoCards = signal<PromoCard[]>([]);
  loading = signal(true);
  activeCategory = signal<number | null>(null);
  currentTestimonial = signal(0);

  newsletterEmail = signal('');
  newsletterSuccess = signal(false);

  private slideTimer: ReturnType<typeof setInterval> | null = null;
  private testimonialTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.api.getTopBannerSlides().subscribe(v => {
      this.bannerSlides.set(v);
      this.startSlideTimer();
    });
    this.api.getBanner().subscribe(v => this.banner.set(v));
    this.api.getCategories().subscribe(v => this.categories.set(v));
    this.api.getFeaturedProducts().subscribe(v => { this.products.set(v); this.loading.set(false); });
    this.api.getHealthTips().subscribe(v => this.healthTips.set(v));
    this.api.getPharmacies().subscribe(v => this.pharmacies.set(v));
    this.api.getTestimonials().subscribe(v => this.testimonials.set(v));
    this.api.getPromoCards().subscribe(v => this.promoCards.set(v));

    this.testimonialTimer = setInterval(() => {
      const t = this.testimonials();
      if (t.length) this.currentTestimonial.set((this.currentTestimonial() + 1) % t.length);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
    if (this.testimonialTimer) clearInterval(this.testimonialTimer);
  }

  startSlideTimer() {
    this.slideTimer = setInterval(() => this.nextSlide(), 5000);
  }

  resetSlideTimer() {
    if (this.slideTimer) clearInterval(this.slideTimer);
    this.startSlideTimer();
  }

  goToSlide(i: number) {
    if (i === this.currentSlide() || this.slideAnimating()) return;
    this.slideAnimating.set(true);
    this.currentSlide.set(i);
    setTimeout(() => this.slideAnimating.set(false), 500);
    this.resetSlideTimer();
  }

  nextSlide() {
    const slides = this.bannerSlides();
    if (!slides.length) return;
    this.goToSlide((this.currentSlide() + 1) % slides.length);
  }

  prevSlide() {
    const slides = this.bannerSlides();
    if (!slides.length) return;
    this.goToSlide((this.currentSlide() - 1 + slides.length) % slides.length);
  }

  filterByCategory(id: number) {
    this.activeCategory.set(this.activeCategory() === id ? null : id);
  }

  setTestimonial(i: number) { this.currentTestimonial.set(i); }

  stars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.round(rating) ? '★' : '☆');
  }

  submitNewsletter() {
    if (this.newsletterEmail()) { this.newsletterSuccess.set(true); this.newsletterEmail.set(''); }
  }
}
