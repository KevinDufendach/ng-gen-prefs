import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRedcapMaterialComponent } from './ng-redcap-material.component';

describe('NgRedcapMaterialComponent', () => {
  let component: NgRedcapMaterialComponent;
  let fixture: ComponentFixture<NgRedcapMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRedcapMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRedcapMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
