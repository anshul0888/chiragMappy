import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrualTourComponent } from './vitrual-tour.component';

describe('VitrualTourComponent', () => {
  let component: VitrualTourComponent;
  let fixture: ComponentFixture<VitrualTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrualTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrualTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
