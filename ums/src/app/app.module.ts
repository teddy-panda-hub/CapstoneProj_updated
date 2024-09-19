import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgChartsModule } from 'ng2-charts';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfessorloginComponent } from './professor/professorlogin/professorlogin.component';
import { DashboardComponent } from './studentdashboard/dashboard.component';
import { LatestNewsComponent } from './studentdashboard/latest-news/latest-news.component';
import { CalenderComponent } from './studentdashboard/calender/calender.component';
import { TimelineComponent } from './studentdashboard/timeline/timeline.component';
import { AttendenceComponent } from './studentdashboard/attendence/attendence.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from './course/course.component';
import { AitutorComponent } from './aitutor/aitutor.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { LatestTechNewsComponent } from './latest-tech-news/latest-tech-news.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ResourcesComponent } from './coursedetails/resources/resources.component';
import { AssignmentComponent } from './professor/assignment/assignment.component';
import { AssignmentUploadComponent } from './assignment-upload/assignment-upload.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ProfessorComponent } from './professor/professor.component';
import { CoursesComponent } from './professor/professorcourses/courses.component';
import { ProfessordashboardComponent } from './professor/professordashboard/professordashboard.component';
import { ProfessorCoursedetailsComponent } from './professor/professor-coursedetails/professor-coursedetails.component';
import { ProfcoursecardComponent } from './professor/profcoursecard/profcoursecard.component';
import { ProfessorprofileComponent } from './professor/professorprofile/professorprofile.component';
import { BookComponent } from './professor/book/book.component';
import { ResourcecenterComponent } from './professor/resourcecenter/resourcecenter.component';
import { Chart } from 'chart.js';
import { Plugin } from 'chart.js';
import { RegistrationComponent } from './registration/registration.component';
import { ProfregistrationComponent } from './registration/profregistration/profregistration.component';
import { StudentsComponent } from './professor/students/students.component';
import { StudentsprofileComponent } from './professor/studentsprofile/studentsprofile.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { ProfessorListComponent } from './admin/professor-list/professor-list.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { CoursRegComponent } from './registration/cours-reg/cours-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfessorloginComponent,
    DashboardComponent,
    LatestNewsComponent,
    CalenderComponent,
    TimelineComponent,
    AttendenceComponent,
    HeaderComponent,
    CourseComponent,
    AitutorComponent,
    CourseCardComponent,
    FooterComponent,
    ProfileComponent,
    LatestTechNewsComponent,
    CoursedetailsComponent,
    ResourcesComponent,
    AssignmentComponent,
    AssignmentUploadComponent,
    AdminloginComponent,
    AdminComponent,
    AdmindashboardComponent,
    ProfessorComponent,
    CoursesComponent,
    ProfessordashboardComponent,
    ProfessorCoursedetailsComponent,
    ProfcoursecardComponent,
    ProfessorprofileComponent,
    BookComponent,
    ResourcecenterComponent,
    RegistrationComponent,
    ProfregistrationComponent,
    StudentsComponent,
    StudentsprofileComponent,
    StudentListComponent,
    ProfessorListComponent,
    CourseListComponent,
    CoursRegComponent
],
  imports: [
    ReactiveFormsModule,
    NgChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    HttpClientModule 
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    // Register the custom plugin with Chart.js
    Chart.register(this.myCustomPlugin);
  }

  private myCustomPlugin: Plugin<'doughnut'> = {
    id: 'myCustomPlugin',
    beforeDraw: (chart: { ctx: any; chartArea: any; }) => {
      const { ctx, chartArea } = chart;
      const { width, height } = chartArea;
      const centerX = width / 2;
      const centerY = height / 2;
      
      ctx.save();
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000';
      ctx.fillText('75%', centerX, centerY);
      ctx.restore();
    }
  };
}
