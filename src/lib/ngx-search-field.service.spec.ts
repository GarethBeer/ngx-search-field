import { TestBed } from '@angular/core/testing';

import { NgxSearchFieldService } from './ngx-search-field.service';

describe('NgxSearchFieldService', () => {
  let service: NgxSearchFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSearchFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
