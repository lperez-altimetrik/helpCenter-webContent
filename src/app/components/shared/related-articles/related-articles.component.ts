import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-related-articles',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './related-articles.component.html',
  styleUrl: './related-articles.component.scss'
})
export class RelatedArticlesComponent {
  public relatedLinks: any[] = [
    {
      "title": "Paysafe Glossary of Payment Terms for Merchants",
      "link": "#"
    },
    {
      "title": "Accept payments with Tap to Pay on iPhone",
      "link": "#"
    },
    {
      "title": "Set up and edit transfer options",
      "link": "#"
    },
    {
      "title": "Chargeback Guide",
      "link": "#"
    }
];
  public onClickViewMore = () =>{
    alert("View more clicked");
  }
}
