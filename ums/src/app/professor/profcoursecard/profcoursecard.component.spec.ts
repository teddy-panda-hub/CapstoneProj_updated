import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfcoursecardComponent } from './profcoursecard.component';

describe('ProfcoursecardComponent', () => {
  let component: ProfcoursecardComponent;
  let fixture: ComponentFixture<ProfcoursecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfcoursecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfcoursecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
