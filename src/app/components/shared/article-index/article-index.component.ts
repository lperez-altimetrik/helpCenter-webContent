import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-article-index',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './article-index.component.html',
  styleUrl: './article-index.component.scss'
})
export class ArticleIndexComponent {
  private currentSelectedSection: any = null;
  public selectedSectionTitle: any = undefined;
  public articlePanelOpened: boolean = false;
  public articleLinks: any[] = [
    {title:"Payment Links", url: "#"},
    {title:"Why Use a Payment Link", url: "#"},
    {title:"Steps to Create and Share a Payment Link", url: "#"},
    {title:"QR Codes", url: "#"}
  ];

  public onLinkClick = (event: any, url: string) => {
    if(this.currentSelectedSection){
      this.currentSelectedSection.classList.remove("header-title");
      this.currentSelectedSection.parentElement.classList.remove("header-content");
    }
    event.target.classList.add("header-title");
    event.target.parentElement.classList.add("header-content");
    this.currentSelectedSection = event.target;
  }

  public changeOption (option: any){
    this.selectedSectionTitle = option.title;
    this.articlePanelOpened = !this.articlePanelOpened;
  }
}
