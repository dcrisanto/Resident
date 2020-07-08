import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterServiceComponent } from './water-service.component';

describe('WaterServiceComponent', () => {
  let component: WaterServiceComponent;
  let fixture: ComponentFixture<WaterServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
