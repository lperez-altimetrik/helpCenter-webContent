import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { DragScrollDirective } from '../header/drag-scroll.directive';
import { MatChipsModule } from '@angular/material/chips';
import { MatChipSelectionChange } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-pill-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    DragScrollDirective,
    MatInputModule,
    MatChipsModule,
    MatFormFieldModule,
  ],
  templateUrl: './pill-bar.component.html',
  styleUrl: './pill-bar.component.scss',
})
export class PillBarComponent {
  @Input() chipLabels: string[] = [
    //make input parameter for this
    'Get Started!',
    'Wallet',
    'Payment Link',
    'Disputes',
    'Payments',
    'My Account',
  ];

  @Output() notifyParentEvent = new EventEmitter<string>();

  @Output() onChipSelect(event: MatChipSelectionChange) {
    const val = event.source.value;

    if (!event.source.selected) {
      event.source.deselect;
      this.notifyParentEvent.emit('');
    } else if (val) {
      console.log('value: ' + val);
      this.notifyParentEvent.emit(val);
    }
  }
}
