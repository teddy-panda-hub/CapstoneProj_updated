import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfregistrationComponent } from './profregistration.component';

describe('ProfregistrationComponent', () => {
  let component: ProfregistrationComponent;
  let fixture: ComponentFixture<ProfregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
