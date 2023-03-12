import { TestBed } from '@angular/core/testing';

import { HomeEditService } from './home-edit.service';

describe('HomeEditService', () => {
  let service: HomeEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
