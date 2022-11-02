import { TestBed } from '@angular/core/testing';

import { GridSearchDataService } from './grid-search-data.service';

describe('GridSearchDataService', () => {
  let service: GridSearchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridSearchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
