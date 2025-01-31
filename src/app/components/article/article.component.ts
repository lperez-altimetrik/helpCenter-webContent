import { Component, ComponentRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { AppState, DataService } from 'app/services/data.service';
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
import { NavigateService } from 'app/services/navigate.service';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../shared/title/title.component';
import { SubtitleComponent } from '../shared/subtitle/subtitle.component';
import { LabelComponent } from '../shared/label/label.component';
import { LinkComponent } from '../shared/link/link.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { ArticleSectionTitleComponent } from '../shared/article-section-title/article-section-title.component';
import { ProductsContainerComponent } from '../shared/card/products-container/products-container.component';
import { VideoPlayerComponent } from '../shared/video-player/video-player.component';
import { RichTextComponent } from '../shared/rich-text/rich-text.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { environment } from 'environments/environment';
import * as _ from 'lodash';
import { MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { ArticleSectionIndexComponent } from '../shared/article-section-index/article-section-index.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { SidenavService } from 'app/services/sidenav.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContactUsComponent,
    BreadcrumbComponent, ArticleIndexComponent, ArticleFeedbackComponent, MatSidenavModule,
    RelatedArticlesComponent, SidebarComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  resourcesUrl = environment.resourcesUrl;
  public route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private sidenavService = inject(SidenavService);
  private breakpointObserver = inject(BreakpointObserver);
  private navigateService = inject(NavigateService);
  private helpCenterState = inject(DataService); //duplicated with dataService but using this way for differentiating
  articleId!: string;
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;
  private componentRefs: ComponentRef<any>[] = [];
  private templateData: any = {};
  public searchPills: any;

  //Sidebar data
  sidenavOpen = true;
  sidenavMode: MatDrawerMode = 'side';
  sidebarData: any;
  businessOptions: any;
  selectedOptionSidebar: any = "";
  menuSections: any = [];
  articleIndexSections: any = [];
  relatedArticles: any;
  categoryGroupsTabs: any;
  breadcrumbData: any;

  state!: AppState;
  languages: any[] = [
    "English",
    "Spanish",
    "German",
    "French",
    "Chinese",
    "Japanese"
  ];
  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit(): void {

    this.sidenavService.toggleSidenav$.subscribe((open: boolean) => {
        this.sidenav.toggle();
    })

    this.breakpointObserver
      .observe(['(min-width: 480px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
           this.sidenavOpen = true;
           this.sidenavMode = 'side';
        } else {
          this.sidenavOpen = false;
          this.sidenavMode = 'over';
        }
      });
    this.helpCenterState.restoreState();
    this.helpCenterState.getState().subscribe((state: AppState) => {
      this.state = state;
    });
  }

  async ngAfterViewInit() {
    if (this.dynamicContainer) {
      this.articleId = this.route.snapshot.paramMap.get('articleId')!;
      this.renderTemplate(null);
    }
  }

  public tabChanged(index: number, tab: string) {
    alert(tab)
  }

  private renderArticleContent(data: any = {}): void {
    const sectionList = _.get(data, "data.attributes.sections", []);
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
          this.createComponent(section, RichTextComponent);
          break;
        case 'shared.subtitle':
          this.createComponent(section, SubtitleComponent);
          break;
        case 'shared.accordion':
          this.createComponent(section, AccordionComponent);
          break;
        case 'shared.title':
          this.createComponent(section, TitleComponent);
          break;
        case 'shared.label':
          this.createComponent(section, LabelComponent);
          break;
        case 'shared.link':
          this.createComponent(section, LinkComponent);
          break;
        case 'shared.banner':
          this.createComponent(section, BannerComponent);
          break;
        case 'shared.article-section-title':
          this.createComponent(section, ArticleSectionTitleComponent);
          break;
        case 'shared.article-index-section':
          this.createComponent(section, ArticleSectionIndexComponent);
          break;
        case 'shared.product-card':
          this.createComponent(section, ProductsContainerComponent);
          break;
        case 'shared.video':
          this.createComponent(section, VideoPlayerComponent);
          break;
        case 'shared.modal':
          this.createComponent(section, ModalComponent);
          break;
      }
    });

    //Article index mapping
    this.articleIndexSections = sectionList.filter((section: any) => {
      return _.get(section, "__component", "") == "shared.article-index-section"
    }).map((articleIndex: any) => {
      return { title: articleIndex.section, url: articleIndex.sectionId }
    });
    //When no "article index sections" from strapi we map the sections using the "article section titles"
    if (!this.articleIndexSections || _.isEmpty(this.articleIndexSections)) {
      this.articleIndexSections = sectionList.filter((section: any) => {
        return _.get(section, "__component", "") == "shared.article-section-title"
      }).map((articleIndex: any) => {
        return { title: articleIndex.title, url: articleIndex.title }
      });
    }

    //mapping related article elements
    this.relatedArticles = _.get(data, "data.attributes.related_articles.data", []).map((element: any) => {
      return { title: element.attributes.title, url: "/articles/" + element.id }
    });

    //mapping breadcrumb
    this.breadcrumbData = {
      "pagesPath": [
        { title: "Home", url: "/dashboard" },
        { title: _.get(data, "data.attributes.category.data.attributes.title", ""), url: "/dashboard" }, //category is not navigable
      ],
      "currentElement": _.get(data, "data.attributes.title", "")
    };

    //mapping languages
    const serviceLanguages = _.get(data, "data.attributes.page_template.data.attributes.header.language_selector.languages.data", []).map(
      (lang: any) => _.get(lang, "attributes.name"));
    this.helpCenterState.updateState({ languages: serviceLanguages });

  }

  public renderContent(articleId: any): void {
    this.componentRefs?.forEach((ref) => ref.destroy()); // Destroy existing components
    this.componentRefs = [];
    this.dataService.getArticlesTemplate(articleId, this.state.language, this.state.categoryGroup).subscribe({
      next: (data: any) => {
        this.templateData = data;
        this.renderArticleContent(data);
      },
      error: (error) => {
        console.error('Error fetching article template:', error);
        this.navigateService.navigateTo('/article-not-found');
      },
    });
  }

  public renderTemplate(data: any): void {
    this.componentRefs.forEach((ref) => ref.destroy()); // Destroy existing components
    this.componentRefs = [];
    this.dataService.getArticlesTemplate(this.articleId, this.state.language, this.state.categoryGroup).subscribe({
      next: (data: any) => {
        this.templateData = data;
        this.renderArticleContent(data);
        this.renderSidebar(data);
        this.searchPills = _.get(data, "data.attributes.page_template.data.attributes.header.pill", []).map((pillItem: any) => {
          return pillItem.title;
        });
        this.categoryGroupsTabs = _.get(data, "data.attributes.category.data.attributes.category_groups.data", []).map((categoryG: any) => {
          return categoryG.attributes.title;
        });
      },
      error: (error) => {
        console.error('Error fetching article template:', error);
        this.navigateService.navigateTo('/article-not-found');
      },
    });
  }

  private renderSidebar(data: any = {}) {
    const sidebarTemplate = _.get(this.templateData, "data.attributes.page_template.data.attributes.sidebar", {});
    const businessOptionsObj: any = _.get(sidebarTemplate, "category_selector.category_groups.data", [])
      .map((categoryGroup: any) => {
        return { "option": _.get(categoryGroup, "attributes.title") };
      });
    const businessOptions = businessOptionsObj.map((BO: any) => BO.option);
    const sectionsBO = _.mapValues(_.keyBy(businessOptions), () => ({}));

    for (const optionBO of businessOptions) {
      const sections = sidebarTemplate.sidebar_sections.map((section: any) => {
        const sectionObj: any = { title: section.title };
        sectionObj["sections"] = section.categories.data.map((category: any) => {
          const itemObj: any = { title: _.get(category, "attributes.title"), iconUrl: this.resourcesUrl + _.get(category, "attributes.icon.data.attributes.url") }
          const filteredItems: any = _.get(category, "attributes.articles.data", []).filter((article: any) => {
            return _.get(article, "attributes.category_groups.data", []).find((categoryGroup: any) => optionBO == _.get(categoryGroup, "attributes.title", ""))
          });
          const menuItems = filteredItems.map((article: any) => {
            return { title: article.attributes.title, url: article.id }
          });
          itemObj["menuItems"] = menuItems;
          return itemObj
        })
        sectionObj["sections"] = sectionObj["sections"].filter((subMenu: any) => { return !_.isEmpty(subMenu.menuItems) });
        return sectionObj;
      });
      sectionsBO[optionBO] = sections;
    }
    [this.sidebarData, this.businessOptions] = [sectionsBO, businessOptionsObj]
    this.helpCenterState.updateState({ categoryGroups: businessOptionsObj.map((option: any) => option.option) });
    this.helpCenterState.getState().subscribe((state: AppState) => {
      this.selectedOptionSidebar = state.categoryGroup;
    });
    this.menuSections = sectionsBO[this.selectedOptionSidebar];
  }

  private setComponentData(section: any, componentRef: any) {
    for (const prop in section) {
      componentRef.instance[prop] = section[prop];
    }

    switch (section.__component) {
      case "shared.accordion":
        const newData = section["accordionData"].map((item: any) => {
          if (item.text == null) return { title: null, text: null };
          return {
            title: item.title,
            text: item.text.map((currentItem: any) => { return currentItem.children[0].text }).join(" ")
          }
        })
        componentRef.instance["accordionData"] = newData;
        break;
      case "shared.rich-text":
        const paragraphs = _.get(section, "content", []).map((part: any) => {
          return _.get(part, "children[0].text", "");
        });
        componentRef.instance["text"] = paragraphs;
        break;
      case "shared.image":
      case "shared.product-card":
        componentRef.instance["src"] = this.resourcesUrl + _.get(section, "image.data.attributes.url");
        break;
      case "shared.modal":
        componentRef.instance["content"] = _.get(section, "content", []).map((currentItem: any) => { return currentItem.children[0].text }).join(" ")
        break;
      case "shared.table":
        const rows = section.rows;
        if (rows != null) {
          const columnKeys = rows[0].cells.map((cell: any) => cell.label);
          const remainingRows = rows.slice(1);
          const data = remainingRows.map((row: any) => {
            return row.cells.map((cell: any) => cell.label)
          });
          const tableData = data.map((row: any) => {
            return row.reduce((obj: any, value: any, index: number) => {
              obj[columnKeys[index]] = value;
              return obj;
            }, {});
          });
          componentRef.instance["columnKeys"] = columnKeys;
          componentRef.instance["tableData"] = tableData;
        }
        break;
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
