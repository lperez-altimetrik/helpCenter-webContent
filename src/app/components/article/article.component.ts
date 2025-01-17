import { Component, ComponentRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { TableComponent } from '../shared/table/table.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  private dataService = inject(DataService);
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;
  private componentRefs: ComponentRef<any>[] = [];

  async ngAfterViewInit() {
    if (this.dynamicContainer) {
      this.renderTemplate();
    }
  }

  private renderTemplate(): void {
    this.componentRefs.forEach((ref) => ref.destroy()); // Destroy existing components
    this.componentRefs = [];
    this.dataService.getArticlesTemplate().subscribe((data: any) => {
      const sectionList = data?.data?.attributes?.sections || [];
      sectionList.forEach((section: any) => {
          switch (section.__component) {
            case 'shared.table':
              this.createTableComponent(section);
              break;
            // Add cases for other components as needed
          }
      });
    });
  }

  private createTableComponent(section: any): void {
    const tableRef: any = this.dynamicContainer.createComponent(TableComponent);
    this.componentRefs.push(tableRef);

    // FOX THIS TO PASS CELLS
    // tableRef.instance.rows = section.rows;

    // Trigger change detection to ensure updates
    tableRef.changeDetectorRef.detectChanges();
    this.componentRefs.push(tableRef);
  }


  ngOnDestroy(): void {
    this.componentRefs.forEach((ref) => ref.destroy());
  }
}
