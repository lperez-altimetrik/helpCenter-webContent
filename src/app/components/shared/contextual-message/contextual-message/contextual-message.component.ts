import { Component,Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-contextual-message',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle],
  templateUrl: './contextual-message.component.html',
  styleUrl: './contextual-message.component.scss'
})
export class ContextualMessageComponent {
  @Input() title: string;
  @Input() content: string;

  constructor() {
    this.title = 'Title Text';
    this.content= 'Little red riding hood went on a mission accross the sea to find someone with whom to share her wheat. The big bad wolf followed in his submarine to see if he could make her into a meal to eat.';
  }

}
