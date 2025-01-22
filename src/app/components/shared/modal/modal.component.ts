import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title = 'Title';
  @Input() subtitle = 'Subtitle';
  @Input() content =
    'We give ambitious businesses their launchpad through safe and secure online payment solutionsWe give ambitious businesses their launchpad through safe and secure online payment solutions';
  @Input() primaryButton = 'Send';
  @Input() secondaryButton = 'No, Thanks';

  showModal = true;

  closeModal() {
    this.showModal = false;
  }
}
