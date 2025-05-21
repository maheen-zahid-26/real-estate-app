import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agent-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agent-login.component.html'
})
export class AgentLoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'agent@example.com' && this.password === 'password') {
      localStorage.setItem('agentLoggedIn', 'true');
      this.router.navigate(['/agent/dashboard']);
    } else {
      this.error = 'Invalid credentials!';
    }
  }
}
