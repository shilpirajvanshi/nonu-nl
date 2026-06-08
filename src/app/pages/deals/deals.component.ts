import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockApiService, Deal, DealBundle } from '../../mock-api.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.html',
  styleUrl: './deals.scss'
})
export class DealsComponent implements OnInit, OnDestroy {
  private api = inject(MockApiService);
  cart = inject(CartService);
  deals = signal<Deal[]>([]);
  bundles = signal<DealBundle[]>([]);
  email = signal('');
  subscribed = signal(false);
  timers: { [id: number]: { h: string; m: string; s: string } } = {};
  private interval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.api.getDeals().subscribe(v => { this.deals.set(v); this.initTimers(v); });
    this.api.getDealBundles().subscribe(v => this.bundles.set(v));
    this.interval = setInterval(() => this.tickTimers(), 1000);
  }

  ngOnDestroy() { if (this.interval) clearInterval(this.interval); }

  initTimers(deals: Deal[]) {
    deals.forEach(d => {
      const [h, m, s] = d.endsIn.split(':').map(Number);
      this.timers[d.id] = { h: this.pad(h), m: this.pad(m), s: this.pad(s) };
    });
  }

  tickTimers() {
    this.deals().forEach(d => {
      const t = this.timers[d.id];
      if (!t) return;
      let s = +t.s - 1, m = +t.m, h = +t.h;
      if (s < 0) { s = 59; m--; }
      if (m < 0) { m = 59; h--; }
      if (h < 0) { h = 0; m = 0; s = 0; }
      this.timers[d.id] = { h: this.pad(h), m: this.pad(m), s: this.pad(s) };
    });
    this.deals.update(v => [...v]);
  }

  pad(n: number) { return n.toString().padStart(2, '0'); }
  subscribe() { if (this.email()) this.subscribed.set(true); }
  saving(d: Deal) { return (d.originalPrice - d.salePrice).toFixed(2); }
}
