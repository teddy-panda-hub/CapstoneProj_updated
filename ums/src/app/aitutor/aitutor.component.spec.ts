import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AitutorComponent } from './aitutor.component';

describe('AitutorComponent', () => {
  let component: AitutorComponent;
  let fixture: ComponentFixture<AitutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AitutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AitutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
