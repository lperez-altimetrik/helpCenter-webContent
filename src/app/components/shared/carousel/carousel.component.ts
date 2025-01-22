import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NewsContainerComponent } from '../card/news-container/news-container.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
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

  @Input() itemType: any = NewsContainerComponent;
  @Input() title: string = 'Carousel Title';
  @Input() iconName: string = 'note_stack';
@ViewChild('dynHost', { static: true, read: ViewContainerRef }) dynHost!: ViewContainerRef;

  public componentRefs: ComponentRef<any>[] = [];

  visibleItems: any[] = [];
  scrollPosition: number = 0;
  scrollDirection: number = 0;
  scrollInterval!: any;
  scrollSpeed: number = 20;
  isCollapsed: boolean = true;
  isMobile: boolean = false;

  canScrollLeft: boolean = false;
  canScrollRight: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    this.loadComponent();
    this.updateScrollLimits();
  }

  ngOnInit(): void {
    // Observe screen size
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.updateVisibleItems();
      });
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
      this.updateScrollLimits();
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

  updateScrollLimits(): void {
    const trackWidth =
      this.carouselTrack?.nativeElement?.scrollWidth -
      this.carouselTrack?.nativeElement?.offsetWidth;

    this.canScrollLeft = this.scrollPosition > 0;
    this.canScrollRight = this.scrollPosition < trackWidth;
  }

  private loadComponent(): void {
    // Clear existing components if needed
    if (this.dynHost) {
      this.dynHost.clear();
    } else {
      console.error('dynHost is not defined. Make sure the ViewChild is properly bound.');
      return;
    }

    for (let item of this.items) {
      try {
        const factory: ComponentFactory<any> =
          this.componentFactoryResolver.resolveComponentFactory(this.itemType);

        const itemRef: ComponentRef<any> = this.dynHost.createComponent(factory);

        if (itemRef && itemRef.instance) {
          // Set properties for the dynamically created component
          
          // Add the component reference to the array for cleanup
          
          itemRef.instance.location?.nativeElement?.setAttribute(
            'style',
            'width: 100%',
          );
           itemRef.instance.location?.nativeElement?.setAttribute(
            'style',
            'display: block',
          );
          itemRef.instance.title = item.title;
          this.componentRefs.push(itemRef);

          // Trigger change detection
          itemRef.changeDetectorRef.detectChanges();
        } else {
          console.warn('Component reference or instance is undefined.');
        }
      } catch (error) {
        console.error('Error creating component:', error);
      }
    }
  }

}
