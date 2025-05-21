import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private _properties = new BehaviorSubject<Property[]>(this.getProperties());
  public properties$ = this._properties.asObservable();

  constructor() {}

  getProperties(): Property[] {
    const data = localStorage.getItem('properties');
    return data ? JSON.parse(data) : [];
  }

  loadFromLocalStorage(): void {
    const props = this.getProperties();
    this._properties.next(props); 
  }

  addProperty(property: Property): void {
    const current = this.getProperties();
    const updated = [...current, property];
    localStorage.setItem('properties', JSON.stringify(updated));
    this._properties.next(updated);
  }

  deleteProperty(id: number): void {
    const updated = this.getProperties().filter(p => p.id !== id);
    localStorage.setItem('properties', JSON.stringify(updated));
    this._properties.next(updated);
  }

  getPropertyById(id: number): Property | undefined {
    return this.getProperties().find(p => p.id === id);
  }
}
