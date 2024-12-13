import { CommonModule } from '@angular/common';
import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ArticleIndexComponent } from '../article-index/article-index.component';
import { ArticleFeedbackComponent } from '../article-feedback/article-feedback.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  @Input() items: any[] = [
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
  // @Input() itemTemplate: any = '<app-card>'; // Input for the template to render each item

  @Input() itemType: any = CardComponent;
  @ViewChild('dynamic', { static: true, read: ViewContainerRef }) dynHost: any;
  public componentRef: ComponentRef<any> | undefined;

  visibleItems: any[] = [];
  scrollPosition: number = 0;
  scrollDirection: number = 0;
  scrollInterval!: any;
  scrollSpeed: number = 20;
  isCollapsed: boolean = true;
  isMobile: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    // Observe screen size
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.updateVisibleItems();
      });

    this.loadComponent();
  }

  yyystartScroll(direction: number): void {
    this.scrollDirection = direction;
    this.scrollInterval = setInterval(() => {
      const trackElement = this.carouselTrack.nativeElement;
      const maxScrollLeft = trackElement.scrollWidth - trackElement.offsetWidth;

      trackElement.scrollLeft += this.scrollSpeed * this.scrollDirection;

      if (
        (this.scrollDirection === -1 && trackElement.scrollLeft <= 0) ||
        (this.scrollDirection === 1 && trackElement.scrollLeft >= maxScrollLeft)
      ) {
        this.stopScroll();
      }
    }, 10); // Adjust scroll interval for smoothness
  }

  startScroll(direction: number): void {
    this.scrollDirection = direction;

    this.scrollInterval = setInterval(() => {
      const trackWidth =
        this.carouselTrack.nativeElement.scrollWidth -
        this.carouselTrack.nativeElement.offsetWidth;

      if (
        (this.scrollDirection === -1 && this.scrollPosition <= 0) ||
        (this.scrollDirection === 1 && this.scrollPosition >= trackWidth)
      ) {
        this.stopScroll();
        return;
      }

      this.scrollPosition += this.scrollSpeed * this.scrollDirection;
    }, 1);
  }

  stopScroll(): void {
    clearInterval(this.scrollInterval);
    this.scrollDirection = 0;
  }

  updateVisibleItems(): void {
    this.visibleItems =
      this.isMobile && this.isCollapsed ? this.items.slice(0, 3) : this.items;
  }

  toggleView(): void {
    if (this.isMobile) {
      this.isCollapsed = !this.isCollapsed;
      this.updateVisibleItems();
    }
  }

  /**
   * Load dynamicly row component.
   */
  private loadComponent(): void {
    this.dynHost.clear();
    const factory: ComponentFactory<any> =
      this.componentFactoryResolver.resolveComponentFactory(this.itemType);

    this.componentRef = this.dynHost.createComponent(factory);
    this.componentRef!.location.nativeElement.setAttribute(
      'style',
      'width: 100%'
    );
  }
}
