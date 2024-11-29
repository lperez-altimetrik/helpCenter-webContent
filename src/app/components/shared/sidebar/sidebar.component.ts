import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
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
          iconUrl: "",
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
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Wallet",
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Paysafe Card",
          iconUrl: "",
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
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "My account",
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Disputes",
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Analytics",
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Transactions",
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Fees & Pricing",
          iconUrl: "",
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
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "FAQs",
          iconUrl: "",
          menuItems: [
            {title: "Link 1", url: "#"},
            {title: "Link 2", url: "#"},
            {title: "Link 3", url: "#"}
          ]
        },
        {
          title: "Trending Articles",
          iconUrl: "",
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
