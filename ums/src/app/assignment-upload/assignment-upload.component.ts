import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from './assignment.service';
import { GeminiService } from '../gemini.service';

@Component({
  selector: 'app-assignment-upload',
  templateUrl: './assignment-upload.component.html',
  styleUrls: ['./assignment-upload.component.css']
})
export class AssignmentUploadComponent {
  assignmentId!: number;
  fileName!: string;
  deadline!: string;
  question: string = "What is the moral of the story provided?"; // Assuming question is provided
  answer: string = ''; // For the textarea input
  evaluationResult: string = ''; // Store the evaluation result
  assignment: any = {}; // Store assignment details
  evaluationScore: number | null = null; // Store the evaluation score

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private sanitizer: DomSanitizer,
    private geminiService: GeminiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.assignmentId = +params['id']; // Get assignment ID from route
    });

    this.route.queryParams.subscribe(queryParams => {
      this.fileName = queryParams['fileName'];
      this.deadline = queryParams['deadline'];
      this.loadAssignmentDetails(this.assignmentId);
    });
  }

  loadAssignmentDetails(id: number) {
    this.assignmentService.getAssignmentById(id).subscribe((data: any) => {
      this.assignment = data;
      // Use this.fileName and this.deadline as needed
    });
  }

  viewAssignmentFile() {
    this.assignmentService.viewFileById(this.assignmentId).subscribe((response: Blob) => {
      const fileUrl = URL.createObjectURL(response);
      window.open(fileUrl);
    });
  }

  downloadAssignmentFile() {
    this.assignmentService.downloadFileById(this.assignmentId).subscribe((response: Blob) => {
      const fileUrl = URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = `assignment_${this.assignmentId}.pdf`;
      link.click();
    });
  }
  // submitAssignment() {
  //   console.log(this.answer)
  //   if (this.answer.trim()) {
  //     this.geminiService.evaluateAssignment(this.question, this.answer).subscribe(
  //       (result) => {
  //         this.evaluationResult = result.candidates[0].content.parts[0].text; // Assuming the response structure is similar
  //       },
  //       (error) => {
  //         console.error('Error evaluating assignment:', error);
  //       }
  //     );
  //   }
  // }

  submitAssignment() {
    if (this.answer.trim()) {
      this.geminiService.evaluateAssignment(this.question, this.answer).subscribe({
        next: (response) => {
          const score = parseInt(response, 10); // Convert response to a number
          if (!isNaN(score)) {
            this.evaluationScore = score; // Store the parsed score
          }
        },
        error: (err) => console.error('Evaluation error:', err)
      });
    }
  }
  
}
