import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantItemsComponent } from './update-restaurant-items.component';

describe('UpdateRestaurantItemsComponent', () => {
  let component: UpdateRestaurantItemsComponent;
  let fixture: ComponentFixture<UpdateRestaurantItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestaurantItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestaurantItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
