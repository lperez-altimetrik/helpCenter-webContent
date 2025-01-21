import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import { AfterViewInit, HostListener } from '@angular/core';

import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnChanges, AfterViewInit {
  @Input() title = 'Popular articles';
  @Input() searchString = new FormControl('');
  @ViewChild('searchInput') inputElement!: ElementRef;
  @Input() options: string[] = [
    'Paysafe Glossary of Payment Terms for Merchants',
    'Paysafe Glossary of Payment Terms for Merchants',
    'Paysafe Glossary of Payment Terms for Merchants',
    'Paysafe Glossary of Payment Terms for Merchants',
    'Wallet',
    'Payment Link',
    'Disputes',
  ];
  @Input() isPanelOpened = false;
  @Input() searchFocus = false;
  @ViewChild(MatAutocompleteTrigger)
  autocomplete: MatAutocompleteTrigger | undefined;
  filteredOptions: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.autocomplete = undefined;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    if (this.autocomplete && this.autocomplete.panelOpen) {
      this.autocomplete.closePanel();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onWindowScroll);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      this.searchString.value != '' &&
      this._filter(this.searchString.value || '').length > 0
    ) {
      this.inputElement.nativeElement.click();
    }
  }

  redirectToArticle(optionId: string) {
    this.router.navigate(['/article', optionId]);
  }

  onSearchChange() {
    this.filteredOptions = this._filter(this.searchString.value || '');
  }

  onClosedEvent() {
    this.isPanelOpened = false;
  }

  cleanSearch(event: Event) {
    this.searchString.setValue('');
    this.filteredOptions = this._filter(this.searchString.value || '');
    this.closePanel(event);
  }

  closePanel(event: Event) {
    if (this.autocomplete?.panelOpen) {
      event.stopPropagation();
      this.autocomplete?.closePanel();
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredItems = this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
    this.isPanelOpened = filteredItems.length != 0;
    return filteredItems;
  }
}
