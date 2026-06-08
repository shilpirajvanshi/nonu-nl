import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockApiService, SkincareCategory, SkincareBrand, Product } from '../../mock-api.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-skincare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skincare.html',
  styleUrl: './skincare.scss'
})
export class SkincareComponent implements OnInit {
  private api = inject(MockApiService);
  cart = inject(CartService);
  categories = signal<SkincareCategory[]>([]);
  brands = signal<SkincareBrand[]>([]);
  products = signal<Product[]>([]);
  addedId = signal<number | null>(null);

  ngOnInit() {
    this.api.getSkincareCategories().subscribe(v => this.categories.set(v));
    this.api.getSkincareBrands().subscribe(v => this.brands.set(v));
    this.api.getSkincareProducts().subscribe(v => this.products.set(v));
  }

  addToCart(p: Product) {
    this.cart.add(p);
    this.addedId.set(p.id);
    setTimeout(() => this.addedId.set(null), 1500);
  }

  stars(r: number) { return Array(5).fill('').map((_, i) => i < Math.round(r) ? '★' : '☆').join(''); }
}
