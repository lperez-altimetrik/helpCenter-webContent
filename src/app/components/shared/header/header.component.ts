import { Component, OnInit, OnDestroy, Input, inject, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../services/auth.service';
import { NavigateService } from 'app/services/navigate.service';
import { Subscription } from 'rxjs';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { PillBarComponent } from '../pill-bar/pill-bar.component';
import { TitleComponent } from '../title/title.component';
import { CenterTabBarComponent } from '../center-tab-bar/center-tab-bar.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { AppState, DataService } from 'app/services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    PillBarComponent,
    SearchBarComponent,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    TitleComponent,
    CenterTabBarComponent,
    MatSelectModule
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() loginLabel = 'Login';
  @Input() title = "Need Help? Let's find it together!";
  @Input() tabs = ['Small Buisness', 'Enterprise', 'Partners'];
  private helpCenterState = inject(DataService);

  @Input() chipLabels: string[] = [
    'Get Started!',
    'Wallet',
    'Payment Link',
    'Disputes',
    'Payments',
    'My Account',
  ];
  @Input() expanded = false;

  private navigateService = inject(NavigateService);
  private authSubscription!: Subscription;
  public category_group: string = "";
  public initialTabIndex: number = 0;
  isLoggedIn = false;
  logoPath = 'assets/icons/top-bar/Optic_Logo_White.svg';

  _query: FormControl = new FormControl('');

  languages: any[] = [
    "English",
    "Spanish",
    "German",
    "French",
    "Chinese",
    "Japanese"
  ];
  selectedLanguage: string = this.languages[0];
  @Output() tabChanged = new EventEmitter();
  @ViewChild(MatSelect) matSelect!: MatSelect;
  @ViewChild(MatMenu) matMenu!: MatMenu;

  constructor(private authService: AuthService) {
    this.authSubscription = new Subscription();
  }

  toggleLogin() {
    // TEST FUNCTION, DELETE
    this.isLoggedIn = !this.isLoggedIn;
    console.log(this.tabs)
    this.initialTabIndex = _.findIndex(this.tabs, (item) => item === this.category_group);
  }

  updateLanguage(option: string) {
    this.helpCenterState.updateState({ language: option })
    this.tabChanged.emit(option);
  }

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        console.log('Auth state changed: ', this.isLoggedIn);
      }
    );
    this.helpCenterState.getState().subscribe((state: AppState) => {
      this.selectedLanguage = state.language;
      this.category_group = state.categoryGroup;
      this.initialTabIndex = _.findIndex(this.tabs, (item) => item === this.category_group);
    })
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  setCategoryGroup(categoryGroup: string): void {
    if (_.isNil(categoryGroup)) {
      return;
    }
    this.helpCenterState.updateState({ categoryGroup: categoryGroup })
    this.category_group = categoryGroup;
    this.tabChanged.emit(this.category_group);
  }

  handlePillEvent(message: string) {
    if (message === this._query.value) this._query = new FormControl('');
    else this._query = new FormControl(message);
  }

  onLogin() {
    //Login logic here

    this.navigateService.navigateTo('/login');
  }

  onMenu() {
    //Menu logic here
    console.log('menu button clicked');
  }

  onProfile() {
    //Profile logic here
    console.log('profile button clicked');
  }

  onSearch() {
    //Search logic here
    console.log('search button clicked');
    this.toggleLogin();
  }

  openSelect() {
    this.matSelect.open();
  }


}
