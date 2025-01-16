import { CommonModule } from '@angular/common';
import { Component, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TopicsContainerComponent } from './topics-container/topics-container.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { NewsContainerComponent } from './news-container/news-container.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() image = 'assets/images/card-image.png';
  @Input() title = 'new optic app';
  @Input() span = '15 min read';
  @Input() text =
    'We give ambitious businesses their launchpad through safe and secure online payment solutions';
  @Input() link = 'Learn more';
  @Input() linkUrl = 'https://www.paysafe.com/us-en/';
  @Input() linkIcon = 'north_east';

  @Input() dynamicComponent?: Type<any> = TopicsContainerComponent; // Accept the component type as input

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;

  ngAfterViewInit(): void {
    if (this.dynamicComponent) {
      this.dynamicContainer.clear(); // Clear any existing view
      this.dynamicContainer.createComponent(this.dynamicComponent); // Dynamically create the component
    }
  }
}
