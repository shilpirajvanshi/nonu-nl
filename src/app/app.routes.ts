import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'pharmacy', loadComponent: () => import('./pages/pharmacy/pharmacy.component').then(m => m.PharmacyComponent) },
  { path: 'health', loadComponent: () => import('./pages/health/health.component').then(m => m.HealthComponent) },
  { path: 'skincare', loadComponent: () => import('./pages/skincare/skincare.component').then(m => m.SkincareComponent) },
  { path: 'baby', loadComponent: () => import('./pages/baby/baby.component').then(m => m.BabyComponent) },
  { path: 'deals', loadComponent: () => import('./pages/deals/deals.component').then(m => m.DealsComponent) },
  { path: '**', redirectTo: '' }
];
