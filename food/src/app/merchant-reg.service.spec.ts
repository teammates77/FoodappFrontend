import { TestBed } from '@angular/core/testing';

import { MerchantRegService } from './merchant-reg.service';

describe('MerchantRegService', () => {
  let service: MerchantRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
