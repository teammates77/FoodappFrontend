import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerForgotComponent } from './mer-forgot.component';

describe('MerForgotComponent', () => {
  let component: MerForgotComponent;
  let fixture: ComponentFixture<MerForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerForgotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
