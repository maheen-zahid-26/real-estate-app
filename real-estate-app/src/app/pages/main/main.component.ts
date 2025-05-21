import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html'
})
export class MainComponent {
  constructor(private router: Router) {}

  goToAgentLogin() {
    this.router.navigate(['/agent/login']);
  }

  goToVisitorHome() {
    this.router.navigate(['/home']);
  }
}
