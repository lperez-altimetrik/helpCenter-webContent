import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  PLATFORM_ID,
  Inject,
  inject,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, HostListener } from '@angular/core';

import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NavigateService } from 'app/services/navigate.service';
import { DataService } from 'app/services/data.service';


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
  private navigateService = inject(NavigateService);
  @Input() title = 'Popular articles';
  @Input() category_group = '';
  @Input() searchString = new FormControl('');
  @ViewChild('searchInput') inputElement!: ElementRef;
  @Input() options: any[] = [
    { title: 'Paysafe Glossary of Payment Terms for Merchants', id: 6 },
    { title: 'Wallet', id: 7 },
    { title: 'Payment Link', id: 8 },
    { title: 'Disputes', id: 9 }
  ];
  @Input() isPanelOpened = false;
  @Input() searchFocus = false;
  private dataService = inject(DataService);
  @ViewChild(MatAutocompleteTrigger)
  autocomplete: MatAutocompleteTrigger | undefined;
  filteredOptions: any[] = [];
  searchControl = new FormControl('');


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.autocomplete = undefined;
  }

  ngOnInit(): void {
    this.searchString.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((query: any) => {
        if (query.trim()) {
          this.searchArticles(query);
        } else {
          this.options = [];
        }
      });
  }

  searchArticles(query: string) {
    this.dataService.searchArticles(query, this.category_group).subscribe({
      next: (data: any) => {
        this.options = data.map((item: any) => { return { title: item.title, id: item.id } });
        this.inputElement.nativeElement.click();
      },
      error: (err: any) => {
        console.error('Error fetching search results:', err);
        this.options = [];
      },
    });
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
    this.navigateService.navigateTo("/article/" + optionId);
  }

  onSearchChange() {
    this.filteredOptions = this._filter(this.searchString.value || '');
  }
  onOptionClick(option: any) {
    this.navigateService.navigateTo(`/articles/${option.id}`);
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
      option.title.toLowerCase().includes(filterValue)
    );
    this.isPanelOpened = filteredItems.length != 0;
    return filteredItems;
  }
}
