import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-article-section-index',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './article-section-index.component.html',
  styleUrl: './article-section-index.component.scss',
})
export class ArticleSectionIndexComponent {
  constructor(private clipboard: Clipboard) { }
  @Input() section = 'Article Section Title';
  @Input() sectionId = '#';
}
