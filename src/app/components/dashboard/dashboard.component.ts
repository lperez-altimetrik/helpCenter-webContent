// src/app/components/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button (click)="logout()">Logout</button>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
        padding: 20px;
      }
      button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
      }
    `,
  ],
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}