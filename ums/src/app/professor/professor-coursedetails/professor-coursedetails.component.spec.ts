import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCoursedetailsComponent } from './professor-coursedetails.component';

describe('ProfessorCoursedetailsComponent', () => {
  let component: ProfessorCoursedetailsComponent;
  let fixture: ComponentFixture<ProfessorCoursedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorCoursedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorCoursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
