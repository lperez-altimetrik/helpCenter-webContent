import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() tableData: any[] = [
    {
      'feature 1': 'Create a Payment Link',
      'feature 2':
        'Start by creating a payment link. This link directs users to the specific payment page where they can complete their transaction.',
      'feature 3':
        'Start by creating a payment link. This link directs users to the specific payment page where they can complete their transaction.',
    },
    {
      'feature 1': 'Copy the QR Code',
      'feature 2':
        'Click "Download" to save the QR code in a preferred format (such as PNG, JPEG, or SVG). This makes it easy to share digitally or in print.',
      'feature 3':
        'Click "Download" to save the QR code in a preferred format (such as PNG, JPEG, or SVG). This makes it easy to share digitally or in print.',
    },
    {
      'feature 1': 'Download the QR Code',
      'feature 2':
        'Start by creating a payment link. This link directs users to the specific payment page where they can complete their transaction.',
      'feature 3':
        'Start by creating a payment link. This link directs users to the specific payment page where they can complete their transaction.',
    },
    {
      'feature 1': 'Share or Display the QR Code',
      'feature 2':
        'You can now add the QR code to invoices, emails, or your website. Customers simply scan the code with their mobile device to be redirected to the payment page, enabling quick and easy payment.',
      'feature 3':
        'You can now add the QR code to invoices, emails, or your website. Customers simply scan the code with their mobile device to be redirected to the payment page, enabling quick and easy payment.',
    },
    {
      'feature 1': 'Download the QR Code',
      'feature 2':
        'Start by creating a payment link. This link directs users to the specific payment page where they can complete their transaction.',
      'feature 3':
        'Start by creating a payment link. This link directs users to the specific payment page where they can complete their transaction.',
    },
    {
      'feature 1': 'Share or Display the QR Code',
      'feature 2':
        'You can now add the QR code to invoices, emails, or your website. Customers simply scan the code with their mobile device to be redirected to the payment page, enabling quick and easy payment.',
      'feature 3':
        'You can now add the QR code to invoices, emails, or your website. Customers simply scan the code with their mobile device to be redirected to the payment page, enabling quick and easy payment.',
    },
  ]; // Data for the table
  @Input() columnKeys: string[] = ['feature 1', 'feature 2', 'feature 3']; // Column keys for headers
}
