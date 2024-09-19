import { Component } from '@angular/core';
import { ShowassignmentService } from 'src/app/showassignment.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  assignments: any[] = [];

  constructor(private assignmentService: ShowassignmentService) {}

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.assignmentService.getAllAssignments().subscribe(
      (data) => {
        this.assignments = data;
      },
      (error) => {
        console.error('Error fetching assignments', error);
      }
    );
  }
}
