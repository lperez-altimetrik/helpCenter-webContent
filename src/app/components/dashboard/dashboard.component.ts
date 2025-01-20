import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import {
  MatChipSelectionChange,
  MatChipsModule,
} from '@angular/material/chips';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { DataService } from 'app/services/data.service';
import { TopicsContainerComponent } from '../shared/card/topics-container/topics-container.component';
import { NewsContainerComponent } from '../shared/card/news-container/news-container.component';
import { ProductsContainerComponent } from '../shared/card/products-container/products-container.component';

import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { RelatedArticlesComponent } from "../shared/related-articles/related-articles.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatChipsModule, HeaderComponent, FooterComponent, ContactUsComponent, RelatedArticlesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);
  private dataService = inject(DataService);

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;
  @ViewChild('listContainer', { read: ViewContainerRef })
  listContainer!: ViewContainerRef;
  private componentRefs: ComponentRef<any>[] = [];
  private componentListRefs: ComponentRef<any>[] = [];

  async ngAfterViewInit() {
    if (this.dynamicContainer) {
      this.renderSections();
    }
  }

  private renderSections(): void {
    this.componentRefs.forEach((ref) => ref.destroy()); // Destroy existing components
    this.componentRefs = [];
    this.dataService.getSectionList().subscribe((data: any) => {
      const sectionList = data?.template?.data?.attributes?.section_list || [];
      sectionList.forEach((section: any) => {

        if (section.display_component === 'card_carousel') {
          // Fetch topics from the service
          // Create CarouselComponent
          const carouselRef = this.dynamicContainer.createComponent(CarouselComponent);
          this.componentRefs.push(carouselRef);

          // Set carousel title
          carouselRef.instance.title = section.title;
          carouselRef.instance.iconName = section.icon.data.attributes.name.split('.')[0];

          switch (section.title) {
            case 'News & Updates': {
              carouselRef.instance.itemType = NewsContainerComponent;
              const categories = data?.categories?.data || [];
              // Populate the carousel with cards having a dynamic component of TopicsContainerComponent
              const category = categories.find((item: any) => item.attributes.slug == "news-updates");
              const articles = category.attributes.articles.data;
              carouselRef.instance.items = articles.map((topic: any) => ({
                title: topic.attributes.title,
                body: topic.attributes.short_description,
              }));
              break;
            }
            case 'Topics': {
              carouselRef.instance.itemType = TopicsContainerComponent;
              const topics = data?.topics?.data || [];
              // Populate the carousel with cards having a dynamic component of TopicsContainerComponent
              console.log(topics)
              carouselRef.instance.items = topics.map((topic: any) => ({
                title: topic.attributes.title,
                body: topic.attributes.short_description,
              }));

              break;
            }
            case 'Products': {
              carouselRef.instance.itemType = ProductsContainerComponent;
              const topics = data?.topics?.data || [];
              // Populate the carousel with cards having a dynamic component of TopicsContainerComponent
              carouselRef.instance.items = topics.map((topic: any) => ({
                title: topic.attributes.title,
                body: topic.attributes.short_description,
              }));

              break;
            }
          }
          // Trigger change detection
          carouselRef.changeDetectorRef.detectChanges();
        }
        if (section.display_component === 'list') {
            // Fetch topics from the service
          // Create CarouselComponent
          const listRef = this.listContainer.createComponent(RelatedArticlesComponent);
          this.componentListRefs.push(listRef);
          listRef.instance.title = section.title;

          // Trigger change detection
          listRef.changeDetectorRef.detectChanges();
        }
      });
    });

  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.componentRefs.forEach((ref) => ref.destroy());
  }

  onChipSelect(event: MatChipSelectionChange, chip: any): void {
    chip.selected = event.selected;
  }
}
