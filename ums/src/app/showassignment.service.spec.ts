import { TestBed } from '@angular/core/testing';

import { ShowassignmentService } from './showassignment.service';

describe('ShowassignmentService', () => {
  let service: ShowassignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowassignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
