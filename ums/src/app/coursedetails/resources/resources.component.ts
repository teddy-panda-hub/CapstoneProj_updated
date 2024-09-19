import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/youtube.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  videos: any[] = [];
  courseName: string ="course";

  constructor(private route: ActivatedRoute, private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    // Retrieve the course name from query parameters
    this.route.queryParams.subscribe(params => {
      this.courseName = params['courseName'];
      // console.log('Course Name:', this.courseName);
      // Use this.courseName for further logic
      this.fetchVideos(this.courseName);
    });
  }

  // Define the fetchVideos method
  fetchVideos(courseName: string): void {
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
