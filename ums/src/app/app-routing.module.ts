import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfessorloginComponent } from './professor/professorlogin/professorlogin.component';
import { DashboardComponent } from './studentdashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ResourcesComponent } from './coursedetails/resources/resources.component';
import { AssignmentComponent } from './professor/assignment/assignment.component';
import { AssignmentUploadComponent } from './assignment-upload/assignment-upload.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { CoursesComponent } from './professor/professorcourses/courses.component';
import { ProfessordashboardComponent } from './professor/professordashboard/professordashboard.component';
import { ProfessorCoursedetailsComponent } from './professor/professor-coursedetails/professor-coursedetails.component';
import { ProfessorprofileComponent } from './professor/professorprofile/professorprofile.component';
import { ResourcecenterComponent } from './professor/resourcecenter/resourcecenter.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfregistrationComponent } from './registration/profregistration/profregistration.component';
import { StudentsComponent } from './professor/students/students.component';
import { StudentsprofileComponent } from './professor/studentsprofile/studentsprofile.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { ProfessorListComponent } from './admin/professor-list/professor-list.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { CoursRegComponent } from './registration/cours-reg/cours-reg.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'professorlogin', component: ProfessorloginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'course', component: CourseComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'coursedetails', component: CoursedetailsComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'assignment', component: AssignmentComponent},
  {path: 'assignment-upload/:id', component:AssignmentUploadComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'admindashboard', component: AdmindashboardComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'professordashboard', component: ProfessordashboardComponent},
  {path: 'professor-coursedetails', component: ProfessorCoursedetailsComponent},
  {path: 'professorprofile', component: ProfessorprofileComponent},
  {path: 'resourcecenter', component:ResourcecenterComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'profregistration', component: ProfregistrationComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'studentsprofile', component: StudentsprofileComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'professor-list', component: ProfessorListComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'cours-reg', component: CoursRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
