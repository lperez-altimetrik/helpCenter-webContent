import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { ContactUsComponent } from "../shared/contact-us/contact-us.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ContactUsComponent, FooterComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent { }
