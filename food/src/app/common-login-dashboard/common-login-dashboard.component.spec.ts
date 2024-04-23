import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLoginDashboardComponent } from './common-login-dashboard.component';

describe('CommonLoginDashboardComponent', () => {
  let component: CommonLoginDashboardComponent;
  let fixture: ComponentFixture<CommonLoginDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonLoginDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonLoginDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
