import { TestBed } from '@angular/core/testing';

import { FeEditableRowTableService } from './fe-editable-row-table.service';

describe('FeEditableRowTableService', () => {
  let service: FeEditableRowTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeEditableRowTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
