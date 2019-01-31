import { TestBed } from '@angular/core/testing';

import { MatxConfirmButtonService } from './matx-confirm-button.service';

describe('MatxConfirmButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatxConfirmButtonService = TestBed.get(MatxConfirmButtonService);
    expect(service).toBeTruthy();
  });
});
