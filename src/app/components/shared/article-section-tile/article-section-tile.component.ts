import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-article-section-tile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './article-section-tile.component.html',
  styleUrl: './article-section-tile.component.scss',
})
export class ArticleSectionTileComponent {
  @Input() title = 'Article Section Tile';
}
