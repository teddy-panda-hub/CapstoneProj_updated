import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CourseService } from 'src/app/course.service';
import { ProfessorService } from 'src/app/professor.service';

@Component({
  selector: 'app-professorprofile',
  templateUrl: './professorprofile.component.html',
  styleUrls: ['./professorprofile.component.css']
})
export class ProfessorprofileComponent {
  professor: any;
  courses: any[] = [];
  professorId: number|null = this.authService.getProfessorId()

  constructor(private http: HttpClient, private professorService: ProfessorService, private authService: AuthService, private courseService: CourseService) {}

  ngOnInit(): void {
    // this.professorService.getProfessorProfile(this.professorId).subscribe(data => {
    //   this.professor = data;
    // });
    const professorId = this.authService.getProfessorId(); // Get the student ID from AuthService
    this.http.get<any>(`http://localhost:5555/user/professorprofileDetails/${professorId}`)
      .subscribe(data => {
        this.professor = data;
      }, error => {
        console.error('Failed to load student details:', error);
      });

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
        console.log('Courses:', this.courses);
      },
      error => {
        console.error('Error fetching courses', error);
      }
    );
  }
}
