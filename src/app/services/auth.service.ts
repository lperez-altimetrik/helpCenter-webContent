// src/app/auth.service.ts
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  private router = inject(Router);
  private cookieService = inject(CookieService);

  login(username: string, password: string): boolean {
    if (username === 'root' && password === 'root') {
      this.cookieService.set(this.TOKEN_KEY, 'mock-token', 1);
      return true;
    }
    return false;
  }

  logout(): void {
    this.cookieService.delete(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.cookieService.check(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY);
  }
}
