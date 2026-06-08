import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockApiService, Product, Category } from '../../mock-api.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent implements OnInit {
  private api = inject(MockApiService);
  cart = inject(CartService);

  allProducts = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  loading = signal(true);

  selectedCategory = signal<number | null>(null);
  searchQuery = signal('');
  sortBy = signal<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');
  priceMax = signal(50);

  addedToCartId = signal<number | null>(null);

  filteredProducts = computed(() => {
    let list = this.allProducts();
    const cat = this.selectedCategory();
    const q = this.searchQuery().toLowerCase();
    const max = this.priceMax();

    if (cat !== null) {
      const catName = this.categories().find(c => c.id === cat)?.name.toLowerCase() ?? '';
      list = list.filter(p =>
        p.name.toLowerCase().includes(catName) ||
        p.brand.toLowerCase().includes(catName) ||
        p.icon === this.categories().find(c => c.id === cat)?.icon
      );
    }
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    list = list.filter(p => p.price <= max);

    const sort = this.sortBy();
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  });

  ngOnInit() {
    this.api.getCategories().subscribe(v => this.categories.set(v));
    this.api.getFeaturedProducts().subscribe(v => {
      // Expand to 16 products by duplicating with variation
      const base = v;
      const extra: Product[] = [
        { id: 9,  name: 'Zinc 25mg',              brand: 'HealthPlus',           price: 5.99,  unit: '60 tablets',  rating: 4.5, reviews: 210,  icon: '⚡', badge: 'New', badgeType: 'green' },
        { id: 10, name: 'Allergy Relief Spray',   brand: 'ClearBreath',          price: 9.49,  unit: '15ml',         rating: 4.6, reviews: 380,  icon: '💨' },
        { id: 11, name: 'Aloe Vera Gel',          brand: 'Nature\'s Best',       price: 6.99,  unit: '200ml',        rating: 4.7, reviews: 520,  icon: '🌿', badge: 'Bestseller', badgeType: 'green' },
        { id: 12, name: 'Multivitamin Daily',     brand: 'VitaBoost',            price: 13.49, unit: '90 tablets',   rating: 4.8, reviews: 670,  icon: '💊', originalPrice: 17.99, badge: '25% off', badgeType: 'orange' },
        { id: 13, name: 'Hand Sanitiser 500ml',   brand: 'CleanCare',            price: 3.99,  unit: '500ml',        rating: 4.4, reviews: 890,  icon: '🧼' },
        { id: 14, name: 'Cooling Eye Drops',      brand: 'EyeFresh',             price: 7.29,  unit: '10ml',         rating: 4.6, reviews: 305,  icon: '👁️' },
        { id: 15, name: 'Collagen Supplements',   brand: 'BeautyHealth',         price: 19.99, unit: '60 capsules',  rating: 4.9, reviews: 740,  icon: '✨', badge: 'Popular', badgeType: 'green' },
        { id: 16, name: 'Baby Lotion Sensitive',  brand: 'SoftCare Baby',        price: 8.49,  unit: '300ml',        rating: 4.8, reviews: 430,  icon: '👶' },
      ];
      this.allProducts.set([...base, ...extra]);
      this.loading.set(false);
    });
  }

  selectCategory(id: number | null) {
    this.selectedCategory.set(this.selectedCategory() === id ? null : id);
  }

  addToCartWithFeedback(product: Product) {
    this.cart.add(product);
    this.addedToCartId.set(product.id);
    setTimeout(() => this.addedToCartId.set(null), 1500);
  }

  stars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.round(rating) ? '★' : '☆');
  }

  clearFilters() {
    this.selectedCategory.set(null);
    this.searchQuery.set('');
    this.sortBy.set('default');
    this.priceMax.set(50);
  }
}
