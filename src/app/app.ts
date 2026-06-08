import { Component, OnInit, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MockApiService, NavItem } from './mock-api.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private api = inject(MockApiService);
  cart = inject(CartService);

  navItems = signal<NavItem[]>([]);
  mobileMenuOpen = signal(false);
  searchQuery = signal('');
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 60); }

  ngOnInit() {
    this.api.getNavItems().subscribe(v => this.navItems.set(v));
  }

  toggleMobileMenu() { this.mobileMenuOpen.update(v => !v); }

  stars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.round(rating) ? '★' : '☆');
  }
}
