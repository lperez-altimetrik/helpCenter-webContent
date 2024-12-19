import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrum',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() pagesPath: any = [
    { title: "Page 1", url: "#"},
    { title: "Page 2", url: "#"},
  ]
  @Input() currentElement: string = "Page 3";
}
