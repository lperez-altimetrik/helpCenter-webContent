import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatButtonModule,MatDividerModule,MatIconModule],
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
