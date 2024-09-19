import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private baseUrl = 'http://localhost:5555/user';

  constructor(private http: HttpClient) {}

  getProfessorProfile(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/professorprofileDetails/${id}`);
  }
}
