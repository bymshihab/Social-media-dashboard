import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  logout(): void {
    localStorage.removeItem('loggedInUser'); // Clear the user data
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
