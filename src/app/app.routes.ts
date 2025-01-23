import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'articles/:articleId',
    component: ArticleComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
