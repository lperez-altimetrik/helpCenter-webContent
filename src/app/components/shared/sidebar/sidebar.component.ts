import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, MatListModule, MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public businessOptions: any[] = [
    {option: "Small business"},
    {option: "Enterprise"},
    {option: "Partners"}
  ];

  public menuSections: any[] = [
    {
      title: "News & Updates",
      sections: [
        {
          title: "News & Updates",
          iconUrl: "newspaper",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        }  
      ]
    },
    {
      title: "Products",
      sections: [
        {
          title: "Payments",
          iconUrl: "attach_money",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Wallet",
          iconUrl: "account_balance_wallet",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Paysafe Card",
          iconUrl: "credit_card",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        }  
      ]
    },
    {
      title: "Topics",
      sections: [
        {
          title: "Getting started",
          iconUrl: "arrow_upward",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "My account",
          iconUrl: "person",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Disputes",
          iconUrl: "error",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Analytics",
          iconUrl: "trending_up",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Transactions",
          svgUrl: "./../../../../assets/icons/common/chip-extraction-icon.svg",
          iconUrl: "chip_extraction",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Fees & Pricing",
          iconUrl: "receipt_long",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ] 
        }
      ]
    },
    {
      title: "Resources",
      isLastSection: true,
      sections: [
        {
          title: "Glosary",
          iconUrl: "receipt",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "FAQs",
          iconUrl: "question_mark",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Trending Articles",
          iconUrl: "arrow_outward",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        }  
      ]
    },
  ];

  public businessPanelOpened: boolean = false;

  public selectedBusiness: any = this.businessOptions[0];

  public currentActiveItem: any = null;

  

  public onMenuItemClick(event: any){
    if (this.currentActiveItem !== null){
      this.currentActiveItem.classList.remove('menu-element-active');
    }
    event.target.parentElement.classList.add('menu-element-active');
    this.currentActiveItem = event.target.parentElement;
  }
  
  public changeOption (option: any){
    this.selectedBusiness = option;
    this.businessPanelOpened = !this.businessPanelOpened ;
  }
}
