import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganIconComponent } from './organ-icon.component';

describe('OrganIconComponent', () => {
  let component: OrganIconComponent;
  let fixture: ComponentFixture<OrganIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
