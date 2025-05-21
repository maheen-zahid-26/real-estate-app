import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  properties: Property[] = [];

  constructor(private router: Router, private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.properties = this.propertyService.getProperties();
  }

  viewDetails(id: number) {
    this.router.navigate(['/property', id]);
  }
}
