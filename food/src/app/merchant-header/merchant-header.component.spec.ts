import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantHeaderComponent } from './merchant-header.component';

describe('MerchantHeaderComponent', () => {
  let component: MerchantHeaderComponent;
  let fixture: ComponentFixture<MerchantHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
