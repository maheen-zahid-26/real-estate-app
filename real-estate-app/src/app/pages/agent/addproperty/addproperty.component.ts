import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../models/property.model';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addproperty.component.html',
})
export class AddPropertyComponent {
  title = '';
  location = '';
  price = '';
  area = '';
  rooms = 1;
  imageUrl = '';
  videoUrl = '';
  governorate = '';
  district = '';
  street = '';
  features = '';
  amenities = '';
  nearby = '';
  gallery = '';

  constructor(private propertyService: PropertyService, private router: Router) {}

  addProperty() {
    if (this.title && this.location && this.price) {
      const newProperty: Property = {
        id: Date.now(),
        title: this.title,
        location: this.location,
        price: this.price,
        area: this.area,
        rooms: this.rooms,
        imageUrl: this.imageUrl,
        videoUrl: this.videoUrl,
        description: '',
        address: {
          governorate: this.governorate,
          district: this.district,
          street: this.street,
        },
        features: this.features.split(',').map(f => f.trim()),
        amenities: this.amenities.split(',').map(a => a.trim()),
        nearby: this.nearby.split(',').map(n => n.trim()),
        gallery: this.gallery.split(',').map(g => g.trim()),
      };

      this.propertyService.addProperty(newProperty);
      this.router.navigate(['/agent/dashboard']); 
    }
  }
}
