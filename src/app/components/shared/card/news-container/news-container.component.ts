import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LinkComponent } from '../../link/link.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-news-container',
  standalone: true,
  imports: [CommonModule, MatIconModule, LinkComponent, MatCardModule],
  templateUrl: './news-container.component.html',
  styleUrl: './news-container.component.scss'
})
export class NewsContainerComponent {
  @Input() image = 'assets/images/card-image.png';
  @Input() title = 'new optic app';
  @Input() span = '15 min read';
  @Input() text =
    'We give ambitious businesses their launchpad through safe and secure online payment solutions';
  @Input() link = 'Learn more';
  @Input() linkUrl = 'https://www.paysafe.com/us-en/';
  @Input() linkIcon = 'north_east';

}
