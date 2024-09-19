import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  private baseUrl = `http://localhost:5555/courses`; // Adjust the URL as needed

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCoursesByStudentId(): Observable<any[]> {
    const studentId = localStorage.getItem("Id");
    console.log(studentId);
    if (studentId === null) {
      throw new Error('Student ID is not available');
    }
    console.log(`${this.baseUrl}/student/${studentId}`);
    return this.http.get<any[]>(`${this.baseUrl}/student/${studentId}`);
  }  

  getCoursesByProfessorId(): Observable<any[]> {
    const professorId = localStorage.getItem("profId");
    console.log(professorId);
    if (professorId === null) {
      throw new Error('Professor ID is not available');
    }
    console.log(`${this.baseUrl}/professor/${professorId}`);
    return this.http.get<any[]>(`${this.baseUrl}/professor/${professorId}`);
  } 
}