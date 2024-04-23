import { TestBed } from '@angular/core/testing';

import { MerchantRestaurantService } from './merchant-restaurant.service';

describe('MerchantRestaurantService', () => {
  let service: MerchantRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
