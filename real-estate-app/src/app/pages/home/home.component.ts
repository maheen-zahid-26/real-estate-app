import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PROPERTIES } from '../../data/properties'; 
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  properties: Property[] = PROPERTIES;

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/property', id]);
  }
}
