import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerResetComponent } from './mer-reset.component';

describe('MerResetComponent', () => {
  let component: MerResetComponent;
  let fixture: ComponentFixture<MerResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
