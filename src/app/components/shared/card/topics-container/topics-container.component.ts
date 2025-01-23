import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topics-container',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './topics-container.component.html',
  styleUrl: './topics-container.component.scss'
})
export class TopicsContainerComponent {
  @Input() title = 'Getting started';
  @Input() body = 'We give ambitious businesses their launchpad through safe and secure online payment solutions';
  @Input() articleId: any;

  navigateToArticle() {

  }
}
