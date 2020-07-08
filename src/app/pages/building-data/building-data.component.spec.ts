import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDataComponent } from './building-data.component';

describe('BuildingDataComponent', () => {
  let component: BuildingDataComponent;
  let fixture: ComponentFixture<BuildingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
