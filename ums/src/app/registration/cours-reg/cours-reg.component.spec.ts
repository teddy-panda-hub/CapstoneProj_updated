import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursRegComponent } from './cours-reg.component';

describe('CoursRegComponent', () => {
  let component: CoursRegComponent;
  let fixture: ComponentFixture<CoursRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
