import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profregistration',
  templateUrl: './profregistration.component.html',
  styleUrls: ['./profregistration.component.css']
})
export class ProfregistrationComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      professorName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      degreecompleted: ['', Validators.required],
      department: ['', Validators.required],
      experience: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Assuming 10-digit mobile number
      gender: ['', Validators.required],
      password: ['', Validators.required],
      courseIds: [[]]  // Initialize as empty array
    });
  }

  submitRegistration(): void {
    // console.log('Form Valid:', this.registrationForm.valid);
    // console.log('Form Errors:', this.registrationForm.errors);
    // console.log('Form Value:', this.registrationForm.value);
  
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
  
      // Call the Spring Boot backend to register the professor
      this.http.post('http://localhost:5555/user/registerprofessor', formData, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(
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
      this.registrationForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
      alert('Please fill out the form correctly.');
    }
  }  
}
