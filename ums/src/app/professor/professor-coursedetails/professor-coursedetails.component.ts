import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-coursedetails',
  templateUrl: './professor-coursedetails.component.html',
  styleUrls: ['./professor-coursedetails.component.css']
})
export class ProfessorCoursedetailsComponent {
  assignments: any[] = [];
  courseId: number = 1; // Replace with the actual courseId
  showAssignments: boolean = false; // Default is showing resources


  toggleView(view: string): void {
    this.showAssignments = view === 'assignments';
  }
  videos: any[] = [];
  courseName: string ="course";

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['courseId'];
      console.log('CourseId2',this.courseId);
      // console.log('Course Name:', this.courseName);
      // Use this.courseName for further logic
    });
    this.getAssignmentsByCourseId(this.courseId);
  }

  assign(){
    const x=this.courseId;
    console.log(x);
    this.router.navigate(['/assignment'], { queryParams: {x} });
  }

  getAssignmentsByCourseId(courseId: number): void {
    this.http.get<any[]>(`http://localhost:5555/assignments/byCourseId/${courseId}`).subscribe(
      (data) => {
        this.assignments = data;
      },
      (error) => {
        console.error('Error fetching assignments', error);
      }
    );
  }

  goToStudents(): void {
    const y=this.courseId;
    console.log("y:",y);
    this.router.navigate(['/students'], { queryParams: {y} });
  }
}
