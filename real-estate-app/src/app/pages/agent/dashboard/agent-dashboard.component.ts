import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agent-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agent-dashboard.component.html',
})
export class AgentDashboardComponent implements OnInit {
  properties: { title: string; location: string; price: string }[] = [];
  title: string = '';
  location: string = '';
  price: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('agentLoggedIn');
    if (!loggedIn) this.router.navigate(['/agent/login']);
  }

  addProperty() {
    if (this.title && this.location && this.price) {
      this.properties.push({
        title: this.title,
        location: this.location,
        price: this.price,
      });
      this.title = '';
      this.location = '';
      this.price = '';
    }
  }

  logout() {
    localStorage.removeItem('agentLoggedIn');
    this.router.navigate(['/agent/login']);
  }
}
