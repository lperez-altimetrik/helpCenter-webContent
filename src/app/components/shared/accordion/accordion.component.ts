import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [MatExpansionModule, LinkComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {}
