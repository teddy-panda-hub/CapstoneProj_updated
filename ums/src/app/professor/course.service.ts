import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:5555/user/byCourse';

  constructor(private http: HttpClient) {}

  getStudentsByCourseId(courseId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${courseId}`);
  }
}
