// src/app/components/dashboard/dashboard.component.ts
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  @ViewChild('bannerContainer', { read: ViewContainerRef })
  bannerContainer!: ViewContainerRef;

  items: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 6, name: 'Item 6' },
    { id: 6, name: 'Item 6' },
    { id: 6, name: 'Item 6' },
    { id: 6, name: 'Item 6' },
  ];

  bannerInput = {
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'A very long description',
    url: 'https://paysafe.com',
  };

  ngAfterViewInit(): void {
    const bannerRef = this.bannerContainer.createComponent(BannerComponent);
    bannerRef.instance.title = this.bannerInput.title;
    bannerRef.instance.subtitle = this.bannerInput.subtitle;
    bannerRef.instance.description = this.bannerInput.description;
    bannerRef.instance.url = this.bannerInput.url;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
