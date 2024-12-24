// src/app/components/dashboard/dashboard.component.ts
import {
  AfterViewInit,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { ArticleIndexComponent } from '../shared/article-index/article-index.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ContactUsComponent, CarouselComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;

  itemType = ArticleIndexComponent;

  template = [
    {
      type: BannerComponent,
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'A very long description',
      url: 'https://paysafe.com',
    },
    {
      type: CarouselComponent,
      itemType: ArticleIndexComponent,
    },
  ];

  ngAfterViewInit(): void {
    this.renderTemplate();
  }

  private renderTemplate(): void {
    this.template.forEach((item: any) => {
      const componentRef: ComponentRef<any> =
        this.dynamicContainer.createComponent(item.type);

      // Pass input properties dynamically
      Object.keys(item).forEach((key) => {
        if (key !== 'type') {
          componentRef.instance[key] = item[key];
        }
      });
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
