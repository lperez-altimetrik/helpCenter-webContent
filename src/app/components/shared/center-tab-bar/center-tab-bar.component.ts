import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AppState, DataService } from 'app/services/data.service';
import * as _ from 'lodash';

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
  private helpCenterState = inject(DataService);

  _activeTab: number = 0;

  ngOnInit(): void {
    this._activeTab = this.initialTabIndex;
    this.helpCenterState.getState().subscribe((state: AppState) => {
      this.tabs = state.categoryGroups;
      this._activeTab = _.findIndex(this.tabs, (item) => item === _.get(state, "categoryGroup"));
    });
  }
  onTabClicked(index: number, tab: string) {
    this._activeTab = index;
    this.tabChanged.emit(tab);
  }
}
