// src/app/components/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ArticleSectionTileComponent } from '../shared/article-section-tile/article-section-tile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ArticleSectionTileComponent],
  template: `
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <app-article-section-tile></app-article-section-tile>
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
