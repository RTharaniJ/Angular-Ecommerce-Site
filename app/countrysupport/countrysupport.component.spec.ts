import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrysupportComponent } from './countrysupport.component';

describe('CountrysupportComponent', () => {
  let component: CountrysupportComponent;
  let fixture: ComponentFixture<CountrysupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrysupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrysupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
