import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoSmmComponent } from './smo-smm.component';

describe('SmoSmmComponent', () => {
  let component: SmoSmmComponent;
  let fixture: ComponentFixture<SmoSmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoSmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoSmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
