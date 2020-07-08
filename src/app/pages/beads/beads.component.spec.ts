import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeadsComponent } from './beads.component';

describe('BeadsComponent', () => {
  let component: BeadsComponent;
  let fixture: ComponentFixture<BeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
