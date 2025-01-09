import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IInputData } from 'app/interfaces/input-data.interface';

@Component({
  selector: 'app-breadcrum',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  @Input() pagesPath: IInputData[] = [
    { title: 'Page 1', url: '#' },
    { title: 'Page 2', url: '#' },
    { title: 'Page 3', url: '#' },
    { title: 'Page 4', url: '#' },
  ];
  @Input() currentElement: string = 'Page 5';
}
