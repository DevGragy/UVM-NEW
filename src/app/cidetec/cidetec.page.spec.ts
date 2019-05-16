import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidetecPage } from './cidetec.page';

describe('CidetecPage', () => {
  let component: CidetecPage;
  let fixture: ComponentFixture<CidetecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidetecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidetecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
