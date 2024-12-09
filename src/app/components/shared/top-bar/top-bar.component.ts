import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatButtonModule,MatDividerModule,MatIconModule,CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})


export class TopBarComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private authSubscription!: Subscription;
  isLoggedIn = false;
  logoPath = "assets/icons/top-bar/Optic_Logo_White.svg";


  constructor(private authService: AuthService) {
    this.authSubscription = new Subscription();
  }

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        console.log('Auth state changed: ',this.isLoggedIn);
      }
    );
  }

  ngOnDestroy() {
    if (this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  toggleLogin() { // TEST FUNCTION, DELETE
    this.isLoggedIn = !this.isLoggedIn;
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
