import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideinfoPage } from './rideinfo.page';

describe('RideinfoPage', () => {
  let component: RideinfoPage;
  let fixture: ComponentFixture<RideinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
