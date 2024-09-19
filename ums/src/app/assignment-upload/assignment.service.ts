import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private baseUrl = 'http://localhost:5555/assignments'; // Adjust accordingly

  constructor(private http: HttpClient) {}

  getAssignmentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/byCourseId/${id}`);
  }

  viewFileById(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/showAssignmentFileById/${id}`, { responseType: 'blob' });
  }

  downloadFileById(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download/${id}`, { responseType: 'blob' });
  }
}
