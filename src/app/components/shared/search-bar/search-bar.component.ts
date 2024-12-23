import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, PLATFORM_ID, Inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { isPlatformBrowser } from '@angular/common';

import { AfterViewInit, HostListener } from '@angular/core';

import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnChanges,  AfterViewInit{
  @Input() searchString = new FormControl('');
  isPanelOpened = false;
  searchFocus = false;
  @ViewChild("searchInput") inputElement!: ElementRef;
  @Input() options: string[] = [
    'Paysafe Glossary of Payment Terms for Merchants', 
    'Paysafe Glossary of Payment Terms for Merchants', 
    'Paysafe Glossary of Payment Terms for Merchants',
    'Paysafe Glossary of Payment Terms for Merchants',
    "Wallet",
    "Payment Link",
    "Disputes"
  ];
  @ViewChild(MatAutocompleteTrigger)
  autocomplete: MatAutocompleteTrigger | undefined;
  filteredOptions: any[] = [];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.autocomplete = undefined;
  }
  
  ngAfterViewInit() {
    // Optionally, you might want to add some delay or debounce to avoid too frequent calls
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
    if(this.searchString.value != "" && this._filter(this.searchString.value || "").length > 0){
      this.inputElement.nativeElement.click();
    }
  }

  onSearchChange() {
    this.filteredOptions = this._filter(this.searchString.value || "");
  }

  onClosedEvent(){
    this.isPanelOpened = false;
  }

  cleanSearch(){
    this.searchString.setValue(""); 
    this.filteredOptions = this._filter(this.searchString.value || "");
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredItems = this.options.filter(option => option.toLowerCase().includes(filterValue));
    this.isPanelOpened = filteredItems.length != 0;
    return filteredItems;
  }
}
