import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockApiService, Pharmacy, PharmacyService } from '../../mock-api.service';

@Component({
  selector: 'app-pharmacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pharmacy.html',
  styleUrl: './pharmacy.scss'
})
export class PharmacyComponent implements OnInit {
  private api = inject(MockApiService);
  services = signal<PharmacyService[]>([]);
  pharmacies = signal<Pharmacy[]>([]);
  searchCity = signal('');

  ngOnInit() {
    this.api.getPharmacyServices().subscribe(v => this.services.set(v));
    this.api.getAllPharmacies().subscribe(v => this.pharmacies.set(v));
  }

  filtered() {
    const q = this.searchCity().toLowerCase();
    return q ? this.pharmacies().filter(p => p.city.toLowerCase().includes(q) || p.name.toLowerCase().includes(q)) : this.pharmacies();
  }
}
