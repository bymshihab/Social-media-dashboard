import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint

  constructor(private http: HttpClient) {}

  login(email: string): Observable<any> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map((users) => {
        return users.find((user) => user.email === email);
      })
    );
  }
}
