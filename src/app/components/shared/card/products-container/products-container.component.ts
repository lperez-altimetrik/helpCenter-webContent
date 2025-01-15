import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [ CommonModule, MatCardModule],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {
  @Input() image: string = 'assets/images/product-image.png';
  @Input() title: string = 'Optic Mobile';
  @Input() text: string = 'We give ambitious businesses their launchpad through safe and secure online payment solutions';
}
