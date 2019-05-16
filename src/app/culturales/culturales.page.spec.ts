import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalesPage } from './culturales.page';

describe('CulturalesPage', () => {
  let component: CulturalesPage;
  let fixture: ComponentFixture<CulturalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
