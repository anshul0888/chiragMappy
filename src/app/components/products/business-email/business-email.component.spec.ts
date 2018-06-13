import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEmailComponent } from './business-email.component';

describe('BusinessEmailComponent', () => {
  let component: BusinessEmailComponent;
  let fixture: ComponentFixture<BusinessEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
