import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCardComponent } from './field-card.component';

describe('FieldCardComponent', () => {
  let component: FieldCardComponent;
  let fixture: ComponentFixture<FieldCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
