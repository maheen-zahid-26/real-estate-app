import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../models/property.model';

@Component({
  selector: 'app-agent-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent-dashboard.component.html',
})
export class AgentDashboardComponent implements OnInit, OnDestroy {
  properties: Property[] = [];
  private subscription!: Subscription;

  constructor(
    private router: Router,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('agentLoggedIn');
    if (!loggedIn) {
      this.router.navigate(['/agent/login']);
    } else {
      // Load from service
      this.subscription = this.propertyService.properties$.subscribe((props) => {
        this.properties = props;
      });

      // Trigger initial load from localStorage if not yet set
      if (this.propertyService.getProperties().length === 0) {
        this.propertyService.loadFromLocalStorage(); // Make sure this exists in your service
      }
    }
  }

  navigateToAddProperty(): void {
    this.router.navigate(['/agent/addproperty']);
  }

  logout(): void {
    localStorage.removeItem('agentLoggedIn');
    this.router.navigate(['/agent/login']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
