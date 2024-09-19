import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTechNewsComponent } from './latest-tech-news.component';

describe('LatestTechNewsComponent', () => {
  let component: LatestTechNewsComponent;
  let fixture: ComponentFixture<LatestTechNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTechNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTechNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
