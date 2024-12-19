import { Component } from '@angular/core';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { ArticleIndexComponent } from '../shared/article-index/article-index.component';
import { ArticleFeedbackComponent } from '../shared/article-feedback/article-feedback.component';
import { RelatedArticlesComponent } from '../shared/related-articles/related-articles.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { TitleComponent } from '../shared/title/title.component';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';
import { ContextualMessageComponent } from '../shared/contextual-message/contextual-message.component';
import { ArticleSectionTitleComponent } from '../shared/article-section-title/article-section-title.component';
import { AccordionComponent } from '../shared/accordion/accordion.component';
import { VideoPlayerComponent } from '../shared/video-player/video-player.component';
import { TableComponent } from '../shared/table/table.component';
import { ImageComponent } from '../shared/image/image.component';

@Component({
  selector: 'app-help-center-article',
  standalone: true,
  imports: [
    TopBarComponent, 
    SidebarComponent, 
    FooterComponent, 
    ContactUsComponent, 
    ArticleIndexComponent,
    ArticleFeedbackComponent,
    RelatedArticlesComponent,
    BreadcrumbComponent,
    TitleComponent,
    SubtitleComponent,
    ContextualMessageComponent,
    ArticleSectionTitleComponent,
    AccordionComponent,
    VideoPlayerComponent,
    TableComponent,
    ImageComponent
  ],
  templateUrl: './help-center-article.component.html',
  styleUrl: './help-center-article.component.scss'
})
export class HelpCenterArticleComponent {
  pagesPath : any[] = [
    { title: "Home", url: "#"},
    { title: "Payments", url: "#"},
  ];
  currentElement : string = "Payment Links";
}
