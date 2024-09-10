import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router'; // Import the Event and NavigationEnd types
import { filter } from 'rxjs/operators'; // Import the filter operator

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'social-media-dashboard';
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {
    // Listen to router events
    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        ) // Filter only NavigationEnd events
      )
      .subscribe((event: NavigationEnd) => {
        console.log('Navigating to:', event.url); // Add this to check the URL
        this.showHeaderFooter = event.url !== '/login';
        console.log('Show header/footer:', this.showHeaderFooter); // Check if it’s set correctly
      });
  }
}
