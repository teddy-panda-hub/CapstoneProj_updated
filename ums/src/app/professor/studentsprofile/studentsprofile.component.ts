import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-studentsprofile',
  templateUrl: './studentsprofile.component.html',
  styleUrls: ['./studentsprofile.component.css']
})
export class StudentsprofileComponent {
  student: any = {};
  courses: any[] = [];
  studentId: number|null = this.authService.getStudentId()

  constructor(private http: HttpClient, private authService: AuthService, private courseService: CourseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.studentId = params['studentId'];
      console.log('StudentId',this.studentId);
      // console.log('Course Name:', this.courseName);
      // Use this.courseName for further logic
    });
    this.http.get<any>(`http://localhost:5555/user/studentprofileDetails/${this.studentId}`)
      .subscribe(data => {
        this.student = data;
        console.log(this.student);
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
