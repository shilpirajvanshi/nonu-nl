import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockApiService, HealthCategory, HealthArticle } from '../../mock-api.service';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './health.html',
  styleUrl: './health.scss'
})
export class HealthComponent implements OnInit {
  private api = inject(MockApiService);
  categories = signal<HealthCategory[]>([]);
  articles = signal<HealthArticle[]>([]);
  activeCategory = signal<number | null>(null);

  ngOnInit() {
    this.api.getHealthCategories().subscribe(v => this.categories.set(v));
    this.api.getHealthArticles().subscribe(v => this.articles.set(v));
  }

  filtered() {
    const id = this.activeCategory();
    if (!id) return this.articles();
    const name = this.categories().find(c => c.id === id)?.title ?? '';
    return this.articles().filter(a => a.category === name);
  }

  setCategory(id: number) {
    this.activeCategory.set(this.activeCategory() === id ? null : id);
  }
}
