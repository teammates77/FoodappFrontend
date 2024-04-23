import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRegComponent } from './merchant-reg.component';

describe('MerchantRegComponent', () => {
  let component: MerchantRegComponent;
  let fixture: ComponentFixture<MerchantRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
