import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrum',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './breadcrum.component.html',
  styleUrl: './breadcrum.component.scss'
})
export class BreadcrumComponent {
  public pagesPath: any = [
    { title: "Page 1", url: "#"},
    { title: "Page 2", url: "#"},
    { title: "Page 3", url: "#"},
    { title: "Page 4", url: "#"}
  ]
  public currentElement: string = "page 5";
}
