import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() label = 'Label';
  @Input() url = 'https://www.paysafe.com/us-en/';
  @Input() linkIcon = 'north_east';
  @Input() displayIcon = true;
}
