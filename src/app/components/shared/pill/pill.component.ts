import { NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

export enum PillStyle {
  Primary = 'primary',
  Secondary = 'secondary'
}

@Component({
  selector: 'app-pill',
  standalone: true,
  imports: [MatButton,NgClass],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss'
})
export class PillComponent {

  private _pillStyle: PillStyle = PillStyle.Primary;
  
  @Input() title: string = '';
  //'Primary' and 'Secondary' are accepted inputs for Pill Style.
  @Input() set pillStyle(value: string) {
    const pillStyle = PillStyle[value as keyof typeof PillStyle];
    this._pillStyle = pillStyle || PillStyle.Primary;
  }

  get pillStyle(): string {
    return this._pillStyle;
  }

}
