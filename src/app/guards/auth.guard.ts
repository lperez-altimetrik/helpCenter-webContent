// src/app/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Allow navigation if logged in
  }

  // Redirect to the login page if not logged in
  router.navigate(['/login']);
  return false; // Prevent navigation
};