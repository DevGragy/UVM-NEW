import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasPage } from './programas.page';

describe('ProgramasPage', () => {
  let component: ProgramasPage;
  let fixture: ComponentFixture<ProgramasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
