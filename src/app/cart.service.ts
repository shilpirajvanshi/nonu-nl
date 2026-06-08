import { Injectable, signal, computed } from '@angular/core';
import { Product } from './mock-api.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<Product[]>([]);
  count = computed(() => this.items().length);
  open = signal(false);
  wishlistIds = signal<number[]>([]);

  add(p: Product) { this.items.update(list => [...list, p]); }
  remove(i: number) { this.items.update(list => list.filter((_, idx) => idx !== i)); }
  total() { return this.items().reduce((s, p) => s + p.price, 0); }
  toggle() { this.open.update(v => !v); }

  toggleWishlist(id: number) {
    this.wishlistIds.update(list =>
      list.includes(id) ? list.filter(x => x !== id) : [...list, id]
    );
  }
  isWishlisted(id: number) { return this.wishlistIds().includes(id); }
}
