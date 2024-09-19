import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profcoursecard',
  templateUrl: './profcoursecard.component.html',
  styleUrls: ['./profcoursecard.component.css']
})
export class ProfcoursecardComponent {
  @Input() course: any; 
  // studentId: number|null = this.authService.getStudentId();
  courseId: number = 1;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['courseId'];
      console.log('CourseId1',this.courseId);
      // console.log('Course Name:', this.courseName);
      // Use this.courseName for further logic
    });
  }

  assign(courseId: number){
    this.router.navigate(['/professor-coursedetails'], { queryParams: {courseId } });
  }
}
