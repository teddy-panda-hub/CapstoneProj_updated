import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface Professor {
  professorId: number;
  professorname: string;
  email: string;
  experience: number;
  gender: string;
  mobile: string;
  degreecompleted: string;
}


@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent {
  professors: Professor[] = [];  // Professor array to hold the list

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Professor[]>('http://localhost:5555/user/professorlist').subscribe(
      data => {
        this.professors = data;
      },
      error => {
        console.error('Error fetching professor list', error);
      }
    );
  }
}
