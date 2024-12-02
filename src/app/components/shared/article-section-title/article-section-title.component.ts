import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-article-section-title',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './article-section-title.component.html',
  styleUrl: './article-section-title.component.scss',
})
export class ArticleSectionTitleComponent {
  @Input() title = 'Article Section Title';
}
