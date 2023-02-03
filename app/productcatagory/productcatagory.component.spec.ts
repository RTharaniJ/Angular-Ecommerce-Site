import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatagoryComponent } from './productcatagory.component';

describe('ProductcatagoryComponent', () => {
  let component: ProductcatagoryComponent;
  let fixture: ComponentFixture<ProductcatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
