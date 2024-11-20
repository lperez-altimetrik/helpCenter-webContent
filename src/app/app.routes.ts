import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'top-bar-test', component: TopBarComponent},
  { path: 'footer-test', component: FooterComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
