import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface Course {
  courseId: number;
  courseName: string;
  semester: string;
  professorId: number;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: Course[] = [];  // Course array to hold the list

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Course[]>('http://localhost:5555/courses/getAll').subscribe(
      data => {
        this.courses = data;
      },
      error => {
        console.error('Error fetching course list', error);
      }
    );
  }
}