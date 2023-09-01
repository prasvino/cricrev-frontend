// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '../commonservice/apiservice';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,private apiService:ApiService
  ) {}

  login(username: string, password: string) {
   // Send a POST request to your backend to authenticate
   return this.apiService.post<any>('login', { username, password }).pipe(
    map((response: any) => {
      // Assuming your server returns a 'token' field in the response
      if (response && response.token) {
        // Store the JWT token in local storage
        localStorage.setItem('jwt_token', response.token);
      }
      return response; // Return the response to the caller
    })
  );
  }

  logout() {
    // Log out logic
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
