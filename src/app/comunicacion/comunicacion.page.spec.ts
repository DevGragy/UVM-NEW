import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionPage } from './comunicacion.page';

describe('ComunicacionPage', () => {
  let component: ComunicacionPage;
  let fixture: ComponentFixture<ComunicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
