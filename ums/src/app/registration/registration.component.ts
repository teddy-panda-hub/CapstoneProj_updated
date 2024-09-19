import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      studentName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Assuming 10-digit mobile number
      gender: ['', Validators.required],
      address:['', Validators.required],
      password: ['', Validators.required],
      courseIds: [[]]  // Initialize as empty array
    });
  }


  submitRegistration() {
    console.log('Form Valid:', this.registrationForm.valid);
    console.log('Form Errors:', this.registrationForm.errors);
    console.log('Form Value:', this.registrationForm.value);

    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Call the Spring Boot backend to register the student
      this.http.post('http://localhost:5555/user/registerstudent', formData).subscribe(
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
  submit(){
    alert("Registration Successful")
  }
}
