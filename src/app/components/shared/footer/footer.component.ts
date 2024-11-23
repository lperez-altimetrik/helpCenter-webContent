import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private router = inject(Router);

  constructor() {}

  ngOnInit(): void {

  }


}