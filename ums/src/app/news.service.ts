import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:9999/news/top-headlines?category=technology';  // URL to your Spring Boot API

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
