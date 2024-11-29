import { Component } from '@angular/core';

@Component({
  selector: 'app-article-index',
  standalone: true,
  imports: [],
  templateUrl: './article-index.component.html',
  styleUrl: './article-index.component.scss'
})
export class ArticleIndexComponent {
  public articleLinks: any[] = [
    {title:"Why Use a Payment Link", url: "#"},
    {title:"Steps to Create and Share a Payment Link", url: "#"},
    {title:"QR Codes", url: "#"}
  ];

  public onLinkClick = (url: string) => {
    alert(`clicked element: loading ${url}`);
  }
}
