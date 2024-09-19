import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5555'; // Replace with your backend URL
  
  private studentIdSubject = new BehaviorSubject<number | null>(null);
  private professorIdSubject = new BehaviorSubject<number | null>(null);
  private loggedIn = new BehaviorSubject<boolean>(false);
  studentId$ = this.studentIdSubject.asObservable();
  professorId$ = this.professorIdSubject.asObservable();

  constructor(private http: HttpClient) { }

  loginStudent(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user/loginstudent`, { username, password })
      .pipe(
        tap(response => {
          // Assuming response contains studentId
          localStorage.setItem("Id",response);
          this.studentIdSubject.next(response);
        })
      );
  }

  getStudentId(): number | null {
    return this.studentIdSubject.value;
  }

  loginProfessor(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user/loginprofessor`, { username, password })
      .pipe(
        tap(response => {
          // Assuming response contains studentId
          localStorage.setItem("profId",response);
          this.professorIdSubject.next(response);
        })
      );
  }

  getProfessorId(): number | null {
    return this.professorIdSubject.value;
  }
}