import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcecenterComponent } from './resourcecenter.component';

describe('ResourcecenterComponent', () => {
  let component: ResourcecenterComponent;
  let fixture: ComponentFixture<ResourcecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcecenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
