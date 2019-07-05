import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsDisplayComponent } from './conditions-display.component';

describe('ConditionsDisplayComponent', () => {
  let component: ConditionsDisplayComponent;
  let fixture: ComponentFixture<ConditionsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
