import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-center-tab-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './center-tab-bar.component.html',
  styleUrl: './center-tab-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CenterTabBarComponent implements OnInit {
  @Input() tabs: string[] = ['Small Business', 'Enterprise', 'Partners'];
  @Input() initialTabIndex = 0;
  @Output() tabChanged = new EventEmitter();

  _activeTab: number = 0;

  ngOnInit(): void {
    this._activeTab = this.initialTabIndex;
  }
  onTabClicked(index: number) {
    this._activeTab = index;
    this.tabChanged.emit(index);
  }
}
