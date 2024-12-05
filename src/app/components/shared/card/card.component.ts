import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
}
