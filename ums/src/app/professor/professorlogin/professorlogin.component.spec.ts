import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorloginComponent } from './professorlogin.component';

describe('ProfessorloginComponent', () => {
  let component: ProfessorloginComponent;
  let fixture: ComponentFixture<ProfessorloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
