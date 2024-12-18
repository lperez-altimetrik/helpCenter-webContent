import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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
export class SearchBarComponent implements OnChanges{
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
  filteredOptions: any[] = [];

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
