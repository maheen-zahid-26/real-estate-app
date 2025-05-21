import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../models/property.model';

@Component({
  selector: 'app-agent-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent-dashboard.component.html',
})
export class AgentDashboardComponent implements OnInit {
  properties: Property[] = [];

  constructor(private router: Router, private propertyService: PropertyService) {}

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('agentLoggedIn');
    if (!loggedIn) this.router.navigate(['/agent/login']);
    else {
      this.propertyService.properties$.subscribe((props) => {
        this.properties = props;
      });
    }
  }

  navigateToAddProperty() {
    this.router.navigate(['/agent/addproperty']);
  }

  logout() {
    localStorage.removeItem('agentLoggedIn');
    this.router.navigate(['/agent/login']);
  }
}
