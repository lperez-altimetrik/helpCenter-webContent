import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() links = [
    'Cookie Settings',
    'Contact Us',
    'Privacy Policy',
    'Regulatory Disclosures',
  ];
  @Input() disclaimer: string =
    'Copyright © 2024 Paysafe Holdings UK Limited. All rights reserved. Paysafe Financial Services Limited (FRN:900015)';
  private router = inject(Router);

  constructor() {}

  ngOnInit(): void {}
}
