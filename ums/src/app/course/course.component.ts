import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = []; // Courses to display based on search
  searchTerm: string = '';
  studentId: number|null = this.authService.getStudentId();

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.studentId$.subscribe(studentId => {
      this.studentId = studentId;
      if (this.studentId !== null) {
        this.loadCourses();
      }
    });
  }

  private loadCourses(): void {
    this.courseService.getCoursesByStudentId().subscribe(
      data => {
        this.courses = data;
        this.filteredCourses = this.courses;
        // console.log('Courses:', this.courses); // Check data received
      },
      error => {
        console.error('Error fetching courses', error);
      }
    );
  }

  onSearch(): void {
    // console.log('Search Term:', this.searchTerm); // Debugging line to check search term
    if (this.searchTerm) {
      this.filteredCourses = this.courses.filter(course =>
        course.courseName && course.courseName.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCourses = this.courses; // Reset to all courses if search term is empty
    }
    // console.log('Filtered Courses:', this.filteredCourses); // Debugging line to check filtered results
  }
}
