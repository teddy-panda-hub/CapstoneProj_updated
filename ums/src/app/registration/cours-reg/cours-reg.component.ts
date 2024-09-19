import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Course {
  // courseID: number;
  courseName: string;
  description: string;
  imageUrl: string; // Note: Adjust the name if it’s different in your backend
  professorId: number;
  semester: string;
}

@Component({
  selector: 'app-cours-reg',
  templateUrl: './cours-reg.component.html',
  styleUrls: ['./cours-reg.component.css']
})
export class CoursRegComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      // courseID: ['', Validators.required],
      courseName: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      professorId: ['', Validators.required],
      semester: ['', Validators.required]
    });
  }

  submitRegistration() {
    console.log('Form Valid:', this.registrationForm.valid);
    console.log('Form Errors:', this.registrationForm.errors);
    console.log('Form Value:', this.registrationForm.value);

    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Call the Spring Boot backend to register the student
      this.http.post('http://localhost:5555/courses/addCourse', formData).subscribe(
        response => {
          console.log('Registration successful', response);
          alert('Registration successful!');
          this.router.navigate(['/admindashboard']);
        },
        error => {
          console.error('Error occurred during registration', error);
          alert('Registration failed!');
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}