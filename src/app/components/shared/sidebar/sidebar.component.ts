import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {
  IBusinessOption,
  ISidebarSection,
} from 'app/interfaces/input-data.interface';
import { AppState, DataService } from 'app/services/data.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() businessOptions: IBusinessOption[] = [];
  @Input() menuDataSection: any = {};
  @Output() renderTemplate = new EventEmitter<any>();


  @Input() menuSections: ISidebarSection[] = [
    {
      title: 'News & Updates',
      sections: [
        {
          title: 'News & Updates',
          iconUrl: 'newspaper',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
      ],
    },
    {
      title: 'Products',
      sections: [
        {
          title: 'Payments',
          iconUrl: 'attach_money',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'Wallet',
          iconUrl: 'account_balance_wallet',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'Paysafe Card',
          iconUrl: 'credit_card',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
      ],
    },
    {
      title: 'Topics',
      sections: [
        {
          title: 'Getting started',
          iconUrl: 'arrow_upward',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'My account',
          iconUrl: 'person',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'Disputes',
          iconUrl: 'error',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'Analytics',
          iconUrl: 'trending_up',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'Transactions',
          iconUrl: 'chip_extraction',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'Fees & Pricing',
          iconUrl: 'receipt_long',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
      ],
    },
    {
      title: 'Resources',
      isLastSection: true,
      sections: [
        {
          title: 'Glosary',
          iconUrl: 'receipt',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'FAQs',
          iconUrl: 'question_mark',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
        {
          title: 'Trending Articles',
          iconUrl: 'arrow_outward',
          menuItems: [
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', url: '#' },
            { title: 'Link 3', url: '#' },
          ],
        },
      ],
    },
  ];

  @Input() businessPanelOpened: boolean = false;

  @Input() selectedBusiness: any = "";

  ngOnInit() {
    this.helpCenterState.getState().subscribe((state: AppState) => {
      this.selectedBusiness = state.categoryGroup;
    });
  }

  public currentActiveItem: any = null;
  private helpCenterState = inject(DataService);

  public onMenuItemClick(event: any, articleUrl: any) {
    let eventTarget = event.target;
    if (event.target.childElementCount == 1) {
      eventTarget = eventTarget.firstChild;
    }
    if (this.currentActiveItem !== null) {
      this.currentActiveItem.classList.remove('menu-element-active');
    }
    eventTarget.parentElement.classList.add('menu-element-active');
    this.currentActiveItem = eventTarget.parentElement;
    this.renderTemplate.emit(articleUrl);
  }

  public changeOption(option: any) {
    this.selectedBusiness = option.option;
    this.helpCenterState.updateState({ categoryGroup: this.selectedBusiness });
    this.businessPanelOpened = !this.businessPanelOpened;
    this.menuSections = this.menuDataSection[this.selectedBusiness];
  }
}
