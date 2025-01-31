import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import {
  MatChipSelectionChange,
  MatChipsModule,
} from '@angular/material/chips';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { AppState, DataService } from 'app/services/data.service';
import { NavigateService } from 'app/services/navigate.service';
import { TopicsContainerComponent } from '../shared/card/topics-container/topics-container.component';
import { NewsContainerComponent } from '../shared/card/news-container/news-container.component';
import { ProductsContainerComponent } from '../shared/card/products-container/products-container.component';

import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { RelatedArticlesComponent } from "../shared/related-articles/related-articles.component";
import * as _ from 'lodash';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatChipsModule, HeaderComponent, FooterComponent, ContactUsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  private authService = inject(AuthService);
  private navigateService = inject(NavigateService);
  private dataService = inject(DataService);

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;
  @ViewChild('listContainer', { read: ViewContainerRef })
  listContainer!: ViewContainerRef;
  private componentRefs: ComponentRef<any>[] = [];
  private componentListRefs: ComponentRef<any>[] = [];

  public contactUsComponent: any;
  public footerComponent: any;
  public searchPills: any;
  categoryGroupsTabs: any;
  state!: AppState;
  private helpCenterState = inject(DataService);
  resourcesUrl = environment.resourcesUrl;


  ngOnInit(): void {
    this.helpCenterState.restoreState();
    this.helpCenterState.getState().subscribe((state: AppState) => {
      this.state = state;
    });
  }

  async ngAfterViewInit() {
    if (this.dynamicContainer) {
      this.renderSections(null);
    }
  }

  public renderSections(category_group: any): void {
    this.helpCenterState.restoreState();
    this.componentRefs.forEach((ref) => ref.destroy()); // Destroy existing components
    this.componentListRefs.forEach((ref) => ref.destroy());
    this.componentRefs = [];
    this.componentListRefs = [];

    this.dataService.getSectionList(this.state.language, this.state.categoryGroup).subscribe((data: any) => {
      const sectionList = _.get(data, "template.data.attributes.section_list");
      sectionList.forEach((section: any) => {

        if (section.display_component === 'card_carousel') {
          // Fetch topics from the service
          // Create CarouselComponent
          const carouselRef = this.dynamicContainer.createComponent(CarouselComponent);
          this.componentRefs.push(carouselRef);

          // Set carousel title
          carouselRef.instance.title = section.title;
          carouselRef.instance.iconName = _.get(section, "icon.data.attributes.name", "").split('.')[0];

          switch (section.title) {
            case 'News & Updates': {
              carouselRef.instance.itemType = NewsContainerComponent;
              const categories = _.get(data, "categories.data", []);
              // Populate the carousel with cards having a dynamic component of TopicsContainerComponent
              const category = categories.find((item: any) => item.attributes.slug == "news-updates");
              const allNnUArticlesIds = _.get(category, "attributes.articles.data", []).map((article: any) => article.id);
              const allArticlesNnU = _.filter(_.get(data, "articles.data", []), (article: any) => _.includes(allNnUArticlesIds, article.id));
              const articles = allArticlesNnU.filter((article: any) => {
                return _.includes(
                  _.get(article, "attributes.category_groups.data", []).map((catGroup: any) => _.get(catGroup, "attributes.title")),
                  this.state.categoryGroup);
              });

              carouselRef.instance.items = articles.map((topic: any) => ({
                title: topic.attributes.title,
                text: topic.attributes.short_description,
                image: this.resourcesUrl + _.get(topic, "attributes.medias.data[0].attributes.url", undefined),
                span: topic.attributes.time_to_read,
                linkUrl: "/articles/" + topic.id
              }));
              break;
            }
            case 'Topics': {
              carouselRef.instance.itemType = TopicsContainerComponent;
              const topics = _.get(data, "topics.data", []);
              // Populate the carousel with cards having a dynamic component of TopicsContainerComponent
              carouselRef.instance.items = topics.map((topic: any) => ({
                title: topic.attributes.title,
                body: topic.attributes.short_description,
                articleId: topic.id
              }));

              break;
            }
            case 'Products': {
              carouselRef.instance.itemType = ProductsContainerComponent;
              const categories = _.get(data, "categories.data", []);

              const targetCategoryGroup = _.find(_.get(data, "category_groups.data", []), (catG: any) => {
                return _.get(catG, "attributes.title") == this.state.categoryGroup;
              });
              const catGProducts = _.get(targetCategoryGroup, "attributes.products.data", []);
              // Populate the carousel with cards having a dynamic component of TopicsContainerComponent
              carouselRef.instance.items = catGProducts.map((product: any) => ({
                title: product.attributes.title,
                text: product.attributes.short_description,
                src: this.resourcesUrl + _.get(product, "attributes.medias.data[0].attributes.url", undefined),
                articleId: product.id
              }));

              break;
            }
          }
          // Trigger change detection
          carouselRef.changeDetectorRef.detectChanges();
        }
        if (section.display_component === 'list') {
          // Fetch topics from the service
          // Create CarouselComponent
          const listRef = this.listContainer.createComponent(RelatedArticlesComponent);
          const categories = data?.categories?.data || [];
          listRef.instance.iconName = _.get(section, "icon.data.attributes.name", "").split('.')[0];

          switch (section.title) {
            case 'Trending Articles': {

              const category = categories.find((item: any) => item.attributes.slug == "trending-articles");
              listRef.instance.title = section.title;

              const allNnUArticlesIds = _.get(category, "attributes.articles.data", []).map((article: any) => article.id);
              const allArticlesNnU = _.filter(_.get(data, "articles.data", []), (article: any) => _.includes(allNnUArticlesIds, article.id));
              const articles = allArticlesNnU.filter((article: any) => {
                return _.includes(
                  _.get(article, "attributes.category_groups.data", []).map((catGroup: any) => _.get(catGroup, "attributes.title")),
                  this.state.categoryGroup);
              });

              listRef.instance.relatedLinks = _.takeRight(articles, 4).map((topic: any) => ({
                title: topic?.attributes?.title,
                url: "/articles/" + topic.id
              }));


              this.componentListRefs.push(listRef);

              // Trigger change detection
              listRef.changeDetectorRef.detectChanges();
              break;
            }
            case 'FAQs': {

              const category = categories.find((item: any) => item.attributes.slug == "faqs");
              listRef.instance.title = section.title;
              const allNnUArticlesIds = _.get(category, "attributes.articles.data", []).map((article: any) => article.id);
              const allArticlesNnU = _.filter(_.get(data, "articles.data", []), (article: any) => _.includes(allNnUArticlesIds, article.id));
              const articles = allArticlesNnU.filter((article: any) => {
                return _.includes(
                  _.get(article, "attributes.category_groups.data", []).map((catGroup: any) => _.get(catGroup, "attributes.title")),
                  this.state.categoryGroup);
              });


              listRef.instance.relatedLinks = _.takeRight(articles, 4).map((topic: any) => ({
                title: topic?.attributes?.title,
                url: "/articles/" + topic.id
              }));

              this.componentListRefs.push(listRef);

              // Trigger change detection
              listRef.changeDetectorRef.detectChanges();
              break;
            }
          }

        }
      });

      this.searchPills = _.get(data, "topics.data", []).map((pillItem: any) => {
        return _.get(pillItem, "attributes.title");
      });



      this.contactUsComponent = _.get(data, "template.data.attributes.page_template.data.attributes.contact_us");

      this.footerComponent = _.get(data, "template.data.attributes.page_template.data.attributes.footer_section");

      const categoryGroups = _.get(data, "category_groups.data", []).map((categoryG: any) => {
        return categoryG.attributes.title;
      });
      this.categoryGroupsTabs = categoryGroups
      this.helpCenterState.updateState({ categoryGroups: categoryGroups });

    });

  }

  getFooterDisclaimer() {
    try {
      return _.get(this.footerComponent, "copyright[0].children[0].text", undefined);
    } catch (e) {
      return undefined;
    }
  }

  logout(): void {
    this.authService.logout();
    this.navigateService.navigateTo('/login');
  }

  ngOnDestroy(): void {
    this.componentRefs.forEach((ref) => ref.destroy());
  }

  onChipSelect(event: MatChipSelectionChange, chip: any): void {
    chip.selected = event.selected;
  }
}
