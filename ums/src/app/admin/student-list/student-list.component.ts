import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Student {
  studentId: number;
  studentName: string;
  gender: string;
  email: string;
  mobile: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent {
  students: Student[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Student[]>('http://localhost:5555/user/studentlist').subscribe(
      data => {
        this.students = data;
      },
      error => {
        console.error('Error fetching student list', error);
      }
    );
  }
}
