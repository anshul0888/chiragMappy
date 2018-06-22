import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepulsionManagementComponent } from './repulsion-management.component';

describe('RepulsionManagementComponent', () => {
  let component: RepulsionManagementComponent;
  let fixture: ComponentFixture<RepulsionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepulsionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepulsionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
