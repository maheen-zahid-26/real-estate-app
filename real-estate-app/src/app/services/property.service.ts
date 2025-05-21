import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private propertiesSource = new BehaviorSubject<Property[]>([]);
  properties$ = this.propertiesSource.asObservable();

  constructor() {
    // Initialize with some default properties if you want (optional)
    // this.propertiesSource.next(PROPERTIES);
  }

  getProperties(): Property[] {
    return this.propertiesSource.value;
  }

  addProperty(property: Property) {
    this.propertiesSource.next([...this.propertiesSource.value, property]);
  }
}
