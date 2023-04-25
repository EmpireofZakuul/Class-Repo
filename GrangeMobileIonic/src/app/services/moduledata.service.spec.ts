import { TestBed } from '@angular/core/testing';

import { ModuledataService } from './moduledata.service';

describe('ModuledataService', () => {
  let service: ModuledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuledataService);
  });

  it('should be created', () => {
    const service: ModuledataService = TestBed.get(ModuledataService);
    expect(service).toBeTruthy();
  });
});
