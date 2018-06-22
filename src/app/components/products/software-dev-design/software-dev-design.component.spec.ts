import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevDesignComponent } from './software-dev-design.component';

describe('SoftwareDevDesignComponent', () => {
  let component: SoftwareDevDesignComponent;
  let fixture: ComponentFixture<SoftwareDevDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDevDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDevDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
