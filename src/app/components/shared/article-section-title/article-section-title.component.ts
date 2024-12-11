import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-article-section-title',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './article-section-title.component.html',
  styleUrl: './article-section-title.component.scss',
})
export class ArticleSectionTitleComponent {
  constructor(private clipboard: Clipboard) {}
  @Input() title = 'Article Section Title';
  @Input() url = '#URL#';

  copyArticleUrl() {
    this.clipboard.copy(this.url);
  }
}
