import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() title: string = 'New feature alert';
  @Input() subtitle: string = 'Product Catalogue is here!';
  @Input() description: string =
    'Streamline your checkout experience and track sales insights for all of your business products today!';
  @Input() url: string = 'https://paysafe.com';
}
