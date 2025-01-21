import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rich-text',
  standalone: true,
  imports: [],
  templateUrl: './rich-text.component.html',
  styleUrl: './rich-text.component.scss'
})
export class RichTextComponent {
  @Input() text = "Default text";
}
