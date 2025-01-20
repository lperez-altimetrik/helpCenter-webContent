import { Component, ComponentRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { TableComponent } from '../shared/table/table.component';
import { ContextualMessageComponent } from '../shared/contextual-message/contextual-message.component';

import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { ArticleIndexComponent } from '../shared/article-index/article-index.component';
import { ImageComponent } from '../shared/image/image.component';
import { AccordionComponent } from '../shared/accordion/accordion.component';
import { ArticleFeedbackComponent } from "../shared/article-feedback/article-feedback.component";
import { RelatedArticlesComponent } from "../shared/related-articles/related-articles.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { TitleComponent } from '../shared/title/title.component';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContactUsComponent, BreadcrumbComponent, ArticleIndexComponent, ArticleFeedbackComponent, RelatedArticlesComponent, SidebarComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  private dataService = inject(DataService);
  articleId!: string;
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;
  private componentRefs: ComponentRef<any>[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  async ngAfterViewInit() {
    if (this.dynamicContainer) {
      this.articleId = this.route.snapshot.paramMap.get('articleId')!;
      this.renderTemplate();
    }
  }

  private renderTemplate(): void {
    this.componentRefs.forEach((ref) => ref.destroy()); // Destroy existing components
    this.componentRefs = [];
    this.dataService.getArticlesTemplate(this.articleId).subscribe({
      next: (data: any) => {
        const sectionList = data?.data?.attributes?.sections || [];
        sectionList.forEach((section: any) => {
          switch (section.__component) {
            case 'shared.table':
              this.createComponent(section, TableComponent);
              break;
            case 'shared.contextual-message':
              this.createComponent(section, ContextualMessageComponent);
              break;
            case 'shared.image':
              this.createComponent(section, ImageComponent);
              break;
            case 'shared.rich-text':
              this.createComponent(section, SubtitleComponent);
              break;
            case 'shared.accordion':
              this.createComponent(section, AccordionComponent);
              break;
            case 'shared.title':
              this.createComponent(section, TitleComponent);
              break;
            // Add cases for other components as needed
          }
        });
      },
      error: (error) => {
        console.error('Error fetching article template:', error);
        // Redirigir a la página de "Artículo no encontrado"
        this.router.navigate(['/article-not-found']);
      },
    });
  }

  private setComponentData(section: any, componentRef: any) {
    for (const prop in section) {
      componentRef.instance[prop] = section[prop];
    }
  }

  private createComponent(section: any, componentType: any) {
    const componentRef: any = this.dynamicContainer.createComponent(componentType);
    this.setComponentData(section, componentRef);
    this.componentRefs.push(componentRef);

    // Trigger change detection to ensure updates
    componentRef.changeDetectorRef.detectChanges();
    this.componentRefs.push(componentRef);
  }

  ngOnDestroy(): void {
    this.componentRefs.forEach((ref) => ref.destroy());
  }
}
