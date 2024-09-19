import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-professorlogin',
  templateUrl: './professorlogin.component.html',
  styleUrls: ['./professorlogin.component.css']
})
export class ProfessorloginComponent {
  submit(){
    alert("Professor Login Successful")
  }
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }
  login() {
    // this.authService.loginStudent(this.username, this.password).subscribe(
    //   response => {
        this.authService.loginProfessor(this.username, this.password).subscribe(
          response => {
              console.log('Login successful:', response);
              this.router.navigate(['/professordashboard']);
          },
          error => {
              console.error('Login failed:', error);
              this.errorMessage = 'Invalid username or password';
          }
      );
      
        // console.log('Login successful:', response);
        // this.router.navigate(['/dashboard']); // Navigate to the dashboard on success
    //   },
    //   error => {
    //     console.error('Login failed:', error);
    //     this.errorMessage = 'Invalid username or password';
    //   }
    // );
  }
}
