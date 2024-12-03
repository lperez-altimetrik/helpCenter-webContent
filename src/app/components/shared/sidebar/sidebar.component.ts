import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, MatListModule],
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
}
