import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsprofileComponent } from './studentsprofile.component';

describe('StudentsprofileComponent', () => {
  let component: StudentsprofileComponent;
  let fixture: ComponentFixture<StudentsprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
