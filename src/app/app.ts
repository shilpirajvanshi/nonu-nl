import { Component, OnInit, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MockApiService,
  NavItem, Banner, Category, Product,
  HealthTip, Pharmacy, Testimonial, PromoCard
} from './mock-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private api = inject(MockApiService);

  navItems = signal<NavItem[]>([]);
  banner = signal<Banner | null>(null);
  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);
  healthTips = signal<HealthTip[]>([]);
  pharmacies = signal<Pharmacy[]>([]);
  testimonials = signal<Testimonial[]>([]);
  promoCards = signal<PromoCard[]>([]);

  mobileMenuOpen = signal(false);
  searchQuery = signal('');
  newsletterEmail = signal('');
  newsletterSuccess = signal(false);
  isScrolled = signal(false);
  activeCategory = signal<number | null>(null);
  cartCount = signal(0);
  cartItems = signal<Product[]>([]);
  cartOpen = signal(false);
  wishlist = signal<number[]>([]);
  loading = signal(true);
  currentTestimonial = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  ngOnInit() {
    this.api.getNavItems().subscribe(v => this.navItems.set(v));
    this.api.getBanner().subscribe(v => { this.banner.set(v); });
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

  toggleMobileMenu() { this.mobileMenuOpen.update(v => !v); }
  toggleCart() { this.cartOpen.update(v => !v); }

  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product]);
    this.cartCount.update(c => c + 1);
  }

  removeFromCart(index: number) {
    this.cartItems.update(items => items.filter((_, i) => i !== index));
    this.cartCount.update(c => c - 1);
  }

  toggleWishlist(id: number) {
    this.wishlist.update(list =>
      list.includes(id) ? list.filter(x => x !== id) : [...list, id]
    );
  }

  isWishlisted(id: number): boolean { return this.wishlist().includes(id); }

  filterByCategory(id: number) {
    this.activeCategory.set(this.activeCategory() === id ? null : id);
  }

  submitNewsletter() {
    if (this.newsletterEmail()) {
      this.newsletterSuccess.set(true);
      this.newsletterEmail.set('');
    }
  }

  cartTotal(): number {
    return this.cartItems().reduce((s, p) => s + p.price, 0);
  }

  stars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.round(rating) ? '★' : '☆');
  }

  setTestimonial(i: number) { this.currentTestimonial.set(i); }

  trackById(_: number, item: { id: number }) { return item.id; }
}
