// src/app/components/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TopicCardComponent } from './features/topic-card/topic-card.component';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NgFor } from '@angular/common';
/*
  Remove next lines, only mock data for rendering and testing purposes, no Backend data yet
*/
import data from '../../../MockData/LandingPageMockData.json';
import { ProductCardComponent } from './features/product-card/product-card.component';
import { NewsCardComponent } from './features/news-card/news-card.component';
import { HeroComponent } from './features/hero/hero.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [TopicCardComponent, TopBarComponent, HeroComponent, FooterComponent, ProductCardComponent, NewsCardComponent ,NgFor]
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  newsAndUpdates: any[] = data.newsAndUpdatesMock;
  products: any[] = data.productsMock;
  topics: any[] = data.topicsMock;

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
