import { Component, OnInit, OnDestroy, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { DragScrollDirective } from './drag-scroll.directive';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { PillBarComponent } from '../pill-bar/pill-bar.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    MatChipsModule,
    PillBarComponent,
    SearchBarComponent,
    MatInputModule,
    MatFormFieldModule,
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private authSubscription!: Subscription;
  isLoggedIn = false;
  logoPath = 'assets/icons/top-bar/Optic_Logo_White.svg';

  _query: FormControl = new FormControl('');

  chipLabels: string[] = [
    //make input parameter for this
    'Get Started!',
    'Wallet',
    'Payment Link',
    'Disputes',
    'Payments',
    'My Account',
  ];

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

  toggleLogin() {
    // TEST FUNCTION, DELETE
    this.isLoggedIn = !this.isLoggedIn;
  }

  handlePillEvent(message: string) {
    if (message === this._query.value) this._query = new FormControl('');
    else this._query = new FormControl(message);
  }

  onLogin() {
    //Login logic here
    //link to login page

    //this.router.navigate(['/dashboard']);
    console.log('login button clicked');
    //once logged in

    this.toggleLogin(); // DELETE
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

    this.toggleLogin(); // DELETE
  }

  onLang() {
    //Language/region logic here
    console.log('language button clicked');
  }
}
