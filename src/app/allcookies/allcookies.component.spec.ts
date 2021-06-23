import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcookiesComponent } from './allcookies.component';

describe('AllcookiesComponent', () => {
  let component: AllcookiesComponent;
  let fixture: ComponentFixture<AllcookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
