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
import { CardComponent } from '../shared/card/card.component';
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
    { label: 'Card', value: CardComponent, selected: false },
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

  template: Object[] = [];

  ngAfterViewInit(): void {
    if (this.dynamicContainer) {
      this.renderTemplate();
    }
  }

  private renderTemplate(): void {
    this.componentRefs.forEach((ref) => ref.destroy());
    this.template.forEach((item: any) => {
      const componentRef: ComponentRef<any> =
        this.dynamicContainer.createComponent(item.type);
      this.componentRefs.push(componentRef);

      // Pass input properties dynamically
      Object.keys(item).forEach((key) => {
        if (key !== 'type' && key in componentRef.instance) {
          componentRef.instance[key] = item[key];
        }
      });
    });
  }

  private renderSelectedComponents(): void {
    this.componentRefs.forEach((ref) => ref.destroy());
    this.componentRefs = [];

    const selectedComponents = this.chipLabels.filter((chip) => chip.selected);

    selectedComponents.forEach((chip: any) => {
      const componentRef = this.dynamicContainer.createComponent(chip.value);
      this.componentRefs.push(componentRef);
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
    this.renderSelectedComponents();
  }
}
