import { Component, OnInit, OnDestroy, EventEmitter, Output, ContentChildren, AfterContentInit, QueryList, Query, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { DragScrollDirective } from '../top-bar/drag-scroll.directive';
import { MatChipOption, MatChipsModule } from '@angular/material/chips';
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

    NgFor,
    MatInputModule,
    MatChipsModule, 
    MatFormFieldModule, 
    MatLabel],
  templateUrl: './pill-bar.component.html',
  styleUrl: './pill-bar.component.scss'
})

export class PillBarComponent {
  _query: string = "";

  chipLabels: string[] = [  //make input parameter for this
    'Get Started!',
    'Wallet',
    'Payment Link',
    'Disputes',
    'Payments',
    'My Account',
  ]

  @Output() notifyParentEvent = new EventEmitter<string>();
  

  @Output() onChipSelect(event: MatChipSelectionChange) {
    const val = event.source.value;

    if (!event.source.selected){
      event.source.deselect;
      this.notifyParentEvent.emit("");
    } else if (val) {
      console.log("value: " + val);
      this.notifyParentEvent.emit(val);
    }

  } 

}
/*
export class PillBarComponent implements AfterContentInit {

  @ContentChildren(MatChipOption) chips!: QueryList<MatChipOption>;
  private selectedChip: MatChipOption | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.chips.changes.subscribe(() => {
      this.setupChips();
    })

    this.setupChips();
  }

  private setupChips() {
    this.chips.forEach(chip => {
      chip.selectionChange.subscribe(event => {
        if (event.isUserInput) {
          if (this.selectedChip && this.selectedChip != chip) {
            this.selectedChip.deselect();
          }
          if (event.selected) {
            this.selectedChip = chip;
          } else {
            this.selectedChip = null;
          }
          
        }
      });
    });
  }
  
}
*/