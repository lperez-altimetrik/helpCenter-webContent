// src/app/components/dashboard/dashboard.component.ts
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
import { TableComponent } from '../shared/table/table.component';
import { CommonModule } from '@angular/common';
import {
  MatChipSelectionChange,
  MatChipsModule,
} from '@angular/material/chips';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { CenterTabBarComponent } from '../shared/center-tab-bar/center-tab-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ImageComponent } from '../shared/image/image.component';
import { LabelComponent } from '../shared/label/label.component';
import { LinkComponent } from '../shared/link/link.component';
import { RelatedArticlesComponent } from '../shared/related-articles/related-articles.component';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';
import { TitleComponent } from '../shared/title/title.component';
import { VideoPlayerComponent } from '../shared/video-player/video-player.component';
import { AccordionComponent } from '../shared/accordion/accordion.component';
import { ArticleFeedbackComponent } from '../shared/article-feedback/article-feedback.component';
import { ArticleIndexComponent } from '../shared/article-index/article-index.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { PillBarComponent } from '../shared/pill-bar/pill-bar.component';
import { DataService } from 'app/services/data.service';
import { TopicsContainerComponent } from '../shared/card/topics-container/topics-container.component';
import { NewsContainerComponent } from '../shared/card/news-container/news-container.component';
import { ProductsContainerComponent } from '../shared/card/products-container/products-container.component';

const componentMapping: { [key: string]: any } = {
  card_carousel: CarouselComponent,
};
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);
  private dataService = inject(DataService);

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;

  chipLabels = [
    { label: 'Carousel', value: CarouselComponent, selected: false },
    { label: 'Accordion', value: AccordionComponent, selected: false },
    {
      label: 'Article Feedback',
      value: ArticleFeedbackComponent,
      selected: false,
    },
    { label: 'Article Index', value: ArticleIndexComponent, selected: false },
    { label: 'Banner', value: BannerComponent, selected: false },
    { label: 'Breadcrumb', value: BreadcrumbComponent, selected: false },
    { label: 'Center Tab Bar', value: CenterTabBarComponent, selected: false },
    { label: 'Contact Us', value: ContactUsComponent, selected: false },
    { label: 'Footer', value: FooterComponent, selected: false },
    { label: 'Header', value: HeaderComponent, selected: false },
    { label: 'Image', value: ImageComponent, selected: false },
    { label: 'Label', value: LabelComponent, selected: false },
    { label: 'Link', value: LinkComponent, selected: false },
    { label: 'Modal', value: ModalComponent, selected: false },
    { label: 'Pill Bar', value: PillBarComponent, selected: false },
    {
      label: 'Related Articles',
      value: RelatedArticlesComponent,
      selected: false,
    },
    { label: 'Search Bar', value: SearchBarComponent, selected: false },
    { label: 'Sidebar', value: SidebarComponent, selected: false },
    { label: 'Subtitle', value: SubtitleComponent, selected: false },
    { label: 'Table', value: TableComponent, selected: false },
    { label: 'Title', value: TitleComponent, selected: false },
    { label: 'Video', value: VideoPlayerComponent, selected: false },
  ];

  itemType = ArticleIndexComponent;
  private componentRefs: ComponentRef<any>[] = [];

  sectionList: Object[] = [];

  async ngAfterViewInit() {
    if (this.dynamicContainer) {
      const sectionList = await this.fetchSectionList();
      this.renderSections(sectionList);
    }
  }

  private async fetchSectionList(): Promise<any[]> {
    return new Promise((resolve) => {
      this.dataService.getSectionList().subscribe((data: any) => {
        const sectionList = data?.template?.data?.attributes?.section_list || [];
        resolve(sectionList);
      });
    });
  }


  private renderSections(sectionList: any[]): void {
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
  
            console.log('');
            console.log('');
            console.log('section.title ',section.title);
            console.log('');
            console.log('');
  
            switch(section.title) {
              case 'News & Updates': {
                carouselRef.instance.itemType = NewsContainerComponent;
                const articles = data?.articles?.data || [];
                // Populate the carousel with cards having a dynamic component of TopicsContainerComponent
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
