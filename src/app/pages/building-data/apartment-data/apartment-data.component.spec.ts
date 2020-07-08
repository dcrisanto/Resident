import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentDataComponent } from './apartment-data.component';

describe('ApartmentDataComponent', () => {
  let component: ApartmentDataComponent;
  let fixture: ComponentFixture<ApartmentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
