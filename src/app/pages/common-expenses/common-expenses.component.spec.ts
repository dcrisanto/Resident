import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonExpensesComponent } from './common-expenses.component';

describe('CommonExpensesComponent', () => {
  let component: CommonExpensesComponent;
  let fixture: ComponentFixture<CommonExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
