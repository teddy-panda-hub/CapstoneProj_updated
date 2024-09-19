import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private baseUrl = 'http://localhost:8888/api/videos'; // Adjust this URL if necessary

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?query=${query}`);
  }
}
