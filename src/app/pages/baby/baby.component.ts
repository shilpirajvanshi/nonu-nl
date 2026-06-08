import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockApiService, BabyAgeGroup, BabyCategory, Product } from '../../mock-api.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-baby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baby.html',
  styleUrl: './baby.scss'
})
export class BabyComponent implements OnInit {
  private api = inject(MockApiService);
  cart = inject(CartService);
  ageGroups = signal<BabyAgeGroup[]>([]);
  babyCategories = signal<BabyCategory[]>([]);
  products = signal<Product[]>([]);
  selectedAge = signal<number>(1);
  addedId = signal<number | null>(null);

  ngOnInit() {
    this.api.getBabyAgeGroups().subscribe(v => this.ageGroups.set(v));
    this.api.getBabyCategories().subscribe(v => this.babyCategories.set(v));
    this.api.getBabyProducts().subscribe(v => this.products.set(v));
  }

  addToCart(p: Product) {
    this.cart.add(p);
    this.addedId.set(p.id);
    setTimeout(() => this.addedId.set(null), 1500);
  }

  stars(r: number) { return Array(5).fill('').map((_, i) => i < Math.round(r) ? '★' : '☆').join(''); }
}
