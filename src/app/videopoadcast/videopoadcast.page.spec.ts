import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopoadcastPage } from './videopoadcast.page';

describe('VideopoadcastPage', () => {
  let component: VideopoadcastPage;
  let fixture: ComponentFixture<VideopoadcastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideopoadcastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideopoadcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
