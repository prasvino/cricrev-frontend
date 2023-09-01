import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  private getRequestOptions(): { headers: HttpHeaders } {
    // Add headers or authentication tokens if needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return { headers };
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, this.getRequestOptions());
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, this.getRequestOptions());
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data, this.getRequestOptions());
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, this.getRequestOptions());
  }
}
