import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  private router = inject(Router);

  constructor() {}

  ngOnInit(): void {

  }

  onLogin() {
    //Login logic here 
    //link to login page
    this.router.navigate(['/dashboard']);
    console.log('login button clicked');
  }

  onLang() {
    //Language/region logic here
    console.log('language button clicked');
  }

}
