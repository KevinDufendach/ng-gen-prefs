import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsLoginDisplayComponent } from './sms-login-display.component';

describe('SmsLoginDisplayComponent', () => {
  let component: SmsLoginDisplayComponent;
  let fixture: ComponentFixture<SmsLoginDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsLoginDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsLoginDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
