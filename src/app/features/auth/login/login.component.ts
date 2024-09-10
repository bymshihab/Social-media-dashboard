import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email).subscribe(
      (user) => {
        if (user) {
          // set user informatiomn to localstorage.
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          // Navigate to the user profile or dashboard if login is successful
          this.router.navigate(['/posts']);
        } else {
          this.loginError = true; // Show error message on invalid email
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.loginError = true;
      }
    );
  }
}
