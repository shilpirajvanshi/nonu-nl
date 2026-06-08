import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockApiService, Banner, Category, Product, HealthTip, Pharmacy, Testimonial, PromoCard } from '../../mock-api.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  private api = inject(MockApiService);
  cart = inject(CartService);

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

  ngOnInit() {
    this.api.getBanner().subscribe(v => this.banner.set(v));
    this.api.getCategories().subscribe(v => this.categories.set(v));
    this.api.getFeaturedProducts().subscribe(v => { this.products.set(v); this.loading.set(false); });
    this.api.getHealthTips().subscribe(v => this.healthTips.set(v));
    this.api.getPharmacies().subscribe(v => this.pharmacies.set(v));
    this.api.getTestimonials().subscribe(v => this.testimonials.set(v));
    this.api.getPromoCards().subscribe(v => this.promoCards.set(v));

    setInterval(() => {
      const t = this.testimonials();
      if (t.length) this.currentTestimonial.set((this.currentTestimonial() + 1) % t.length);
    }, 4000);
  }

  filterByCategory(id: number) {
    this.activeCategory.set(this.activeCategory() === id ? null : id);
  }

  setTestimonial(i: number) { this.currentTestimonial.set(i); }

  stars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.round(rating) ? '★' : '☆');
  }

  newsletterEmail = signal('');
  newsletterSuccess = signal(false);
  submitNewsletter() {
    if (this.newsletterEmail()) { this.newsletterSuccess.set(true); this.newsletterEmail.set(''); }
  }
}
