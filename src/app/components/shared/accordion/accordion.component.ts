import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LinkComponent } from '../link/link.component';

export interface IAccordionData {
  title: string;
  text: string;
  url: string;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [MatExpansionModule, LinkComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() title = "Accordion title";
  @Input() accordionData: IAccordionData[] = [
    {
      title: 'Accordion Section Title',
      text: `Lorem ipsum dolor sit amet consectetur. Dui quam consectetur tincidunt
          adipiscing. Et in blandit nisi integer. Non risus sed odio sed dui
          nisl. Dolor mattis malesuada morbi lacus integer elementum nulla.
          Integer tincidunt tempus dapibus purus. Lectus in in eu justo quisque
          nunc fusce mauris et. Id cras cursus porttitor lacus erat ornare
          tempor nisl.`,
      url: "#"
    },
    {
      title: 'Accordion Section Title',
      text: `Lorem ipsum dolor sit amet consectetur. Dui quam consectetur tincidunt
          adipiscing. Et in blandit nisi integer. Non risus sed odio sed dui
          nisl. Dolor mattis malesuada morbi lacus integer elementum nulla.
          Integer tincidunt tempus dapibus purus. Lectus in in eu justo quisque
          nunc fusce mauris et. Id cras cursus porttitor lacus erat ornare
          tempor nisl.`,
      url: "#"
    },
    {
      title: 'Accordion Section Title',
      text: `Lorem ipsum dolor sit amet consectetur. Dui quam consectetur tincidunt
          adipiscing. Et in blandit nisi integer. Non risus sed odio sed dui
          nisl. Dolor mattis malesuada morbi lacus integer elementum nulla.
          Integer tincidunt tempus dapibus purus. Lectus in in eu justo quisque
          nunc fusce mauris et. Id cras cursus porttitor lacus erat ornare
          tempor nisl.`,
      url: "#"
    },
    {
      title: 'Accordion Section Title',
      text: `Lorem ipsum dolor sit amet consectetur. Dui quam consectetur tincidunt
          adipiscing. Et in blandit nisi integer. Non risus sed odio sed dui
          nisl. Dolor mattis malesuada morbi lacus integer elementum nulla.
          Integer tincidunt tempus dapibus purus. Lectus in in eu justo quisque
          nunc fusce mauris et. Id cras cursus porttitor lacus erat ornare
          tempor nisl.`,
      url: "#"
    },
  ];
}
