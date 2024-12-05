import { NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';


export enum MessageType {
  Neutral = 'neutral',
  Positive = 'positive',
  Warning = 'warning',
  Danger = 'danger',
}

@Component({
  selector: 'app-contextual-message',
  standalone: true,
  imports: [MatCard,NgClass],
  templateUrl: './contextual-message.component.html',
  styleUrl: './contextual-message.component.scss'
})
export class ContextualMessageComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() messageType: string = '';

  private _messageValue: MessageType = MessageType.Neutral;

  constructor() {
    this.title = 'Title Text';
    this.content= 'Little red riding hood went on a mission accross the sea to find someone with whom to share her wheat. The big bad wolf followed in his submarine to see if he could make her into a meal to eat.';
  }

  @Input() set state(value: string) {
    const state = MessageType[value as keyof typeof MessageType];
    this._messageValue = state || MessageType.Neutral;
  }

  get detailTypeClass(): string {
    return this._messageValue + "-detail";
  }

  get titleTypeClass(): string {
    return this._messageValue + "-title";
  }

}
