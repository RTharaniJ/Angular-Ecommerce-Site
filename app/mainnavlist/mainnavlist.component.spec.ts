import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavlistComponent } from './mainnavlist.component';

describe('MainnavlistComponent', () => {
  let component: MainnavlistComponent;
  let fixture: ComponentFixture<MainnavlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainnavlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainnavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
