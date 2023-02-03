import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoiconsComponent } from './addtoicons.component';

describe('AddtoiconsComponent', () => {
  let component: AddtoiconsComponent;
  let fixture: ComponentFixture<AddtoiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtoiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtoiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
