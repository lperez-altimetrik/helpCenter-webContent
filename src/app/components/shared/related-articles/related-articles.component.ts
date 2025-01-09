import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IInputData } from 'app/interfaces/input-data.interface';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-related-articles',
  standalone: true,
  imports: [MatIconModule, LinkComponent],
  templateUrl: './related-articles.component.html',
  styleUrl: './related-articles.component.scss',
})
export class RelatedArticlesComponent {
  @Input() title = 'Related articles';
  @Input() viewMoreLabel = 'View More';
  @Input() relatedLinks: IInputData[] = [
    {
      title: 'Paysafe Glossary of Payment Terms for Merchants',
      url: '#',
    },
    {
      title: 'Accept payments with Tap to Pay on iPhone',
      url: '#',
    },
    {
      title: 'Set up and edit transfer options',
      url: '#',
    },
    {
      title: 'Chargeback Guide',
      url: '#',
    },
  ];
  public onClickViewMore = () => {
    alert('View more clicked');
  };
}
