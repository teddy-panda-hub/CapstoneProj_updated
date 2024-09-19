import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{
  @Input() course: any; 
  // studentId: number|null = this.authService.getStudentId();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fetchVideos(courseName: string, courseId: number): void {
    this.router.navigate(['/coursedetails'], { queryParams: {courseName, courseId } });
    console.log('Fetching videos for course in course card:', courseName);
  }
}
