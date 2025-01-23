// src/app/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavigateService } from 'app/services/navigate.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const navigateService = inject(NavigateService);

  if (authService.isLoggedIn()) {
    return true; // Allow navigation if logged in
  }

  // Redirect to the login page if not logged in
  navigateService.navigateTo('/login');
  return false; // Prevent navigation
};
