import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
    TitleComponent,
    CenterTabBarComponent,
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() loginLabel = 'Login';
  @Input() title = "Need Help? Let's find it together!";
  @Input() tabs = ['Small Buisness', 'Enterprise', 'Partners'];

  @Input() chipLabels: string[] = [
    'Get Started!',
    'Wallet',
    'Payment Link',
    'Disputes',
    'Payments',
    'My Account',
  ];

  private navigateService = inject(NavigateService);
  private authSubscription!: Subscription;
  isLoggedIn = false;
  logoPath = 'assets/icons/top-bar/Optic_Logo_White.svg';

  _query: FormControl = new FormControl('');



  constructor(private authService: AuthService) {
    this.authSubscription = new Subscription();
  }

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        console.log('Auth state changed: ', this.isLoggedIn);
      }
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
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

  }

  onLang() {
    //Language/region logic here
    console.log('language button clicked');
  }
}
