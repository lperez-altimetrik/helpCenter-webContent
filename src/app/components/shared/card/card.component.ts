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
  @Input() dynamicComponent?: Type<any> = NewsContainerComponent; // Accept the component type as input

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;

  ngAfterViewInit(): void {
    if (this.dynamicComponent) {
      this.dynamicContainer.clear(); // Clear any existing view
      this.dynamicContainer.createComponent(this.dynamicComponent); // Dynamically create the component
    }
  }
}
