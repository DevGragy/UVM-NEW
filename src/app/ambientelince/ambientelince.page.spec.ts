import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientelincePage } from './ambientelince.page';

describe('AmbientelincePage', () => {
  let component: AmbientelincePage;
  let fixture: ComponentFixture<AmbientelincePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientelincePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientelincePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
