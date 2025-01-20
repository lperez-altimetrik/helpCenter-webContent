// src/app/auth.service.ts
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  private router = inject(Router);
  private cookieService = inject(CookieService);

  private _isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this._isLoggedInSubject.asObservable();

  login(username: string, password: string): boolean {
    if (username === 'root' && password === 'root') {
      this.cookieService.set(this.TOKEN_KEY, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb2NrVXNlcklkIiwicm9sZXMiOlsiVVNFUiJdLCJleHAiOjE3NjkwNTkyMDB9.GSfFu2Km1nDvv6rxkhA88LfjPrnfMo_SdW2dUiEpicY', 1);
      this._isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.cookieService.delete(this.TOKEN_KEY);
    this._isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const isLoggedIn = this.cookieService.check(this.TOKEN_KEY);

    this._isLoggedInSubject.next(isLoggedIn);

    return isLoggedIn;
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY);
  }
}
