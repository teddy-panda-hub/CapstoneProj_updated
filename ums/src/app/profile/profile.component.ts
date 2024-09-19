import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  student: any = {};
  courses: any[] = [];
  studentId: number|null = this.authService.getStudentId()

  constructor(private http: HttpClient, private authService: AuthService, private courseService: CourseService) {}

  ngOnInit(): void {
    const studentId = this.authService.getStudentId(); // Get the student ID from AuthService
    this.http.get<any>(`http://localhost:5555/user/studentprofileDetails/${studentId}`)
      .subscribe(data => {
        this.student = data;
      }, error => {
        console.error('Failed to load student details:', error);
      });

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
        console.log('Courses:', this.courses);
      },
      error => {
        console.error('Error fetching courses', error);
      }
    );
  }
}
