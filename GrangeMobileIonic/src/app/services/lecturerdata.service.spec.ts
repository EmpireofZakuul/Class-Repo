import { TestBed } from '@angular/core/testing';

import { LecturerdataService } from './lecturerdata.service';

describe('LecturerdataService', () => {
  let service: LecturerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerdataService);
  });

  it('should be created', () => {
    const service: LecturerdataService = TestBed.get(LecturerdataService);
    expect(service).toBeTruthy();
  });
});
