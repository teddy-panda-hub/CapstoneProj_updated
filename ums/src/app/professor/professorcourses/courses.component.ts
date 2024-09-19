import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: any[] = [];
  professorId: number|null = this.authService.getStudentId()
  filteredCourses: any[] = []; // Courses to display based on search
  searchTerm: string = '';

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.professorId$.subscribe(professorId => {
      this.professorId = professorId;
      if (this.professorId !== null) {
        this.loadCourses();
      }
    });
  }

  private loadCourses(): void {
    this.courseService.getCoursesByProfessorId().subscribe(
      data => {
        this.courses = data;
        this.filteredCourses = this.courses;
        console.log('Courses:', this.courses);
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
