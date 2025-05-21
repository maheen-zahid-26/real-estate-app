import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent) },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'property/:id', loadComponent: () => import('./pages/property-details/property-details.component').then(m => m.PropertyDetailsComponent) },
  { path: 'agent/login', loadComponent: () => import('./pages/agent/login/agent-login.component').then(m => m.AgentLoginComponent) },
  { path: 'agent/dashboard', loadComponent: () => import('./pages/agent/dashboard/agent-dashboard.component').then(m => m.AgentDashboardComponent) },
  { path: 'agent/addproperty', loadComponent: () => import('./pages/agent/addproperty/addproperty.component').then(m => m.AddPropertyComponent) },
];
