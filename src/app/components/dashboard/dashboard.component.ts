// src/app/components/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ArticleSectionTileComponent } from '../shared/article-section-tile/article-section-tile.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ArticleSectionTileComponent, ContactUsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
