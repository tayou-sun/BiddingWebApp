import { TestBed } from '@angular/core/testing';

import { JqLibraryService } from './jq-library.service';

describe('JqLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JqLibraryService = TestBed.get(JqLibraryService);
    expect(service).toBeTruthy();
  });
});
