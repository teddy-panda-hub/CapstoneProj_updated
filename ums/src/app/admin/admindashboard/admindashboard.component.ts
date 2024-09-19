import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course-list/course-list.component';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  // Replace with your backend URL
  private baseUrl = 'http://localhost:5555';

  totalStudents: number = 0;
  totalProfessors: number = 0;
  totalCourses: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTotalStudents();
    this.fetchTotalProfessors();
    this.fetchTotalCourses();
  }

  fetchTotalStudents() {
    this.http.get<number[]>(`${this.baseUrl}/user/gettotalstudents`).subscribe(data => {
      this.totalStudents = data[0];
    });
  }

  fetchTotalProfessors() {
    this.http.get<number[]>(`${this.baseUrl}/user/gettotalprofessors`).subscribe(data => {
      this.totalProfessors = data[0];
    });
  }

  fetchTotalCourses() {
    this.http.get<Course[]>(`${this.baseUrl}/courses/getAll`).subscribe(data => {
      this.totalCourses = data.length;
    });
  }
}
