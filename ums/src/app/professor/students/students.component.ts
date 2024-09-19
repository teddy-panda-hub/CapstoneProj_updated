import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students!: any[];
  courseId!: number;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the courseId from the query parameters
    this.route.queryParams.subscribe(params => {
      this.courseId = params['y'];
      console.log('CourseId:', this.courseId);

      // Use courseId to fetch students
      if (this.courseId) {
        this.getStudentsByCourseId(this.courseId);
      }
    });
  }

  getStudentsByCourseId(courseId: number): void {
    this.courseService.getStudentsByCourseId(courseId).subscribe(data => {
      this.students = data;
    });
  }

  goToStudentProfile(studentId: number){

    this.router.navigate(['/studentsprofile'], { queryParams: {studentId} });
  }
}
