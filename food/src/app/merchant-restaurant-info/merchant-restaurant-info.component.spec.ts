import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRestaurantInfoComponent } from './merchant-restaurant-info.component';

describe('MerchantRestaurantInfoComponent', () => {
  let component: MerchantRestaurantInfoComponent;
  let fixture: ComponentFixture<MerchantRestaurantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantRestaurantInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantRestaurantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
