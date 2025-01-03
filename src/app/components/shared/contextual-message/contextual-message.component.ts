import { NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';
import { MatCard } from '@angular/material/card';

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
  readonly DETAIL_STYLE_STRING: string = "-detail";
  readonly TITLE_STYLE_STRING: string = "-title";
  @Input() title: string = '';
  @Input() message: string = '';

  private _messageValue: MessageType = MessageType.Neutral;

  //'Danger','Warning','Neutral' and 'Positive' are accepted inputs for State.
  @Input() set state(value: string) {
    const state = MessageType[value as keyof typeof MessageType];
    this._messageValue = state || MessageType.Neutral;
  }

  get detailTypeClass(): string {
    return this._messageValue + this.DETAIL_STYLE_STRING;
  }

  get titleTypeClass(): string {
    return this._messageValue + this.TITLE_STYLE_STRING;
  }

}