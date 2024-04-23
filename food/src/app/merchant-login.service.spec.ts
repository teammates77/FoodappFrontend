import { TestBed } from '@angular/core/testing';

import { MerchantLoginService } from './merchant-login.service';

describe('MerchantLoginService', () => {
  let service: MerchantLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
