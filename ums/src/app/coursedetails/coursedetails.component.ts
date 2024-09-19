import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../youtube.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit{
  // showAssignments = false;
  assignments: any[] = [];
  courseId: number = 1; // Replace with the actual courseId
  showAssignments: boolean = false; // Default is showing resources

  // resources = ['Resource 1', 'Resource 2', 'Resource 3', 'Resource 4','Resource 5', 'Resource 6'];
  // assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4'];

  toggleView(view: string): void {
    this.showAssignments = view === 'assignments';
  }
  videos: any[] = [];
  courseName: string ="course";

  constructor(private route: ActivatedRoute, private youtubeService: YoutubeService, private http: HttpClient) { }

  ngOnInit(): void {
    // Retrieve the course name from query parameters
    this.route.queryParams.subscribe(params => {
      this.courseName = params['courseName'];
      this.courseId = params['courseId'];
      console.log('CourseId',this.courseId);
      // console.log('Course Name:', this.courseName);
      // Use this.courseName for further logic
      this.fetchVideos(this.courseName, this.courseId);
    });
    this.getAssignmentsByCourseId(this.courseId);
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

  // Define the fetchVideos method
  fetchVideos(courseName: string, courseId:number): void {
    this.youtubeService.getVideos(courseName).subscribe(
      (response) => {
        this.videos = response; // Assuming response structure fits your model
      },
      (error) => {
        console.error('Error fetching videos:', error);
      }
    );
  }
}
