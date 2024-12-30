// src/app/login.component.ts
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h2>Login</h2>
      <form (ngSubmit)="onLogin()">
        <input
          type="text"
          [(ngModel)]="username"
          name="username"
          placeholder="Username"
          required
        />
        <input
          type="password"
          [(ngModel)]="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p *ngIf="loginFailed" class="error">
        Invalid credentials. Please try again.
      </p>
    </div>
  `,
  styles: [
    `
      .error {
        color: red;
      }
    `,
  ],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  onLogin(): void {
    const isLoggedIn = this.authService.login(this.username, this.password);
    if (isLoggedIn) {
      this.router.navigate(['/dashboard'], { replaceUrl: true }).then(() => {
        // Force a full page reload
        window.location.href = '/dashboard';
      });
    } else {
      this.loginFailed = true;
    }
  }
}
