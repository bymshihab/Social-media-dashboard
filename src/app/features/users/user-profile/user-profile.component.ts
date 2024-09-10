import { Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import * as L from 'leaflet'; // For Leaflet map

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  loggedInUser: any;
  map: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Check if code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Only run this code in the browser (not on the server)
      this.loggedInUser = JSON.parse(
        localStorage.getItem('loggedInUser') || '{}'
      );

      // Initialize the map after making sure it's a browser
      this.initializeMap();
    }
  }

  initializeMap(): void {
    const lat = parseFloat(this.loggedInUser.address.geo.lat);
    const lng = parseFloat(this.loggedInUser.address.geo.lng);

    // Create the map and set the view to the user's coordinates
    this.map = L.map('map').setView([lat, lng], 13); // 13 is the zoom level

    // Add a tile layer to the map (from OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Add a marker at the user's location
    L.marker([lat, lng]).addTo(this.map).bindPopup('User Location').openPopup();
  }
}
