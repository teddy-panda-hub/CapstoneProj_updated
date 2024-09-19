import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private apiUrl = 'http://localhost:7777/books'; // Update with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  searchBooks(query: string = ''): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?query=${query}`);
  }
}
