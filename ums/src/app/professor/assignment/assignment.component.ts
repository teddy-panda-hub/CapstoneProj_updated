import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  assignmentId!: number;
  title!: string;
  courseId!: number;
  deadline: Date=new Date();
  selectedFile: File | null = null;

  constructor(private http: HttpClient,private route: ActivatedRoute) {}

  ngOnInit(){
    // Retrieve the course name from query parameters
    this.route.queryParams.subscribe(params => {
      this.courseId = params['x'];
      console.log('CourseId3',this.courseId);
      // console.log('Course Name:', this.courseName);
      // Use this.courseName for further logic
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;  // Type assertion to HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload(assignmentId: number, title: string, deadline: Date | null): void {
    const x=this.courseId;
    console.log(x);
    if (!this.selectedFile || !this.title || !this.assignmentId || !x || !this.deadline || this.selectedFile==null) {
      console.error('Please provide all necessary details before uploading.');
      return;
    }
  
    // Ensure deadline is a Date object
    if (this.deadline instanceof Date && !isNaN(this.deadline.getTime())) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('title', this.title);
      formData.append('id', this.assignmentId.toString());
      formData.append('courseId', x.toString());
      formData.append('deadline', this.deadline.toISOString());

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
  
  
      this.http.post('http://localhost:5555/assignments/upload', formData, { responseType: 'json' })
  .subscribe(response => {
    console.log('Upload successful', response);
    alert("Upload Successful");
  }, error => {
    console.error('Upload failed', error);
  });
    } else {
      console.error('Deadline is not a valid Date.');
    }
  }
  onDeadlineChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.deadline = new Date(input.value); // Convert to Date object
    }
  }
  
}
