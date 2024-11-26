import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-topic-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.scss'
})
export class TopicCardComponent {
  @Input() title: string = "";
  @Input() description: string = "";
}
